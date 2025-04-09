import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

import bcrypt from "bcryptjs";
import { supabase } from "@/app/lib/supabase";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const photoId = searchParams.get("photoId");
  const page = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = 8;

  if (!photoId) {
    return NextResponse.json({ message: "photoId 필요" }, { status: 400 });
  }

  const cookieStore = await cookies(); // ✅ 쿠키 접근
  const userId = cookieStore.get("like_user_id")?.value;

  const { data: likedData } = await supabase
    .from("likes")
    .select("comment_id")
    .eq("user_id", userId)
    .eq("liked", true);

  const likedIds = likedData?.map((item) => item.comment_id) ?? [];

  // 인기 top3 댓글
  const { data: topComments } = await supabase
    .from("comments")
    .select("id, nickname, content, likes, created_at")
    .eq("photo_id", photoId)
    .gt("likes", 0)
    .order("likes", { ascending: false })
    .order("created_at", { ascending: false })
    .limit(3);

  const top3 =
    topComments?.map((comment) => ({
      ...comment,
      liked: likedIds.includes(comment.id),
    })) ?? [];

  // 최신순 댓글
  const { data: recentComments } = await supabase
    .from("comments")
    .select("id, nickname, content, likes, created_at")
    .eq("photo_id", photoId)
    .order("created_at", { ascending: false })
    .range((page - 1) * pageSize, page * pageSize - 1);

  const { count } = await supabase
    .from("comments")
    .select("*", { count: "exact", head: true })
    .eq("photo_id", photoId);

  const recent =
    recentComments?.map((comment) => ({
      ...comment,
      liked: likedIds.includes(comment.id),
    })) ?? [];

  const totalPages = Math.ceil((count || 0) / pageSize);

  return NextResponse.json({
    topComments: top3,
    recentComments: recent,
    totalCount: count || 0,
    currentPage: page,
    totalPages,
  });
}

export async function POST(req: Request) {
  try {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { photo_id, nickname, password_hash, content } = await req.json();

    if (!photo_id || !nickname || !password_hash || !content) {
      return NextResponse.json(
        { message: "입력하지 않은 부분을 확인해주세요." },
        { status: 400 }
      );
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password_hash, saltRounds);

    const { error } = await supabase.from("comments").insert([
      {
        photo_id,
        nickname,
        password_hash: hashedPassword,
        content,
        likes: 0, // 기본 좋아요 수 0으로 설정
      },
    ]);

    if (error) {
      return NextResponse.json(
        {
          message: `댓글 추가 실패 : ${error.message}`,
        },
        {
          status: 500,
        }
      );
    }
    revalidateTag("ssr-comments-update");

    return NextResponse.json({ message: "댓글이 추가되었습니다." });
  } catch (e) {
    return NextResponse.json(
      {
        message: "서버 오류가 발생하였습니다.",
      },
      { status: 500 }
    );
  }
}

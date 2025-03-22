import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { supabase } from "@/app/lib/supabase";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const photoId = searchParams.get("photoId");
  const page = parseInt(searchParams.get("page") || "1", 8);
  const pageSize = 8; // 한 페이지당 8개

  if (!photoId) {
    return NextResponse.json({ message: "photoId 필요" }, { status: 400 });
  }

  // 1️⃣ 좋아요 순위 상위 3개 댓글 가져오기
  if (searchParams.get("type") === "top3") {
    const { data, error } = await supabase
      .from("comments")
      .select("id, nickname, content, likes, created_at")
      .eq("photo_id", photoId)
      .gt("likes", 0)
      .order("likes", { ascending: false })
      .order("created_at", { ascending: false })
      .limit(3);

    if (error) {
      return NextResponse.json(
        { message: "좋아요 순위 조회 실패" },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  }

  const { count, error: countError } = await supabase
    .from("comments")
    .select("*", { count: "exact", head: true }) // ✅ 총 개수만 가져옴
    .eq("photo_id", photoId);

  if (countError) {
    return NextResponse.json(
      { message: "댓글 개수 조회 실패" },
      { status: 500 }
    );
  }

  // 2️⃣ 최신순 댓글 가져오기 (페이지네이션)
  const { data, error } = await supabase
    .from("comments")
    .select("id, nickname, content, likes, created_at")
    .eq("photo_id", photoId)
    .order("created_at", { ascending: false })
    .range((page - 1) * pageSize, page * pageSize - 1);

  if (error) {
    return NextResponse.json({ message: "댓글 조회 실패" }, { status: 500 });
  }

  return NextResponse.json({ data, totalCount: count });
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

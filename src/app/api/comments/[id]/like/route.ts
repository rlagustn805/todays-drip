import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";

function getClientIp(req: NextRequest): string {
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  return ip.split(",")[0].trim();
}

export async function POST(req: NextRequest) {
  const url = req.nextUrl;
  const id = url.pathname.split("/")[3];
  const commentId = Number(id);
  const userIp = getClientIp(req);

  if (!commentId || !userIp) {
    return NextResponse.json(
      { message: "잘못된 요청입니다." },
      { status: 400 }
    );
  }

  const { data: currentLike } = await supabase
    .from("likes")
    .select("liked")
    .eq("comment_id", commentId)
    .eq("user_ip", userIp)
    .maybeSingle();

  const newLikedState = !currentLike?.liked;

  // UPSERT
  await supabase.from("likes").upsert(
    {
      comment_id: commentId,
      user_ip: userIp,
      liked: newLikedState,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "comment_id, user_ip" }
  );

  // 댓글 테이블 likes 수 반영
  await supabase.rpc(newLikedState ? "increment_like" : "decrement_like", {
    comment_id: commentId,
  });

  return NextResponse.json({
    message: newLikedState ? "좋아요 추가됨" : "좋아요 취소됨",
    liked: newLikedState,
  });
}

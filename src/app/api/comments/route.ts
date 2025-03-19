import { NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const photoId = searchParams.get("photoId");

  if (!photoId)
    return NextResponse.json({ message: "photoId 필요" }, { status: 400 });

  const { data } = await supabase
    .from("comments")
    .select("*")
    .eq("photo_id", photoId)
    .order("likes", { ascending: false });

  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const { photoId, nickname, password, content } = await req.json();
  if (!photoId || !nickname || !password || !content) {
    return NextResponse.json({ message: "필수값 누락" }, { status: 400 });
  }

  await supabase.from("comments").insert([
    {
      photo_id: photoId,
      nickname,
      password_hash: password,
      content,
      likes: 0,
    },
  ]);

  return NextResponse.json({ message: "댓글이 추가되었습니다." });
}

import { NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { password, content } = await req.json();

  // 기존 댓글 조회
  const { data } = await supabase
    .from("comments")
    .select("password_hash")
    .eq("id", params.id)
    .single();

  if (!data || data.password_hash !== password) {
    return NextResponse.json({ message: "비밀번호 불일치" }, { status: 403 });
  }

  await supabase.from("comments").update({ content }).eq("id", params.id);
  return NextResponse.json({ message: "댓글 수정 완료" });
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { password } = await req.json();

  const { data } = await supabase
    .from("comments")
    .select("password_hash")
    .eq("id", params.id)
    .single();
  if (!data || data.password_hash !== password) {
    return NextResponse.json({ message: "비밀번호 불일치" }, { status: 403 });
  }

  await supabase.from("comments").delete().eq("id", params.id);
  return NextResponse.json({ message: "댓글 삭제 완료" });
}

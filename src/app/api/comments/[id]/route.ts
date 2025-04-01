import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { content } = await req.json();
  const { id } = await context.params;

  const { error } = await supabase
    .from("comments")
    .update({ content })
    .eq("id", id);

  if (error) {
    return NextResponse.json(
      { message: "댓글 수정에 실패했습니다." },
      { status: 500 }
    );
  }

  return NextResponse.json({ message: "댓글 수정 완료" });
}

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const { error } = await supabase.from("comments").delete().eq("id", id);

  if (error) {
    return NextResponse.json(
      { message: "댓글 삭제에 실패했습니다." },
      { status: 500 }
    );
  }

  return NextResponse.json({ message: "댓글 삭제 완료" });
}

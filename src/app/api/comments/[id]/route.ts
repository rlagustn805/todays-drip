import { NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { content } = await req.json();

  const { error } = await supabase
    .from("comments")
    .update({ content })
    .eq("id", params.id);

  if (error) {
    return NextResponse.json(
      { message: "댓글 수정에 실패했습니다." },
      { status: 500 }
    );
  }

  return NextResponse.json({ message: "댓글 수정 완료" });
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { error } = await supabase
    .from("comments")
    .delete()
    .eq("id", params.id);

  if (error) {
    return NextResponse.json(
      { message: "댓글 삭제에 실패했습니다." },
      { status: 500 }
    );
  }

  return NextResponse.json({ message: "댓글 삭제 완료" });
}

import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { supabase } from "@/app/lib/supabase";

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { password } = await req.json();

  if (!password) {
    return NextResponse.json(
      {
        message: "비밀번호가 입력되지 않았습니다.",
      },
      {
        status: 400,
      }
    );
  }

  const { data, error } = await supabase
    .from("comments")
    .select("password_hash")
    .eq("id", params.id)
    .single();

  if (error || !data) {
    return NextResponse.json(
      {
        message: "댓글을 찾을 수 없습니다.",
      },
      {
        status: 404,
      }
    );
  }

  const isValid = await bcrypt.compare(password, data.password_hash);

  if (!isValid) {
    return NextResponse.json(
      { message: "비밀번호가 일치하지 않습니다." },
      { status: 403 }
    );
  }

  return NextResponse.json({ message: "비밀번호 확인 완료" });
}

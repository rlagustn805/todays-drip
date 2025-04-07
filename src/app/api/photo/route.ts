import { NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";
import { getToday } from "@/utils/getToday";

export async function GET() {
  const today = getToday(); // YYYY-MM-DD
  const { data, error } = await supabase
    .from("photos")
    .select("*")
    .eq("id", today)
    .single();

  if (error)
    return NextResponse.json({ message: "오늘의 짤 없음" }, { status: 404 });

  return NextResponse.json(data);
}

import { NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";
import { getToday } from "@/utils/getToday";

export async function GET() {
  const today = getToday();

  try {
    // 📌 최근 사진 50개 조회 (충분한 범위 확보)
    const { data: photos, error } = await supabase
      .from("photos")
      .select("id, url, created_at")
      .order("created_at", { ascending: false })
      .limit(50);

    if (error) throw error;

    // 📌 오늘 날짜 제외
    const filteredPhotos = photos.filter(
      (photo) => !photo.created_at?.startsWith(today)
    );

    const result: any[] = [];
    let count = 0;

    await filteredPhotos.reduce(async (prevPromise, photo) => {
      await prevPromise;

      if (count >= 10) return;

      const { data: topComment } = await supabase
        .from("comments")
        .select("nickname, content, likes")
        .eq("photo_id", photo.id)
        .order("likes", { ascending: false })
        .limit(1)
        .single();

      if (topComment && topComment.likes && topComment.likes > 0) {
        result.push({ ...photo, topComment });
        count += 1;
      }
    }, Promise.resolve());

    return NextResponse.json(result);
  } catch (e) {
    return NextResponse.json(
      { message: "과거 사진 불러오기 실패", e },
      { status: 500 }
    );
  }
}

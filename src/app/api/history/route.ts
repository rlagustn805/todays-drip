// /api/history/route.ts

import { NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";
import { getToday, getYesterday } from "@/utils/getToday";

export async function GET() {
  const today = getToday();
  const dripKingDate = getYesterday();

  try {
    // ✅ 전날의 사진 ID
    const { data: yesterdayPhoto } = await supabase
      .from("photos")
      .select("id")
      .eq("id", dripKingDate)
      .single();

    // ✅ 전날의 사진이 존재할 때만 정리 로직 실행
    if (yesterdayPhoto) {
      const { data: topComment } = await supabase
        .from("comments")
        .select("id")
        .eq("photo_id", yesterdayPhoto.id)
        .order("likes", { ascending: false })
        .order("created_at", { ascending: true })
        .limit(1)
        .single();

      // 🔥 전날 댓글 중 1등 외 모두 삭제
      if (topComment?.id) {
        await supabase
          .from("comments")
          .delete()
          .eq("photo_id", yesterdayPhoto.id)
          .not("id", "eq", topComment.id);
      }
    }

    // 🟡 이후: "오늘 (getToday)" 제외한 사진 목록 조회
    const { data: photos, error } = await supabase
      .from("photos")
      .select("id, url, created_at")
      .order("created_at", { ascending: false })
      .limit(50);

    if (error) throw error;

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

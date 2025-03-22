import { NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";
import { getToday } from "@/utils/getToday";

export async function GET() {
  const today = getToday();
  try {
    const { data: photos, error } = await supabase
      .from("photos")
      .select("id, url, created_at")
      .order("created_at", { ascending: false })
      .limit(10);

    if (error) throw error;

    const filteredPhotos = photos.filter(
      (photo) => !photo.created_at?.startsWith(today)
    );

    const photosWithComments = await Promise.all(
      filteredPhotos.map(async (photo) => {
        const { data: topComment } = await supabase
          .from("comments")
          .select("nickname, content, likes")
          .eq("photo_id", photo.id)
          .order("likes", { ascending: false })
          .limit(1)
          .single();

        const validTopComment =
          topComment && topComment.likes && topComment.likes > 0
            ? topComment
            : null;

        return { ...photo, topComment: validTopComment || null };
      })
    );

    return NextResponse.json(photosWithComments);
  } catch (e) {
    return NextResponse.json(
      { message: "과거 사진 불러오기 실패", e },
      { status: 500 }
    );
  }
}

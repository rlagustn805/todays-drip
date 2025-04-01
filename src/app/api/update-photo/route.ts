import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { supabase } from "@/app/lib/supabase";
import { getToday } from "@/utils/getToday";

// 사용할 테마 배열
const gifThemes = ["funny", "reaction", "meme"];

export async function POST() {
  try {
    const GIPHY_API_KEY = process.env.GIPHY_API_KEY!;

    // 1️⃣ 랜덤 테마 선택 (funny, reaction, meme 중 하나)
    const randomTheme = gifThemes[Math.floor(Math.random() * gifThemes.length)];

    // 2️⃣ Giphy API 호출
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${randomTheme}&limit=200&api_key=${GIPHY_API_KEY}`
    );
    const data = await response.json();

    // 3️⃣ GIF가 포함된 데이터만 필터링
    if (!data.data || data.data.length === 0) {
      return NextResponse.json(
        { message: "GIF를 찾을 수 없습니다." },
        { status: 404 }
      );
    }

    // 4️⃣ 랜덤 GIF 1개 선택
    const randomGif =
      data.data[Math.floor(Math.random() * data.data.length)].images.original
        .url;

    // 5️⃣ Supabase에 저장할 데이터 생성
    const today = getToday(); // YYYY-MM-DD 형식

    // 6️⃣ Supabase에 저장 (기존 데이터 덮어쓰기)
    const { error } = await supabase
      .from("photos")
      .upsert([{ id: today, url: randomGif, created_at: new Date() }]);

    if (error) throw error;

    revalidateTag("today-and-history");
    return NextResponse.json({
      message: "오늘의 GIF 저장 성공!",
      url: randomGif,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "GIF 저장 실패", error },
      { status: 500 }
    );
  }
}

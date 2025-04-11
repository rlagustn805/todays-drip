"use client";

import Image from "next/image";
import { useEffect } from "react";

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function KakaoShareBtn() {
  useEffect(() => {
    if (!window.Kakao) return;

    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
    }

    window.Kakao.Share.createDefaultButton({
      container: "#kakaotalk-sharing-btn",
      objectType: "feed",
      content: {
        title: "오늘의 드립",
        description: "여러분의 맛있는 드립을 기다립니다.",
        imageUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/title/mobile.png`,
        link: {
          mobileWebUrl: `${process.env.NEXT_PUBLIC_BASE_URL}`,
          webUrl: `${process.env.NEXT_PUBLIC_BASE_URL}`,
        },
      },
      buttons: [
        {
          title: "드립력 보여주기",
          link: {
            mobileWebUrl: `${process.env.NEXT_PUBLIC_BASE_URL}`,
            webUrl: `${process.env.NEXT_PUBLIC_BASE_URL}`,
          },
        },
      ],
    });
  }, []);

  return (
    <Image
      src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
      alt="카카오 공유하기 버튼"
      width={30}
      height={30}
      id="kakaotalk-sharing-btn" // ✅ 이 ID를 기준으로 자동 연결됨
      className="cursor-pointer"
    />
  );
}

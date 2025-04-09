import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full border border-gray-300 p-10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 gap-3 md:grid-cols-3">
        <div className="flex flex-col">
          <span className="text-lg mb-3">오늘의 드립</span>
          <p className="text-sm text-gray-500">
            여러분의 숨겨왔던 드립 실력을 보여주세요 ! 매일 오전 9시에 짤이
            갱신됩니다.
          </p>
        </div>
        <div className="flex flex-col">
          <span className="text-lg mb-3">바로가기</span>
          <div className="flex flex-col gap-2 text-sm text-gray-500">
            <span>
              <Link href="/" className="hover:underline">
                홈으로
              </Link>
            </span>
            <span>
              <Link href="/history" className="hover:underline">
                지난 드립왕
              </Link>
            </span>
            <span>
              <Link href="/guide" className="hover:underline">
                이용 안내
              </Link>
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-lg mb-3">서비스 소개</span>
          <p className="text-sm text-gray-500">
            오늘의 드립은 매일 한 장의 이미지와 함께 사용자들의 드립 실력을
            보여주는 서비스입니다. 좋아요를 많이 받은 댓글은 인기 드립으로
            선정되며, 비회원으로 쉽게 참여 가능합니다.
          </p>
        </div>
      </div>

      <div className="mt-5 pt-6 border-t border-gray-300 max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} 오늘의 드립. All rights reserved.
        </p>
        <div className="flex items-center gap-4 mt-4 sm:mt-0">
          <Link
            href="/terms"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            이용약관
          </Link>
          <Link
            href="/privacy"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            개인정보처리방침
          </Link>
        </div>
      </div>
    </div>
  );
}

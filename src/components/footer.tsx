import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full border border-gray-300 p-10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 gap-3 md:grid-cols-3">
        <div className="flex flex-col">
          <span className="text-lg mb-3">오늘의 드립</span>
          <p className="text-sm text-gray-500">
            매일 새로운 유머와 드립으로 여러분의 하루를 즐겁게 만들어 드립니다.
            오늘의 드립은 사용자들이 직접 참여하고 소통하는 유머 커뮤니티입니다.
          </p>
        </div>
        <div className="flex flex-col">
          <span className="text-lg mb-3">바로가기</span>
          <div className="flex flex-col text-sm text-gray-500">
            <Link href="/">홈</Link>
            <Link href="/history">지난 드립왕</Link>
            <Link href="/">이용 안내</Link>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-lg mb-3">서비스 소개</span>
          <p className="text-sm text-gray-500">
            오늘의 드립은 매일 한 장의 이미지와 함께 사용자들이 재치있는 댓글을
            남기는 서비스입니다. 좋아요를 많이 받은 댓글은 인기 댓글로 선정되며,
            비회원도 닉네임과 비밀번호만으로 쉽게 참여할 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}

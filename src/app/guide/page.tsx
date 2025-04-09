import { Metadata } from "next";
import Faq from "@/components/guide/faq";
import GuideContainer from "@/components/guide/guide-container";
import GuideContent from "@/components/guide/guide-content";
import GuideTitle from "@/components/guide/guide-title";

export const metadata: Metadata = {
  title: "오늘의 드립 | 이용 안내",
  description: "오늘의 드립 이용 방법",
  openGraph: {
    title: "오늘의 드립 | 이용 안내",
    description: "오늘의 드립 이용 방법",
    images: ["/title/mobile.png"],
  },
};

export default async function Page() {
  return (
    <div className="mt-8 p-2 flex flex-col gap-10">
      <GuideContainer>
        <GuideTitle title="오늘의 드립이란?" />
        <GuideContent>
          오늘의 드립은 매일 한 장의 이미지와 함께 사용자들의 드립 실력을
          보여주는 서비스입니다. <br />
          좋아요를 많이 받은 댓글은 인기 드립으로 선정되며, 가장 많은 좋아요를
          받은 사용자는 드립왕으로 등극합니다. <br />
          닉네임과 비밀번호만으로 쉽게 참여할 수 있으며, 자신이 작성한 댓글은
          언제든지 수정하거나 삭제할 수 있습니다. <br />
          매일 새로운 이미지와 함께 여러분의 드립력을 마음껏 뽐내보세요!
        </GuideContent>
      </GuideContainer>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-3">
        <GuideContainer>
          <GuideTitle title="댓글 작성하기" />
          <GuideContent>
            <ul className="list-decimal list-inside">
              <li>홈 화면에서 오늘의 짤을 확인합니다.</li>
              <li>댓글 작성 영역에 닉네임과 비밀번호를 입력합니다.</li>
              <li>드립 실력을 보여줍니다.</li>
              <li>댓글 버튼을 클릭하여 등록합니다.</li>
              <li>다른 사용자의 드립이 맛있으면 좋아요를 남겨줍니다.</li>
            </ul>
          </GuideContent>
        </GuideContainer>

        <GuideContainer>
          <GuideTitle title="댓글 수정/삭제하기" />
          <GuideContent>
            <ul className="list-decimal list-inside">
              <li>자신이 작성한 댓글의 수정 또는 삭제 버튼을 클릭합니다.</li>
              <li>댓글 작성 시 입력한 비밀번호를 입력합니다.</li>
              <li>
                수정의 경우, 내용을 변경한 후 수정 완료 버튼을 클릭합니다.
              </li>
              <li>삭제의 경우, 비밀번호 확인 후 댓글을 삭제할 수 있습니다.</li>
              <li>
                비회원 특성상 비밀번호를 잊어버린 경우 복구가 불가능하니
                주의하세요.
              </li>
            </ul>
          </GuideContent>
        </GuideContainer>
      </div>

      <GuideContainer>
        <GuideTitle title="드립왕 선정 방법" />
        <GuideContent>
          매일 오전 9시, 당일 가장 많은 좋아요를 받은 댓글의 작성자가 드립왕으로
          선정됩니다. <br />
          서로 다른 사용자의 댓글 좋아요가 같을 경우, 가장 오래된 댓글순으로
          기준이 됩니다. <br />
          드립왕으로 선정된 사용자는 지난 드립왕 페이지에 등록되어 명예의 전당에
          오르게 됩니다.
        </GuideContent>
      </GuideContainer>

      <Faq />
    </div>
  );
}

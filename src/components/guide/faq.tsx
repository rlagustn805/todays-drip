import FaqItem from "./faq-item";
import GuideContainer from "./guide-container";
import GuideTitle from "./guide-title";

const faqItems = [
  {
    question: "회원가입이 필요한가요?",
    answer:
      "아니요, 오늘의 드립은 별도의 회원가입 없이 닉네임과 비밀번호만으로 참여할 수 있습니다. 비밀번호는 댓글 수정/삭제 시 필요하니 기억해두세요.",
  },
  {
    question: "매일 몇 시에 새로운 이미지가 업데이트되나요?",
    answer:
      "매일 오전 9시(09:00)에 새로운 짤로 업데이트됩니다. 전날의 드립왕도 이 시간에 선정됩니다.",
  },
  {
    question: "비밀번호를 잊어버렸어요. 어떻게 해야 하나요?",
    answer:
      "비회원 시스템 특성상 비밀번호 복구 기능은 제공하지 않습니다. 댓글 작성 시 사용한 비밀번호를 꼭 기억해두시기 바랍니다.",
  },
  {
    question: "부적절한 댓글은 어떻게 신고하나요?",
    answer:
      "현재는 별도의 신고 기능을 제공하지 않습니다. 추후 업데이트를 통해 신고 기능이 추가될 예정입니다.",
  },
  {
    question: "내 댓글이 인기 드립에 선정되려면 어떻게 해야 하나요?",
    answer:
      "다른 사용자들로부터 좋아요를 많이 받아야 합니다. 드립력 맛있는 댓글을 작성하여 많은 사람들의 좋아요를 받아보세요!",
  },
];

export default function Faq() {
  return (
    <GuideContainer>
      <GuideTitle title="자주 묻는 질문" />
      <div className="divide-y border border-gray-300 rounded-lg ">
        {faqItems.map((item, index) => (
          <FaqItem
            // eslint-disable-next-line react/no-array-index-key
            key={`faq-${index}`}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </GuideContainer>
  );
}

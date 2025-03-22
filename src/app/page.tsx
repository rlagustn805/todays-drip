import CommentsContainer from "@/components/comments/comments-container";
import MenuBar from "@/components/menu-bar";
import TodayPhoto from "@/components/today-photo";
import { getToday } from "@/utils/getToday";

export default async function Home() {
  const today = getToday();

  return (
    <div className="flex flex-col gap-5">
      <MenuBar />
      <div className="text-lg font-bold bg-purple-400 p-2 text-white rounded-lg text-center">
        오늘의 드립왕을 도전해보세요!
        <p>매일 오전 9시에 업데이트가 됩니다.</p>
        <p>{today}일, 오늘의 짤</p>
      </div>
      <TodayPhoto />

      <CommentsContainer />
    </div>
  );
}

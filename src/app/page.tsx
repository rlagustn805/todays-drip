import MenuBar from "@/components/menu-bar";
import TodayPhoto from "@/components/today-photo";
import { getToday } from "@/utils/getToday";

export default async function Home() {
  const today = getToday();

  return (
    <div className="flex flex-col gap-5 text-center">
      <MenuBar />
      <div>
        <div className="text-lg font-bold bg-purple-400 p-2 text-white rounded-lg">
          오늘의 드립왕을 도전해보세요!
          <p>{today}</p>
        </div>
      </div>
      <TodayPhoto />
    </div>
  );
}

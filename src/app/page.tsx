import CommentsContainer from "@/components/comments/comments-container";
import KakaoShareBtn from "@/components/kakao-share-btn";
import TodayPhoto from "@/components/today-photo";
import UpdatePhotoButton from "@/components/updatePhoto";
import { getToday } from "@/utils/getToday";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const today = getToday();
  const { page } = await searchParams;

  const currentPage = Number(page ?? "1");

  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-lg border border-gray-300 bg-white">
        <div className="p-4">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-semibold">오늘의 짤</span>
            <span className="text-sm text-gray-500">{today}</span>
          </div>
          <TodayPhoto />
          <UpdatePhotoButton />
        </div>
      </div>
      <CommentsContainer today={today} page={currentPage} />
    </div>
  );
}

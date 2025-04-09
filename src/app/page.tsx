import { Suspense } from "react";
import { Metadata } from "next";
import CommentsContainer from "@/components/comments/comments-container";
import TodayPhoto from "@/components/today-photo";
import TodayPhotoSkeleton from "@/components/skeleton/today-photo-skeleton";
import { getToday } from "@/utils/getToday";

export const metadata: Metadata = {
  title: "오늘의 드립",
  description: "여려분의 맛있는 드립을 기다립니다.",
  openGraph: {
    title: "오늘의 드립",
    description: "여려분의 맛있는 드립을 기다립니다.",
    images: ["/title/mobile.png"],
  },
};

export default async function Home() {
  const today = getToday();

  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-lg border border-gray-300 bg-white">
        <div className="p-4">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-semibold">오늘의 짤</span>
            <span className="text-sm text-gray-500">{today}</span>
          </div>
          <Suspense fallback={<TodayPhotoSkeleton />}>
            <TodayPhoto />
          </Suspense>
        </div>
      </div>
      <CommentsContainer today={today} />
    </div>
  );
}

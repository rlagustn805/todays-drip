"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { GoHeartFill } from "react-icons/go";
import { FaRegCommentDots } from "react-icons/fa";

function SectionHeader({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-2 mb-5">
      {icon}
      <span className="text-lg font-semibold text-gray-600">{title}</span>
    </div>
  );
}

function CommentSkeletonList({ count = 3 }: { count?: number }) {
  return (
    <div className="flex flex-col gap-6">
      {Array.from({ length: count }).map((_, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={i} className="flex flex-col gap-2 pb-3">
          <div className="flex justify-between items-center">
            <Skeleton width={90} height={14} />
            <Skeleton width={50} height={12} />
          </div>
          <Skeleton height={14} />
          <Skeleton width="60%" height={12} />
        </div>
      ))}
    </div>
  );
}

export default function TodayCommentSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* 인기드립 */}
      <div className="md:col-span-1 rounded-xl border border-gray-300 p-4 bg-white shadow-sm">
        <SectionHeader
          icon={<GoHeartFill color="red" />}
          title="인기드립 TOP 3"
        />
        <CommentSkeletonList count={3} />
      </div>

      {/* 실시간 드립 */}
      <div className="md:col-span-2 rounded-xl border border-gray-300 p-4 bg-white shadow-sm">
        <SectionHeader icon={<FaRegCommentDots />} title="실시간 드립" />
        <CommentSkeletonList count={5} />

        {/* 페이지네이션 */}
        <div className="flex justify-center gap-2 mt-6">
          {[...Array(3)].map((_, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Skeleton key={i} width={32} height={32} borderRadius={8} />
          ))}
        </div>

        {/* 댓글 입력 영역 */}
        <div className="mt-6">
          <Skeleton height={80} borderRadius={10} />
        </div>
      </div>
    </div>
  );
}

"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { FaRegCommentDots } from "react-icons/fa";
import { getComments } from "@/app/service/api";
import CommentList from "./comment-list";
import Pagination from "./pagination";
import CommentPost from "./comment-post";
import TodayCommentSkeleton from "../skeleton/today-comment-skeleton";

export default function TodayCommentClient({ photoId }: { photoId: string }) {
  const [page, setPage] = useState(1);

  const {
    data: res,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["comments", photoId, page],
    queryFn: () => getComments(photoId, page),
    staleTime: 1000 * 10,
  });

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  if (isLoading) return <TodayCommentSkeleton />;
  if (isError || !res?.success) return <div>{res?.message}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-1 rounded-lg border border-gray-300 p-4 bg-white">
        <div className="flex items-center text-lg gap-2 mb-2">
          <GoHeartFill color="red" />
          인기드립 TOP 3
        </div>
        <CommentList commentList={res.topComments ?? []} />
      </div>

      <div
        id="comment-section"
        className="md:col-span-2 rounded-lg border border-gray-300 p-4 bg-white">
        <div className="flex items-center text-lg gap-2 mb-2">
          <FaRegCommentDots />
          실시간 드립 {res.totalCount}
        </div>
        <CommentList commentList={res.recentComments ?? []} handle />
        <Pagination
          currentPage={page}
          totalPages={res.totalPages ?? 1}
          handlePageChange={handlePageChange}
        />
        <CommentPost handlePageChange={handlePageChange} />
      </div>
    </div>
  );
}

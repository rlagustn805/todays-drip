"use client";

import { useEffect, useState } from "react";
import { getComments } from "@/app/service/api";
import { Tables } from "@/types/supabase";
import Pagination from "./pagination";

export type CommentType = Pick<
  Tables<"comments">,
  "id" | "nickname" | "content" | "likes" | "created_at"
>;

export default function CommentGet({ photoId }: { photoId: string }) {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [totalCount, setTotalCount] = useState<number | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const pageSize = 8;

  useEffect(() => {
    async function fetchComments() {
      const res = await getComments(photoId, page);

      if (res.success) {
        setComments(res.data || []);
        setTotalCount(res.totalCount);
        setTotalPages(Math.ceil((res.totalCount || 0) / pageSize));
      } else {
        console.error(res.message);
      }
    }

    fetchComments();
  }, [photoId, page]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div>
      <p className="font-bold text-lg">댓글 {totalCount}개</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-white">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="bg-purple-400 rounded-lg p-2 flex flex-col gap-2">
            <div className="text-sm flex justify-between items-center">
              <span>{comment.nickname}</span>
              <span className="px-1 py-0.5 bg-amber-50 rounded-lg cursor-pointer text-black">
                👍{comment.likes}
              </span>
            </div>
            <div className="min-h-24 bg-amber-50 rounded-lg p-2 overflow-auto text-black">
              {comment.content}
            </div>
            <div className="text-sm flex justify-between">
              <div>
                {comment.created_at
                  ?.split("T")[1]
                  .split(":")
                  .slice(0, 2)
                  .join(":")}
              </div>
              <div className="flex gap-2">
                <span>수정</span>
                <span>삭제</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { getComments } from "@/app/service/api";
import Pagination from "./pagination";
import { CommentType } from "@/types/types";
import CommentCard from "./comment-card";
import CommentRank from "./comment-rank";
import CommentPost from "./comment-post";
import Warning from "../common/warning";

export default function CommentGet({ photoId }: { photoId: string }) {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [totalCount, setTotalCount] = useState<number | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [topComments, setTopComments] = useState<CommentType[]>([]);

  const pageSize = 8;

  useEffect(() => {
    async function fetchComments() {
      const res = await getComments(photoId, page);
      const top3 = await getComments(photoId, 1, "top3");

      if (res.success) {
        setComments(res.data || []);
        setTotalCount(res.totalCount);
        setTotalPages(Math.ceil((res.totalCount || 1) / pageSize));
      } else {
        console.error(res.message);
      }

      if (top3.success) {
        setTopComments(top3.data || []);
      }
    }

    fetchComments();
  }, [photoId, page]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleDelete = (id: number) => {
    setComments((prev) => prev.filter((c) => c.id !== id));
  };

  const handleUpdate = (id: number, newContent: string) => {
    setComments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, content: newContent } : c))
    );
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CommentRank
          topComments={topComments}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />

        <div className="md:col-span-2 rounded-lg border border-gray-300 p-4">
          <div className="flex items-center gap-2 mb-2">
            <FaRegCommentDots className="text-lg" />
            <span className="font-bold text-lg">실시간 댓글 {totalCount}</span>
          </div>
          {totalCount! > 0 || totalCount === null ? (
            <div className="space-y-4">
              {comments.map((comment) => (
                <CommentCard
                  key={comment.id}
                  comment={comment}
                  onDelete={handleDelete}
                  onUpdate={handleUpdate}
                />
              ))}
            </div>
          ) : (
            <Warning
              notice={`현재 드립이 없어요 ! \n여러분의 드립력을 뽐내주세요 :)`}
            />
          )}

          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
          <CommentPost />
        </div>
      </div>
    </div>
  );
}

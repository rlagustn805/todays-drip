"use client";

import { useEffect, useState } from "react";
import { getComments } from "@/app/service/api";
import Pagination from "./pagination";
import { CommentType } from "@/types/types";
import CommentCard from "./comment-card";
import CommentRank from "./comment-rank";
import CommentPost from "./comment-post";

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
          <p className="font-bold text-lg mb-2">💬 실시간 댓글 {totalCount}</p>
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

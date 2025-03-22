"use client";

import { useEffect, useState } from "react";
import { getComments } from "@/app/service/api";
import Pagination from "./pagination";
import { CommentType } from "@/types/types";
import CommentCard from "./comment-card";

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
        setTotalPages(Math.ceil((res.totalCount || 0) / pageSize));
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
      <p className="font-bold text-lg">댓글 {totalCount}개</p>
      {topComments.length > 0 && (
        <div className="mb-6">
          <p className="font-bold text-lg mb-2 text-amber-300">
            🔥 좋아요 TOP 3
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-white">
            {topComments.map((comment) => (
              <CommentCard
                key={`top-${comment.id}`}
                comment={comment}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
              />
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-white">
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
    </div>
  );
}

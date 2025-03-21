"use client";

import { PaginationType } from "@/types/types";
import Button from "../common/button";

export default function Pagination({
  page,
  totalPages,
  onPageChange,
}: PaginationType) {
  return (
    <div className="flex justify-center gap-4 mt-4">
      <Button
        color="gray"
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}>
        ◀ 이전
      </Button>

      <span className="px-4 py-2 font-bold">
        페이지 {page} / {totalPages + 1}
      </span>

      <Button
        color="gray"
        onClick={() => onPageChange(page + 1)}
        disabled={page >= totalPages}>
        다음 ▶
      </Button>
    </div>
  );
}

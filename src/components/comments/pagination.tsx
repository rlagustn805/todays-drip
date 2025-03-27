"use client";

import { PaginationType } from "@/types/types";
import Button from "../common/button";

export default function Pagination({
  page,
  totalPages,
  onPageChange,
}: PaginationType) {
  const pagePerGroup = 3;
  const currentGroup = Math.floor((page - 1) / pagePerGroup);
  const startPage = currentGroup * pagePerGroup + 1;
  const endPage = Math.min(startPage + pagePerGroup - 1, totalPages);

  const handlePrevGroup = () => {
    const prevGroupPage = Math.max(1, startPage - pagePerGroup);
    onPageChange(prevGroupPage);
  };

  const handleNextGroup = () => {
    const nextGroupPage = Math.min(totalPages, startPage + pagePerGroup);
    onPageChange(nextGroupPage);
  };

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i += 1) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center gap-4 my-8">
      <Button color="gray" onClick={handlePrevGroup} disabled={page === 1}>
        ◀ 이전
      </Button>

      {pageNumbers.map((pageNumber) => (
        <Button
          color="none"
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={`px-3 py-1 rounded-md font-medium ${
            pageNumber === page
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-700"
          }`}>
          {pageNumber}
        </Button>
      ))}
      <Button
        color="gray"
        onClick={handleNextGroup}
        disabled={page >= totalPages}>
        다음 ▶
      </Button>
    </div>
  );
}

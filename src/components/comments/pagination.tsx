"use client";

import Button from "../common/button";

export default function PaginationClient({
  currentPage,
  totalPages,
  handlePageChange,
}: {
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
}) {
  const pagePerGroup = 3;
  const currentGroup = Math.floor((currentPage - 1) / pagePerGroup);
  const startPage = currentGroup * pagePerGroup + 1;
  const endPage = Math.min(startPage + pagePerGroup - 1, totalPages);

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i += 1) {
    pageNumbers.push(i);
  }
  return (
    <div className="flex justify-center gap-4 my-8">
      <Button
        color="black"
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}>
        처음
      </Button>

      {pageNumbers.map((pageNum) => (
        <Button
          color="none"
          key={pageNum}
          onClick={() => handlePageChange(pageNum)}
          className={`px-3 py-1 rounded-md ${
            pageNum === currentPage
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-700"
          }`}>
          {pageNum}
        </Button>
      ))}

      <Button
        color="black"
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === endPage}>
        마지막
      </Button>
    </div>
  );
}

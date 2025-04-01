"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Button from "../common/button";

export default function PaginationClient({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pagePerGroup = 3;
  const safeTotalPages = Math.max(1, totalPages);
  const safeCurrentPage = Math.max(1, currentPage);
  const currentGroup = Math.floor((safeCurrentPage - 1) / pagePerGroup);
  const startPage = currentGroup * pagePerGroup + 1;
  const endPage = Math.min(startPage + pagePerGroup - 1, safeTotalPages);

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i += 1) {
    pageNumbers.push(i);
  }

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push(`/?${params.toString()}`, { scroll: false });

    setTimeout(() => {
      const target = document.getElementById("comment-section");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 0);
  };

  return (
    <div className="flex justify-center gap-4 my-8">
      <Button
        color="black"
        onClick={() => goToPage(Math.max(1, startPage - pagePerGroup))}
        disabled={safeCurrentPage === startPage}>
        ◀ 이전
      </Button>

      {pageNumbers.map((pageNum) => (
        <Button
          color="none"
          key={pageNum}
          onClick={() => goToPage(pageNum)}
          className={`px-3 py-1 rounded-md ${
            pageNum === safeCurrentPage
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-700"
          }`}>
          {pageNum}
        </Button>
      ))}

      <Button
        color="black"
        onClick={() => goToPage(Math.min(totalPages, startPage + pagePerGroup))}
        disabled={safeCurrentPage === endPage}>
        다음 ▶
      </Button>
    </div>
  );
}

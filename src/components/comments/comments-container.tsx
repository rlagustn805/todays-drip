import { ToastContainer } from "react-toastify";
import { Suspense } from "react";
import TodayComment from "./today-comment";
import TodayCommentClient from "./today-comment-client";
import TodayCommentSkeleton from "../skeleton/today-comment-skeleton";

export default function CommentsContainer({
  today,
  page,
}: {
  today: string;
  page: number;
}) {
  return (
    <div className="">
      <ToastContainer
        position="top-center"
        limit={3}
        closeButton
        autoClose={1500}
        toastClassName="font-bold text-sm border shadow-lg"
      />

      {page === 1 ? (
        <Suspense fallback={<TodayCommentSkeleton />}>
          <TodayComment photoId={today} />
        </Suspense>
      ) : (
        <TodayCommentClient photoId={today} page={page} />
      )}
    </div>
  );
}

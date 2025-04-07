import { ToastContainer } from "react-toastify";
// import { Suspense } from "react";
// import TodayComment from "./today-comment";
import TodayCommentClient from "./today-comment-client";
// import TodayCommentSkeleton from "../skeleton/today-comment-skeleton";

export default function CommentsContainer({ today }: { today: string }) {
  return (
    <div>
      <ToastContainer
        position="top-center"
        limit={3}
        closeButton
        autoClose={1500}
        toastClassName="font-bold text-sm border shadow-lg"
      />

      <TodayCommentClient photoId={today} />
    </div>
  );
}

import { ToastContainer } from "react-toastify";
import CommentPost from "./comment-post";
import CommentGet from "./comment-get";
import { getToday } from "@/utils/getToday";

export default function CommentsContainer() {
  const today = getToday();
  return (
    <div className="w-full min-h-96 border border-purple-200 flex flex-col gap-5">
      <ToastContainer
        position="top-center"
        limit={3}
        closeButton
        autoClose={1500}
        toastClassName="font-bold text-sm border shadow-lg"
      />
      <CommentGet photoId={today} />
      <CommentPost />
    </div>
  );
}

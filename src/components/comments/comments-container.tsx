import { ToastContainer } from "react-toastify";
import CommentPost from "./comment-post";

export default function CommentsContainer() {
  return (
    <div className="w-full min-h-96 border border-purple-200">
      <ToastContainer
        position="top-center"
        limit={3}
        closeButton
        autoClose={1500}
        hideProgressBar
        toastClassName="font-bold text-sm border shadow-lg"
      />
      <CommentPost />
    </div>
  );
}

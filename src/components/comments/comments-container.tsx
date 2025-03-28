import { ToastContainer } from "react-toastify";
import CommentGet from "./comment-get";
import { getToday } from "@/utils/getToday";

export default function CommentsContainer() {
  const today = getToday();
  return (
    <div className="">
      <ToastContainer
        position="top-center"
        limit={3}
        closeButton
        autoClose={1500}
        toastClassName="font-bold text-sm border shadow-lg"
      />
      <CommentGet photoId={today} />
    </div>
  );
}

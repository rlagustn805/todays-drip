import Warning from "../common/warning";
import CommentItem from "./comment-item";
import { CommentsType } from "@/types/types";

export default function CommentList({
  commentList,
  handle = false,
}: {
  commentList: CommentsType[];
  handle?: boolean;
}) {
  const comments = commentList;

  return comments.length === 0 ? (
    <Warning
      notice={`현재 드립이 없어요 ! \n여러분의 드립력을 뽐내주세요 :)`}
    />
  ) : (
    <div className="flex flex-col gap-5">
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} handle={handle} />
      ))}
    </div>
  );
}

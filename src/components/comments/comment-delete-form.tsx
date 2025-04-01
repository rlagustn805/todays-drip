import { useState } from "react";
import { toast } from "react-toastify";
import Button from "../common/button";
import { deleteComment } from "@/app/service/api";
import { CommentsHandleType } from "@/types/types";

export default function CommentDeleteForm({
  id,
  handleMode,
}: CommentsHandleType) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [commentId, setCommentId] = useState(id);

  const onClickDelete = async () => {
    const res = await deleteComment(commentId);

    if (!res.success) {
      toast.error(res.message);
    }

    toast.success(res.message);

    handleMode("read");
  };

  return (
    <div className="flex flex-col gap-4 p-4 border border-red-200 rounded-xl bg-red-50 shadow-sm">
      <p className="text-center text-sm md:text-base text-red-700 font-medium">
        정말로{" "}
        <span className="font-bold underline underline-offset-2">삭제</span>
        하시겠어요?
      </p>

      <div className="flex justify-end gap-3">
        <Button color="red" onClick={onClickDelete}>
          삭제
        </Button>
        <Button color="black" onClick={() => handleMode("read")}>
          취소
        </Button>
      </div>
    </div>
  );
}

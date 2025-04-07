import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Button from "../common/button";
import { deleteComment } from "@/app/service/api";
import { CommentsHandleType } from "@/types/types";
import { getToday } from "@/utils/getToday";

export default function CommentDeleteForm({
  id,
  handleMode,
}: CommentsHandleType) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [commentId, setCommentId] = useState(id);
  const photoId = getToday();

  const queryClient = useQueryClient();

  const onClickDelete = useMutation({
    mutationFn: () => deleteComment(commentId),
    onSuccess: () => {
      toast.success("삭제 완료");
      handleMode("read");

      queryClient.invalidateQueries({ queryKey: ["comments", photoId] });
    },
    onError: (err: any) => {
      toast.error(err.message);
    },
  });

  return (
    <div className="flex flex-col gap-4 p-4 border border-red-200 rounded-xl bg-red-50 shadow-sm">
      <p className="text-center text-sm md:text-base text-red-700 font-medium">
        정말로{" "}
        <span className="font-bold underline underline-offset-2">삭제</span>
        하시겠어요?
      </p>

      <div className="flex justify-end gap-3">
        <Button color="red" onClick={() => onClickDelete.mutate()}>
          삭제
        </Button>
        <Button color="black" onClick={() => handleMode("read")}>
          취소
        </Button>
      </div>
    </div>
  );
}

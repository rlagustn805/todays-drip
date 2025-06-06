import { useRef, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Button from "../common/button";
import { updateComment } from "@/app/service/api";
import { CommentsHandleType } from "@/types/types";
import { getToday } from "@/utils/getToday";

export default function CommentEditForm({
  id,
  handleMode,
}: CommentsHandleType) {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [commentId, setCommentId] = useState(id);
  const photoId = getToday();

  const queryClient = useQueryClient();

  const onClickEdit = useMutation({
    mutationFn: () => {
      const input = inputRef.current?.value.trim() || "";
      return updateComment(commentId, input);
    },
    onSuccess: () => {
      toast.success("수정 완료");
      handleMode("read");

      queryClient.invalidateQueries({ queryKey: ["comments", photoId] });
    },
    onError: (err: any) => {
      toast.error(err.message || "댓글 등록에 실패했습니다.");
    },
  });

  return (
    <div className="flex flex-col gap-3">
      <textarea
        ref={inputRef}
        className="resize-none w-full min-h-32 border boder-black p-2 rounded-lg"
        placeholder="드립을 입력해주세요... (40자 이내)"
        maxLength={40}
        required
      />
      <div className="flex justify-end gap-2">
        <Button color="red" onClick={() => onClickEdit.mutate()}>
          수정
        </Button>
        <Button color="black" onClick={() => handleMode("read")}>
          취소
        </Button>
      </div>
    </div>
  );
}

import { useState } from "react";
import { toast } from "react-toastify";
import Button from "../common/button";
import { updateComment } from "@/app/service/api";
import { CommentsHandleType } from "@/types/types";

export default function CommentEditForm({
  id,
  handleMode,
}: CommentsHandleType) {
  const [input, setInput] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [commentId, setCommentId] = useState(id);

  const onClickEdit = async () => {
    const res = await updateComment(commentId, input);

    if (res.success) {
      toast.success("수정 완료");
      handleMode("read");
    } else {
      toast.error(res.message);
    }
  };
  return (
    <div className="flex flex-col gap-3">
      <textarea
        className="resize-none w-full min-h-32 border boder-black p-2 rounded-lg"
        required
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="flex justify-end gap-2">
        <Button color="red" onClick={onClickEdit}>
          수정
        </Button>
        <Button color="black" onClick={() => handleMode("read")}>
          취소
        </Button>
      </div>
    </div>
  );
}

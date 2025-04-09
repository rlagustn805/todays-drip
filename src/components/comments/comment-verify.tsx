import { useRef, useState } from "react";
import { toast } from "react-toastify";
import Input from "../common/input";
import { verifyPassword } from "@/app/service/api";
import Button from "../common/button";
import { CommentsHandleType } from "@/types/types";

export default function CommentVerify({
  id,
  mode,
  handleMode,
}: CommentsHandleType) {
  const passwordRef = useRef<HTMLInputElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [commentId, setCommentId] = useState(id);

  const onClickVerify = async () => {
    const input = passwordRef.current?.value.trim() || "";
    const res = await verifyPassword(commentId, input);

    if (!input) {
      toast.error("비밀번호를 입력해주세요.");
      return;
    }

    if (!res.success) {
      toast.error(res.message);
      return;
    }

    if (mode === "edit-auth") {
      handleMode("edit");
    } else {
      handleMode("delete");
    }
  };

  return (
    <div className="flex flex-col gap-3 md:flex-row">
      <Input
        type="password"
        className="flex-1"
        placeholder="비밀번호 입력"
        ref={passwordRef}
      />

      <Button color="black" onClick={onClickVerify}>
        확인
      </Button>
      <Button color="red" onClick={() => handleMode("read")}>
        취소
      </Button>
    </div>
  );
}

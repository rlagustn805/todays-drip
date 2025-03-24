"use client";

import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { CommentCardType } from "@/types/types";
import {
  deleteComment,
  updateComment,
  verifyPassword,
  toggleLike,
} from "@/app/service/api";
import Input from "../common/input";

export default function CommentCard({
  comment,
  onDelete,
  onUpdate,
  bg = "",
}: CommentCardType) {
  const [mode, setMode] = useState<"read" | "edit" | "auth" | "delete">("read");
  const [verifyAction, setVerifyAction] = useState<"edit" | "delete">("edit");

  const [inputPassword, setInputPassword] = useState("");
  const [editContent, setEditContent] = useState(comment.content);
  const [likes, setLikes] = useState(comment.likes);
  const [liked, setLiked] = useState(comment.liked);
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (mode === "edit" && textAreaRef.current) {
      const textarea = textAreaRef.current;
      textarea.focus();
      textarea.setSelectionRange(textarea.value.length, textarea.value.length);
      textarea.scrollTop = textarea.scrollHeight;
    }
  }, [mode]);

  const handleVerify = async (action: "edit" | "delete") => {
    const res = await verifyPassword(comment.id, inputPassword);

    if (!res.success) {
      toast.error(res.message);
      return;
    }

    if (action === "edit") {
      setMode("edit");
    } else if (action === "delete") {
      setMode("delete");
      const del = await deleteComment(comment.id, inputPassword);

      if (del.success) {
        toast.success(del.message);
        onDelete(comment.id);
      } else {
        toast.error(del.message);
      }
    }
  };

  const handleUpdate = async () => {
    const res = await updateComment(comment.id, editContent, inputPassword);
    if (res.success) {
      toast.success("수정 완료");
      onUpdate(comment.id, editContent);
      setMode("read");
    } else {
      toast.error(res.message);
    }
  };

  const handleLike = async () => {
    const res = await toggleLike(comment.id);
    if (res.success) {
      setLikes((prev) => (res.liked ? prev + 1 : Math.max(prev - 1, 0)));
      setLiked(res.liked);
    }
  };

  let actionArea = null;

  if (mode === "auth") {
    actionArea = (
      <div className="bg-gray-200/30 p-2 rounded-lg flex flex-col gap-2">
        <span>비밀번호 확인</span>
        <div className="flex gap-3 items-center">
          <Input
            type="password"
            placeholder="비밀번호 입력"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            className="flex-1"
          />
          <div>
            <span
              className="px-4 py-2 mr-2 bg-black rounded-lg text-white cursor-pointer"
              role="none"
              onClick={() => handleVerify(verifyAction)}>
              확인
            </span>
            <span
              className="px-4 py-2 bg-white rounded-lg cursor-pointer"
              role="none"
              onClick={() => setMode("read")}>
              취소
            </span>
          </div>
        </div>
      </div>
    );
  } else if (mode === "edit") {
    actionArea = (
      <div className="flex gap-2 justify-end">
        <span
          className="px-4 py-2 mr-2 bg-black rounded-lg text-white cursor-pointer"
          role="none"
          onClick={() => handleUpdate()}>
          저장
        </span>
        <span
          className="px-4 py-2 bg-white rounded-lg cursor-pointer"
          role="none"
          onClick={() => setMode("read")}>
          취소
        </span>
      </div>
    );
  } else if (mode === "delete") {
    actionArea = (
      <div className="flex gap-3">
        <span
          className="px-4 py-2 mr-2 bg-black rounded-lg text-white cursor-pointer"
          role="none"
          onClick={async () => {
            const del = await deleteComment(comment.id, inputPassword);
            if (del.success) {
              toast.success(del.message);
              onDelete(comment.id);
            } else {
              toast.error(del.message);
            }
          }}>
          삭제
        </span>
        <span
          className="px-4 py-2 bg-white rounded-lg cursor-pointer"
          role="none"
          onClick={() => setMode("read")}>
          취소
        </span>
      </div>
    );
  }

  return (
    <div key={comment.id} className={`${bg} p-2 rounded-lg`}>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span>{comment.nickname}</span>
            <span className="text-xs">
              {comment.created_at
                ?.split("T")[1]
                .split(":")
                .slice(0, 2)
                .join(":")}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="text-gray-500 text-xs cursor-pointer hover:text-black"
              role="none"
              onClick={() => {
                setVerifyAction("edit");
                setMode("auth");
              }}>
              수정
            </span>
            <span
              className="text-gray-500 text-xs cursor-pointer hover:text-black"
              role="none"
              onClick={() => {
                setVerifyAction("delete");
                setMode("auth");
              }}>
              삭제
            </span>
          </div>
        </div>
        {mode === "edit" ? (
          <textarea
            ref={textAreaRef}
            className="resize-none focu"
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            required
          />
        ) : (
          <div className="">{comment.content}</div>
        )}
        <div className="text-sm flex items-center gap-2">
          <span onClick={() => handleLike()} className="cursor-pointer">
            {liked ? (
              <div className="flex gap-2 items-center">
                <GoHeartFill color="red" />
                <span>좋아요 취소</span>
              </div>
            ) : (
              <div className="flex gap-2 items-center">
                <GoHeart />
                <span>좋아요</span>
              </div>
            )}
          </span>
          <span>{likes}</span>
        </div>
        <div className="text-sm">{actionArea}</div>
      </div>
    </div>
  );
}

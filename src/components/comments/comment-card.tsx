"use client";

import { useState } from "react";
import { toast } from "react-toastify";
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
}: CommentCardType) {
  const [mode, setMode] = useState<"read" | "edit" | "auth">("read");
  const [inputPassword, setInputPassword] = useState("");
  const [editContent, setEditContent] = useState(comment.content);
  const [likes, setLikes] = useState(comment.likes);

  const handleVerify = async (action: "edit" | "delete") => {
    const res = await verifyPassword(comment.id, inputPassword);

    if (!res.success) {
      toast.error(res.message);
      return;
    }

    if (action === "edit") {
      setMode("edit");
    } else if (action === "delete") {
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
      toast.success(res.message);
      setLikes((prev) => (res.liked ? prev + 1 : Math.max(prev - 1, 0)));
    } else {
      toast.error(res.message);
    }
  };

  let actionArea = null;

  if (mode === "auth") {
    actionArea = (
      <div className="flex gap-2">
        <Input
          type="password"
          placeholder="비밀번호 입력"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
        />
        <span
          className="cursor-pointer hover:underline"
          role="none"
          onClick={() => handleVerify("edit")}>
          수정
        </span>
        <span
          className="cursor-pointer hover:underline"
          role="none"
          onClick={() => handleVerify("delete")}>
          삭제
        </span>
      </div>
    );
  } else if (mode === "edit") {
    actionArea = (
      <div className="flex gap-2">
        <span
          className="cursor-pointer hover:underline"
          role="none"
          onClick={() => handleUpdate()}>
          저장
        </span>
        <span
          className="cursor-pointer hover:underline"
          role="none"
          onClick={() => setMode("read")}>
          취소
        </span>
      </div>
    );
  } else {
    actionArea = (
      <div className="flex gap-3">
        <span
          className="cursor-pointer hover:underline"
          role="none"
          onClick={() => setMode("auth")}>
          수정
        </span>
        <span
          className="cursor-pointer hover:underline"
          role="none"
          onClick={() => setMode("auth")}>
          삭제
        </span>
      </div>
    );
  }

  return (
    <div
      key={comment.id}
      className="bg-purple-400 rounded-lg p-2 flex flex-col gap-1.5">
      <div className="text-sm flex justify-between items-center">
        <span>{comment.nickname}</span>
        <span
          role="none"
          className="px-1 py-0.5 bg-amber-50 rounded-lg cursor-pointer text-black"
          onClick={() => handleLike()}>
          👍{comment.likes}
        </span>
      </div>

      {mode === "edit" ? (
        <textarea
          className="min-h-24 bg-amber-50 p-2 rounded text-black"
          value={editContent}
          onChange={(e) => setEditContent(e.target.value)}
        />
      ) : (
        <div className="min-h-24 bg-amber-50 p-2 rounded text-black">
          {comment.content}
        </div>
      )}

      <div className="text-sm flex justify-between">
        <span>
          {comment.created_at?.split("T")[1].split(":").slice(0, 2).join(":")}
        </span>
        {actionArea}
      </div>
    </div>
  );
}

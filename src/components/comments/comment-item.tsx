"use client";

import { useState } from "react";
import CommentLikeToggle from "./comment-like-toggle";
import dayjs from "@/utils/dayjs";
import CommentVerify from "./comment-verify";
import CommentEditForm from "./comment-edit-form";
import CommentDeleteForm from "./comment-delete-form";
import { CommentsType } from "@/types/types";

export default function CommentItem({
  comment,
  handle,
}: {
  comment: CommentsType;
  handle: boolean;
}) {
  const [mode, setMode] = useState("read");

  const handleMode = (mode: string) => {
    setMode(mode);
  };

  return (
    <div
      key={comment.id}
      className="flex flex-col gap-2 py-2 border-b border-b-gray-200">
      <div className="flex items-center gap-1.5 justify-between ">
        <div className="flex items-center gap-2">
          <span>{comment.nickname}</span>
          <span className="text-xs text-gray-500">
            {dayjs(comment.created_at).fromNow()}
          </span>
        </div>
        {handle && (
          <div className="flex gap-2 text-xs text-gray-500">
            <span
              role="button"
              tabIndex={0}
              className="cursor-pointer"
              onClick={() => setMode("edit-auth")}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setMode("edit-auth");
                }
              }}>
              수정
            </span>
            <span
              role="button"
              tabIndex={0}
              className="cursor-pointer"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setMode("edit-auth");
                }
              }}
              onClick={() => setMode("delete-auth")}>
              삭제
            </span>
          </div>
        )}
      </div>

      <div className="text-sm">{comment.content}</div>

      <CommentLikeToggle
        id={comment.id}
        likes={comment.likes}
        liked={comment.liked}
      />

      {(mode === "edit-auth" || mode === "delete-auth") && (
        <CommentVerify id={comment.id} mode={mode} handleMode={handleMode} />
      )}

      {mode === "edit" && (
        <CommentEditForm id={comment.id} handleMode={handleMode} />
      )}

      {mode === "delete" && (
        <CommentDeleteForm id={comment.id} handleMode={handleMode} />
      )}
    </div>
  );
}

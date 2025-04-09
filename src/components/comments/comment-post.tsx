"use client";

import { useRef } from "react";
import { toast } from "react-toastify";
import { FaRegCommentDots } from "react-icons/fa";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Input from "../common/input";
import Button from "../common/button";
import { getToday } from "@/utils/getToday";
import { addComment } from "@/app/service/api";

export default function CommentPost({
  handlePageChange,
}: {
  handlePageChange: (page: number) => void;
}) {
  const nicknameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const photoId: string = getToday();

  const queryClient = useQueryClient();

  const addHandleComment = useMutation({
    mutationFn: () => {
      const nickname = nicknameRef.current?.value.trim() || "";
      const password = passwordRef.current?.value.trim() || "";
      const content = contentRef.current?.value.trim() || "";

      return addComment(photoId, nickname, password, content);
    },
    onSuccess: () => {
      toast.success("등록 되었습니다!");
      if (nicknameRef.current) nicknameRef.current.value = "";
      if (passwordRef.current) passwordRef.current.value = "";
      if (contentRef.current) contentRef.current.value = "";
      queryClient.invalidateQueries({ queryKey: ["comments", photoId] });
      handlePageChange(1);
    },
    onError: (err: any) => {
      toast.error(err.message || "댓글 등록에 실패했습니다.");
    },
  });

  const handleOnClick = () => {
    const nickname = nicknameRef.current?.value.trim();
    const password = passwordRef.current?.value.trim();
    const content = contentRef.current?.value.trim();

    if (!nickname || !password || !content) {
      toast.error("모든 항목을 입력해주세요.");
      return;
    }

    addHandleComment.mutate();
  };

  return (
    <div>
      <div className="flex flex-col w-full gap-3">
        <div className="flex flex-col w-full gap-3 md:flex-row md:gap-6">
          <Input
            className="flex-1"
            placeholder="닉네임 (12자 이내)"
            maxLength={12}
            ref={nicknameRef}
            required
          />
          <Input
            className="flex-1"
            type="password"
            placeholder="비밀번호 입력 (15자 이내)"
            maxLength={15}
            ref={passwordRef}
            required
          />
        </div>

        <textarea
          className="resize-none w-full min-h-36 border boder-black p-2 rounded-lg"
          placeholder="드립을 입력해주세요...   (40자 이내)"
          maxLength={40}
          ref={contentRef}
          required
        />
      </div>
      <Button
        color="black"
        className="float-right mt-3 text-sm"
        onClick={handleOnClick}
        disabled={addHandleComment.isPending}>
        {addHandleComment.isPending ? (
          "등록 중..."
        ) : (
          <div className="flex items-center gap-2">
            <FaRegCommentDots /> 드립 등록
          </div>
        )}
      </Button>
    </div>
  );
}

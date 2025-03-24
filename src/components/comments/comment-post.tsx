"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import Input from "../common/input";
import Button from "../common/button";
import { getToday } from "@/utils/getToday";
import { addComment } from "@/app/service/api";

export default function CommentPost() {
  const [nickname, setNickname] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const photoId: string = getToday();

  async function addHandleComment() {
    setLoading(true); // 로딩 시작

    const res = await addComment(photoId, nickname, password, content);

    if (res.success) {
      toast.success("등록 되었습니다!");
      setNickname(""); // 입력 필드 초기화
      setPassword("");
      setContent("");
    } else {
      toast.error(res.message);
    }

    setLoading(false); // 로딩 종료
  }

  return (
    <div>
      <div className="flex flex-col w-full gap-3">
        <div className="flex flex-col w-full gap-3 md:flex-row md:gap-6">
          <Input
            className="flex-1"
            placeholder="닉네임 (12자 이내)"
            maxLength={12}
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            required
          />
          <Input
            className="flex-1"
            type="password"
            placeholder="비밀번호 입력 (15자 이내)"
            maxLength={15}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <textarea
          className="resize-none w-full min-h-36 border boder-black p-2 rounded-lg"
          placeholder="드립을 입력해주세요...   (40자 이내)"
          maxLength={40}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <Button
        color="black"
        className="float-right mt-3 text-sm"
        onClick={() => addHandleComment()}
        disabled={loading}>
        {loading ? "등록 중..." : "댓글 등록"}
      </Button>
    </div>
  );
}

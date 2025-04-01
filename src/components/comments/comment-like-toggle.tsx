"use client";

import { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { toggleLike } from "@/app/service/api";

export default function CommentLikeToggle({
  id,
  likes,
  liked,
}: {
  id: number;
  likes: number;
  liked: boolean;
}) {
  const [likeCount, setLikeCount] = useState(likes);
  const [isLiked, setIsLiked] = useState(liked);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleLike = async (id: number) => {
    if (isProcessing) return;
    setIsProcessing(true);

    const optimisticLiked = !isLiked;
    setIsLiked(optimisticLiked);
    setLikeCount((prev) =>
      optimisticLiked ? prev + 1 : Math.max(prev - 1, 0)
    );

    const res = await toggleLike(id);

    if (!res.success) {
      setIsLiked(isLiked); // 원래 상태로 되돌림
      setLikeCount((prev) =>
        optimisticLiked ? Math.max(prev - 1, 0) : prev + 1
      );
    }

    setIsProcessing(false);
  };

  return (
    <div className="flex items-center gap-2 text-[0.85rem]">
      {isLiked ? <GoHeartFill color="red" /> : <GoHeart color="red" />}
      <div className="flex gap-1 items-baseline">
        <span
          role="button"
          tabIndex={0}
          onClick={() => handleLike(id)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleLike(id);
            }
          }}
          className="cursor-pointer">
          {isLiked ? "좋아요 취소" : "좋아요"}
        </span>
        <span>{likeCount}</span>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function UpdatePhotoButton() {
  const queryClient = useQueryClient();
  const [message, setMessage] = useState("");

  const mutation = useMutation({
    mutationFn: async () => {
      const res = await fetch("/api/update-photo", { method: "POST" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "업데이트 실패");
      return data;
    },
    onSuccess: () => {
      setMessage("✅ 새로운 짤이 성공적으로 업데이트되었습니다!");
      // ✅ 캐시 무효화
      queryClient.invalidateQueries({ queryKey: ["todayPhoto"] });
    },
    onError: (error: any) => {
      setMessage(`❌ 오류: ${error.message}`);
    },
  });

  return (
    <div className="flex flex-col items-center p-4">
      <button
        type="button"
        onClick={() => {
          setMessage("");
          mutation.mutate();
        }}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
        disabled={mutation.isPending}>
        {mutation.isPending ? "업데이트 중..." : "새로운 짤 가져오기"}
      </button>
      {message && <p className="mt-2 text-sm">{message}</p>}
    </div>
  );
}

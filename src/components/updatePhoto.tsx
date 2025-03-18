"use client";

import { useState } from "react";

export default function UpdatePhotoButton() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleUpdatePhoto = async () => {
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/update-photo", { method: "POST" });
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "업데이트 실패");

      setMessage("✅ 새로운 짤이 성공적으로 업데이트되었습니다!");
    } catch (error: any) {
      setMessage(`❌ 오류: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <button
        type="button"
        onClick={handleUpdatePhoto}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
        disabled={loading}>
        {loading ? "업데이트 중..." : "새로운 짤 가져오기"}
      </button>
      {message && <p className="mt-2 text-sm">{message}</p>}
    </div>
  );
}

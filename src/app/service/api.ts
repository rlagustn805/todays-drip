import { TablesInsert } from "@/types/supabase";

export async function getTodayPhoto() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/photo`);

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export async function addComment(
  photoId: string,
  nickname: string,
  password: string,
  content: string
) {
  if (!nickname || !password || !content)
    return { success: false, message: "입력하지 않은 부분을 확인해주세요." };

  const newComment: TablesInsert<"comments"> = {
    photo_id: photoId,
    nickname,
    password_hash: password,
    content,
    likes: 0,
  };

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/comments`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newComment),
      }
    );

    const data: any = await res.json();

    if (!res.ok) {
      return { success: false, message: data.message || "댓글 추가 실패" };
    }

    return { success: true, message: data.message };
  } catch (e) {
    return { success: false, message: "네트워크 에러가 발생하였습니다." };
  }
}

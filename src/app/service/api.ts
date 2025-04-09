import { TablesInsert } from "@/types/supabase";

// 오늘의 짤 가져오기
export async function getTodayPhoto() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/photo`, {
    next: { tags: ["today-and-history"] },
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}

// 댓글 조회 (인기 + 최신)
export async function getComments(photoId: string, page: number = 1) {
  if (!photoId) {
    return { success: false, message: "photoId 필요" };
  }

  const queryParams = new URLSearchParams({ photoId, page: page.toString() });

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/comments?${queryParams.toString()}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
        next: { revalidate: 3, tags: ["ssr-comments-update"] },
      }
    );

    const raw = await res.json();

    if (!res.ok) {
      return { success: false, message: raw.message || "댓글 조회 실패" };
    }

    const { topComments, recentComments, totalCount, totalPages, currentPage } =
      raw;

    return {
      success: true,
      topComments,
      recentComments,
      currentPage,
      totalCount,
      totalPages,
    };
  } catch (e) {
    return { success: false, message: "네트워크 에러가 발생하였습니다." };
  }
}

// 댓글 등록하기
export async function addComment(
  photoId: string,
  nickname: string,
  password: string,
  content: string
) {
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

// 댓글 비밀번호 검증하기

export async function verifyPassword(id: number, password: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/comments/${id}/verify`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    }
  );

  const data = await res.json();

  if (!res.ok) {
    return { success: false, message: data.message || "비밀번호 검증 실패" };
  }

  return { success: true, message: data.message };
}

// 댓글 수정하기
export async function updateComment(id: number, content: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/comments/${id}`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    }
  );

  const data = await res.json();

  if (!res.ok) {
    return { success: false, message: data.message || "댓글 수정 실패" };
  }

  return { success: true, message: data.message };
}

// 댓글 삭제하기
export async function deleteComment(id: number) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/comments/${id}`,
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }
  );

  const data = await res.json();

  if (!res.ok) {
    return { success: false, message: data.message || "댓글 삭제 실패" };
  }

  return { success: true, message: data.message };
}

// 댓글 좋아요 토글 (IP 기준 중복 방지
export async function toggleLike(commentId: number) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/comments/${commentId}/like`,
    {
      method: "POST",
      credentials: "include",
    }
  );

  const data = await res.json();

  if (!res.ok) {
    return { success: false, message: data.message || "좋아요 처리 실패" };
  }

  return { success: true, message: data.message, liked: data.liked };
}

// 지난 드립왕 보기 (TOP 10)
export async function getTopTenDrip() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/history`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
    next: { tags: ["today-and-history"] },
  });

  const data = await res.json();

  if (!res.ok) {
    return { success: false, data };
  }

  return { success: true, data };
}

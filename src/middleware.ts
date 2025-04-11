import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { v4 as uuidv4 } from "uuid";

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // 쿠키 이름
  const cookieName = "like_user_id";

  const hasCookie = req.cookies.get(cookieName);
  if (!hasCookie) {
    const newId = uuidv4();
    res.cookies.set(cookieName, newId, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365, // 1년
      httpOnly: true, // JS 접근 차단
      secure: true, // HTTPS에서만 전송
      sameSite: "lax", // 크로스사이트 요청 보호
    });
  }

  return res;
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"], // 모든 경로에 적용 (필요 시 조정 가능)
};

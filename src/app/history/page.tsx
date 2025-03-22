import Image from "next/image";
import { getTopTenDrip } from "../service/api";

type TopComment = {
  id: number;
  content: string;
  likes: number;
  nickname: string;
};

type TopDripPhoto = {
  id: string;
  url: string;
  created_at?: string | null;
  topComment: TopComment | null;
};

export default async function Page() {
  const topTen: TopDripPhoto[] = (await getTopTenDrip()).data;

  return (
    <div>
      <p>지난 드립왕 TOP - 10</p>
      <div className="grid grid-cols-4 gap-2">
        {topTen.map((top) => (
          <div key={top.id}>
            <Image
              src={top.url}
              width={200}
              height={200}
              alt={top.id}
              priority
            />
            <p className="mt-2 text-sm text-gray-700">📅 날짜: {top.id}</p>

            {top.topComment ? (
              <div className="mt-2">
                <p className="text-sm">👤 닉네임: {top.topComment.nickname}</p>
                <p className="text-sm">💬 댓글: {top.topComment.content}</p>
                <p className="text-sm">👍 좋아요: {top.topComment.likes}</p>
              </div>
            ) : (
              <p className="mt-2 text-sm text-gray-400 italic">
                우승자가 없어요 😢
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

import Image from "next/image";
import { GoHeartFill } from "react-icons/go";
import { getTopTenDrip } from "@/app/service/api";
import Warning from "./common/warning";

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

export default async function TopDripList() {
  const topTen: TopDripPhoto[] = (await getTopTenDrip()).data;

  if (topTen.length === 0)
    return (
      <Warning notice={`지난 드립왕이 아직 안나왔어요 ! \n 도전해 보세요!`} />
    );

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topTen.map((top) => (
          <div
            key={top.id}
            className="rounded-lg border border-gray-300 overflow-hidden">
            <div className="relative w-full h-60 p-2">
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/70 to-transparent p-4 text-white  z-10">
                {top.created_at?.split("T")[0]}
              </div>
              <Image
                className="object-cover rounded-lg"
                src={top.url}
                fill
                alt={top.id}
              />
            </div>
            <div className="p-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span>{top.topComment?.nickname}</span>
                  <div className="flex items-center gap-1">
                    <GoHeartFill color="red" />
                    <span className="text-red-600 text-sm">
                      {top.topComment?.likes}
                    </span>
                  </div>
                </div>
                <span className="text-xs bg-gray-200 p-1 rounded-lg">
                  드립왕
                </span>
              </div>
              <p>{top.topComment?.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import Image from "next/image";
import { getTodayPhoto } from "@/app/service/api";
import Warning from "./common/warning";

export default async function TodayPhoto() {
  const photo = await getTodayPhoto();

  return (
    <div>
      {photo ? (
        <div className="relative w-full max-w-3xl aspect-[16/9] rounded-lg m-auto">
          <Image
            src={photo.url}
            alt="오늘의 짤"
            fill
            className="object-contain rounded-lg"
            priority
            unoptimized
          />
        </div>
      ) : (
        <Warning notice="오늘의 짤을 준비중이에요 !" />
      )}
    </div>
  );
}

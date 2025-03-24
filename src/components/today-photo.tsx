import Image from "next/image";
import { getTodayPhoto } from "@/app/service/api";

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
            className="object-cover rounded-lg"
            priority
          />
        </div>
      ) : (
        <p>오늘의 짤은 준비중이에요!</p>
      )}
    </div>
  );
}

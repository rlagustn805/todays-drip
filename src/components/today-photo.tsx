import Image from "next/image";
import { getTodayPhoto } from "@/app/service/api";

export default async function TodayPhoto() {
  const photo = await getTodayPhoto();

  return (
    <div>
      {photo ? (
        <div className="relative w-full h-96">
          <Image
            src={photo.url}
            alt="오늘의 짤"
            layout="fill"
            objectFit="contain"
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
      ) : (
        <p>오늘의 짤은 준비중이에요!</p>
      )}
    </div>
  );
}

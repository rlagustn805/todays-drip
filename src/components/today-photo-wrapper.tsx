"use client";

import { useEffect, useState } from "react";
import TodayPhoto from "./today-photo";
import TodayPhotoSkeleton from "./skeleton/today-photo-skeleton";

export default function TodayPhotoWrapper() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <TodayPhotoSkeleton />;

  return <TodayPhoto />;
}

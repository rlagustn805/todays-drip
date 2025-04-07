import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function TodayPhotoSkeleton() {
  return (
    <div className="w-full max-w-3xl aspect-[16/9] rounded-lg m-auto">
      <Skeleton
        height="100%"
        className="w-full h-full rounded-lg"
        baseColor="#e0e0e0"
        highlightColor="#f5f5f5"
      />
    </div>
  );
}

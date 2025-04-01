import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function HistorySkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 9 }).map((_, i) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          className="rounded-lg border border-gray-300 overflow-hidden">
          <div className="relative w-full h-60">
            <Skeleton height="100%" />
          </div>
          <div className="p-3 space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Skeleton width={60} height={16} />
                <Skeleton width={30} height={16} />
              </div>
              <Skeleton width={50} height={20} />
            </div>
            <Skeleton count={2} />
          </div>
        </div>
      ))}
    </div>
  );
}

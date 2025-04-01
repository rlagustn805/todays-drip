import HistorySkeleton from "@/components/skeleton/history-skeleton";
import TopDripList from "@/components/top-drip-list";
import { Suspense } from "react";

export default async function Page() {
  return (
    <Suspense fallback={<HistorySkeleton />}>
      <TopDripList />
    </Suspense>
  );
}

import { Suspense } from "react";
import HistorySkeleton from "@/components/skeleton/history-skeleton";
import TopDripList from "@/components/top-drip-list";

export const dynamic = "force-dynamic";

export default async function Page() {
  return (
    <Suspense fallback={<HistorySkeleton />}>
      <TopDripList />
    </Suspense>
  );
}

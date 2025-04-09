import { Suspense } from "react";
import { Metadata } from "next";

import HistorySkeleton from "@/components/skeleton/history-skeleton";
import TopDripList from "@/components/top-drip-list";

export const metadata: Metadata = {
  title: "오늘의 드립 | 지난 드립왕",
  description: "명예의 드립왕들이 계신 곳",
  openGraph: {
    title: "오늘의 드립 | 지난 드립왕",
    description: "명예의 드립왕들이 계신 곳",
    images: ["/title/mobile.png"],
  },
};

export default async function Page() {
  return (
    <Suspense fallback={<HistorySkeleton />}>
      <TopDripList />
    </Suspense>
  );
}

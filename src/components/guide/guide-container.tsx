import { ReactNode } from "react";

export default function GuideContainer({ children }: { children: ReactNode }) {
  return <div className="border border-gray-300 rounded-lg">{children}</div>;
}

import { ReactNode } from "react";

export default function GuideContent({ children }: { children: ReactNode }) {
  return <div className="whitespace-pre-wrap p-4 leading-7">{children}</div>;
}

import { FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";
import Button from "@/components/common/button";

export default function NotFound() {
  return (
    <div className="w-full flex flex-col gap-3 items-center justify-center min-h-[500px] border border-gray-300 rounded-lg bg-gray-300/20">
      <FaExclamationTriangle size={50} />
      <p>존재하지 않는 페이지입니다.</p>
      <Link href="/" className="p-2 bg-bl">
        <Button color="black">홈으로 돌아가기</Button>
      </Link>
    </div>
  );
}

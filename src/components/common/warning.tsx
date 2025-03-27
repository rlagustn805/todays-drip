import { FaRegSurprise } from "react-icons/fa";

export default function Warning({ notice }: { notice: string }) {
  return (
    <div className="bg-gray-200/30 w-full h-[500px] flex justify-center items-center rounded-lg">
      <div className="flex flex-col gap-3 text-center items-center p-2 whitespace-pre-wrap">
        <FaRegSurprise size={60} />
        {notice}
      </div>
    </div>
  );
}

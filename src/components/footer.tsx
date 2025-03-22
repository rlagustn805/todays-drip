import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-purple-300 mx-5 md:mx-20 lg:mx-40 p-10">
      <div className="flex flex-col gap-5 text-white font-bold">
        <Link href="/history">지난 드립왕</Link>
        <Link href="/">이용 안내</Link>
      </div>
    </div>
  );
}

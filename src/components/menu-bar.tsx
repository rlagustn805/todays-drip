import Link from "next/link";
import Button from "./common/button";

export default function MenuBar() {
  return (
    <div className="flex gap-5 border border-purple-200 p-2 rounded-lg">
      <Link href="/">
        <Button>지난 드립왕🏆</Button>
      </Link>
      <Link href="/">
        <Button>이용 안내</Button>
      </Link>
    </div>
  );
}

import Link from "next/link";
import Button from "./common/button";

export default function MenuBar() {
  return (
    <div className="flex justify-center items-center gap-5 p-2 rounded-lg">
      <Link href="history">
        <Button color="transparency">지난 드립왕🏆</Button>
      </Link>
      <Link href="/">
        <Button color="transparency">이용 안내</Button>
      </Link>
    </div>
  );
}

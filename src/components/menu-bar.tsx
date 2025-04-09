import Link from "next/link";
import Button from "./common/button";
import KakaoShareBtn from "./kakao-share-btn";

export default function MenuBar() {
  return (
    <div className="flex justify-center items-center gap-3 rounded-lg">
      <Link href="/">
        <Button color="transparency">홈으로</Button>
      </Link>
      <Link href="history">
        <Button color="transparency">지난 드립왕🏆</Button>
      </Link>
      <Link href="/guide">
        <Button color="transparency">이용 안내</Button>
      </Link>
      <KakaoShareBtn />
    </div>
  );
}

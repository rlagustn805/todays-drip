import Image from "next/image";
import Link from "next/link";

const banners = [
  {
    src: "/title/pc.png",
    width: 1920,
    height: 600,
    className: "hidden md:hidden lg:block",
  },
  {
    src: "/title/tablet.png",
    width: 1024,
    height: 400,
    className: "hidden md:block lg:hidden",
  },
  {
    src: "/title/mobile.png",
    width: 720,
    height: 300,
    className: "block md:hidden",
  },
];

export default function Banner() {
  return (
    <div>
      {banners.map((banner) => (
        <Link href="/" key={banner.src}>
          <Image
            src={banner.src}
            alt={banner.src}
            width={banner.width}
            height={banner.height}
            className={banner.className}
            priority
          />
        </Link>
      ))}
    </div>
  );
}

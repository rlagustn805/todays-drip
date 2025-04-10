import Image from "next/image";

export default function Banner() {
  return (
    <div>
      <Image
        src="/title/pc.png"
        alt="오늘의 배너"
        width={1920}
        height={600}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 1024px, 1920px"
        className="w-full h-auto"
      />
    </div>
  );
}

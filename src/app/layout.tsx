import "./globals.css";
import localFont from "next/font/local";
import Footer from "@/components/footer";
import Banner from "@/components/banner";
import MenuBar from "@/components/menu-bar";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "500 920",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className={pretendard.className}>
        <div className="w-full max-w-[1400px] mx-auto px-4 py-8 min-h-screen flex flex-col gap-5">
          <Banner />
          <MenuBar />
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}

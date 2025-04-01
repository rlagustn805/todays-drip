import "./globals.css";
import localFont from "next/font/local";
import Script from "next/script";
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
      <head>
        <Script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.4/kakao.min.js"
          integrity="sha384-DKYJZ8NLiK8MN4/C5P2dtSmLQ4KwPaoqAfyA/DfmEc1VDxu4yyC7wy6K1Hs90nka"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
        <Script id="kakao-init" strategy="beforeInteractive">
          {`
            if (!window.Kakao.isInitialized()) {
              window.Kakao.init("${process.env.NEXT_PUBLIC_KAKAO_JS_KEY}");
            }
          `}
        </Script>
      </head>
      <body className={pretendard.className}>
        <div className="w-full max-w-[1400px] mx-auto px-4 py-6 min-h-screen flex flex-col gap-5">
          <Banner />
          <MenuBar />
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}

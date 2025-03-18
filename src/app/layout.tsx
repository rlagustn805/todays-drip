import "./globals.css";
import localFont from "next/font/local";
import Footer from "@/components/footer";
import Header from "@/components/header";

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
        <div className="mx-5 md:mx-20 lg:mx-40 bg-white min-h-screen p-2">
          <Header />
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}

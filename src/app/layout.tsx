import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";

export const metadata: Metadata = {
  metadataBase: new URL("https://tabimichi.jp"),
  title: {
    default: "TabiMichi Japan | 日本を深く味わう旅のコンシェルジュ",
    template: "%s | TabiMichi Japan",
  },
  description:
    "TabiMichi Japanは、京都、北海道、瀬戸内、東京など日本各地の旅を、現地ガイド、宿、移動、体験までまとめて設計するトラベルコンシェルジュです。",
  openGraph: {
    title: "TabiMichi Japan",
    description: "日本を深く味わう、上質なオーダーメイド旅行。",
    type: "website",
    images: ["/assets/images/home/hiking2.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <ScrollProgress />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

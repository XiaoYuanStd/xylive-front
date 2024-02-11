import {ReactNode} from "react";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.scss";


const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "XiaoYuanLive",
  description: "小源の直播服务",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}

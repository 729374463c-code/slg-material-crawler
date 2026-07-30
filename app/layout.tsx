import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../src/styles/global.scss";

export const metadata: Metadata = {
  title: "SLG 海外吸量素材情报库",
  description: "海外 SLG 吸量素材分析与横向对比工具。",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

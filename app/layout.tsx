import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "웹 시스템 개발 | 홈페이지·SaaS·업무 자동화",
  description:
    "단순 홈페이지가 아닌, 사업에 필요한 웹 시스템을 만듭니다. SaaS 2종 직접 개발·운영 경험. Next.js + Supabase 풀스택.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Noto Sans KR', 'Inter', sans-serif" }}>{children}</body>
    </html>
  );
}

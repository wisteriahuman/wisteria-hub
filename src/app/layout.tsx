import React from "react";
import SearchAppBar from "@/components/layout/SearchAppBar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "WisteriaHub",
  description: "wisteria のポートフォリオサイト。最新のプロジェクトやプロフィール情報をご覧いただけます。",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <>
        <html lang="ja">
          <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="/favicon.ico" />
            {/* 各ページの head.tsx で <title> の設定がされています */}
          </head>
          <body style={{ backgroundColor: "#1e1c2f", color: "#ffffff"}}>
            <SearchAppBar />
            <main>{children}</main>
            <Footer />
          </body>
        </html>
      </>
    );
}
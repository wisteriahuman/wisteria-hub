import React from "react";
import Header from "@/components/layout/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <>
        <html lang="ja">
          <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Home | wisteria.dev</title>
          </head>
          <body>
            <Header />
            <main>{children}</main>
          </body>
        </html>
      </>
    );
}
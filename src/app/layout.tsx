import React from "react";
import SearchAppBar from "@/components/layout/SearchAppBar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <>
        <html lang="ja">
          <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Home | wisteria.dev</title>
          </head>
          <body style={{ backgroundColor: "#1e1c2f" }}>
            <SearchAppBar />
            <main>{children}</main>
          </body>
        </html>
      </>
    );
}
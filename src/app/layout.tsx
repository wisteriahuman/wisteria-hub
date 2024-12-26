import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <>
        <html lang="ja">
          <body>
            <header>{children}</header>
            <main></main>
          </body>
        </html>
      </>
    );
}
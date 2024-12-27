import React from "react";

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
            <header>{children}</header>
            <main></main>
          </body>
        </html>
      </>
    );
}
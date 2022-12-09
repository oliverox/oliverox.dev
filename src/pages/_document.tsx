import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="All your web needs under control with Oliver Oxenham"
        />
        <link rel="icon" href="/favicon.ico" />
        <Link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <body className="min-h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

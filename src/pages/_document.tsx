import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
  return (
    <Html>
      <Head>
        <Link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <body className="bg-gradient-to-r from-[#00203a] via-[#182945] to-[#003343] background-animate">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

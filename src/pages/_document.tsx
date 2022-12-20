import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:creator" content="@oliveroxenham" />
        <meta property="og:url" content="https://www.oliverox.dev" />
        <meta property="og:title" content="OliverOx.dev" />
        <meta property="og:description" content="Get your web development needs under control with Oliver Oxenham." />
        <meta property="og:image" content="https://www.oliverox.dev/logo.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <body className="min-h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

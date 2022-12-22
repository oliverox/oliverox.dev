import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:creator" content="@oliveroxenham" />
        <meta name="description" content="Hire Oliver Oxenham to handle all your web application development needs." />
        <meta property="og:url" content="https://www.oliverox.dev" />
        <meta property="og:title" content="OliverOx.dev" />
        <meta property="og:description" content="Hire Oliver Oxenham to handle all your web application development needs." />
        <meta property="og:image" content="https://www.oliverox.dev/logo.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="min-h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

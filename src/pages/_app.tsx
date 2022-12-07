import { type AppType } from "next/app";
import { trpc } from "../utils/trpc";
import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <>
      <Component {...pageProps} />;
      <Analytics />
    </>
  );
};

export default trpc.withTRPC(MyApp);

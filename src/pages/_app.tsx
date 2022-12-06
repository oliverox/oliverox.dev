import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { trpc } from "../utils/trpc";

import "../styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { ...pageProps },
}) => {
  return (
    <>
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <Component {...pageProps} />
    </>
  );
};

export default trpc.withTRPC(MyApp);

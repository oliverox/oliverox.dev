import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { trpc } from "../utils/trpc";
import { Analytics } from "@vercel/analytics/react";
import { SessionProvider } from "next-auth/react";

import "../styles/inter.css";
import "../styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <div className="min-h-screen">
        <Component {...pageProps} />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </div>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);

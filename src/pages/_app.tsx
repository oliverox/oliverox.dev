import { useEffect } from "react";
import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { trpc } from "../utils/trpc";
import { useRouter } from "next/router";
import { Analytics } from "@vercel/analytics/react";
import { SessionProvider } from "next-auth/react";

import "../styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const router = useRouter();
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

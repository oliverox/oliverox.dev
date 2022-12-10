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
  const getBgColor = () => {
    if (router.pathname === "/guestbook") {
      return "bg-gray-200";
    } else if (router.pathname === "/") {
      return "background-animate bg-gradient-to-r from-[#1F2937] via-[#182945] to-[#1F2937]";
    } else {
      return "bg-gray-800";
    }
  };
  return (
    <SessionProvider session={session}>
      <div className={`min-h-screen ${getBgColor()}`}>
        <Component {...pageProps} />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </div>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);

import { type AppType } from "next/app";
import { trpc } from "../utils/trpc";
import { useRouter } from "next/router";
import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  const router = useRouter();
  const getBgColor = () => {
    if (router.pathname === "/guestbook") {
      return "bg-gray-200";
    } else if (router.pathname === '/') {
      return "background-animate bg-gradient-to-r from-[#1F2937] via-[#182945] to-[#1F2937]";
    } else {
      return 'bg-gray-800'
    }
  };
  return (
    <div className={`min-h-screen ${getBgColor()}`}>
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
};

export default trpc.withTRPC(MyApp);

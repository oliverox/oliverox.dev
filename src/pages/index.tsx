import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  HeartIcon,
  Square3Stack3DIcon,
  BookOpenIcon,
  CodeBracketSquareIcon,
} from "@heroicons/react/24/solid";

import { trpc } from "../utils/trpc";
import Logo from "../components/Logo/Logo";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Oliverox.Dev</title>
        <meta
          name="description"
          content="All your web needs under control with Oliver"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#05264c] to-[#023671]">
        <div className="container flex flex-col items-center justify-center gap-6 px-4 py-16 ">
          <Logo size="xs" />
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5em]">
            OliverOx<span className="text-[#4ee4fc]">.dev</span>
          </h1>
          <span className="text-center text-lg text-white">
            Your web development needs under control with Oliver
          </span>
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://create.t3.gg/en/usage/first-steps"
              target="_blank"
            >
              <div className="fx-row flex items-center space-x-2">
                <HeartIcon className="h-6 w-6" />
                <h3 className="text-2xl font-bold">Foundation →</h3>
              </div>
              <div className="text-lg">
                Find out more about Oliver, and why you can trust him with your
                web development needs.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://create.t3.gg/en/introduction"
              target="_blank"
            >
              <div className="fx-row flex items-center space-x-2">
                <CodeBracketSquareIcon className="h-6 w-6" />
                <h3 className="text-2xl font-bold">Projects →</h3>
              </div>
              <div className="text-lg">
                Learn about various projects Oliver has built over the
                years and is currently building.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://create.t3.gg/en/usage/first-steps"
              target="_blank"
            >
              <div className="flex flex-row items-center space-x-2">
                <Square3Stack3DIcon className="h-6 w-6" />
                <h3 className="text-2xl font-bold">Tech Stack →</h3>
              </div>
              <div className="text-lg">
                Glance into Oliver's favorite tech stack for quickly building
                high quality web apps.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://create.t3.gg/en/usage/first-steps"
              target="_blank"
            >
              <div className="flex flex-row items-center space-x-2">
                <BookOpenIcon className="h-6 w-6" />
                <h3 className="text-2xl font-bold">Guestbook →</h3>
              </div>
              <div className="text-lg">
                Don't be shy! Let Oliver know you dropped by.
              </div>
            </Link>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white">
              {hello.data ? hello.data.greeting : "Loading tRPC query..."}
            </p>
            <AuthShowcase />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};

import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import {
  HeartIcon,
  Square3Stack3DIcon,
  BookOpenIcon,
  CodeBracketSquareIcon,
} from "@heroicons/react/24/solid";
import Logo from "../components/Logo/Logo";
import Footer from "../components/Footer/Footer";
import HireButton from '../components/HireButton/HireButton';

const MenuLink = ({ href, target = "_self", children }: any) => {
  return (
    <Link
      className="flex max-w-xs flex-col gap-5 rounded-xl bg-white/10 p-5 text-white hover:bg-white/20"
      href={href}
      rel="noreferrer"
      target={target}
    >
      {children}
    </Link>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Oliverox.Dev</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-6 px-4 py-16 ">
          <Logo />
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[4em]">
            OliverOx<span className="text-accent">.dev</span>
          </h1>
          <span className="text-center text-lg text-white">
            Get your web development needs
            <br />
            under control with <Link href="/foundation" className="text-accent underline underline-offset-4">Oliver Oxenham</Link>
          </span>
          <HireButton />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-8">
            <MenuLink href="/foundation">
              <div className="fx-row flex items-center space-x-2">
                <HeartIcon className="h-6 w-6" />
                <h3 className="text-2xl font-bold">Foundation →</h3>
              </div>
              <div className="text-lg">
                Find out more about Oliver, and why you can trust him with your
                web development needs.
              </div>
            </MenuLink>
            <MenuLink href="/projects">
              <div className="fx-row flex items-center space-x-2">
                <CodeBracketSquareIcon className="h-6 w-6" />
                <h3 className="text-2xl font-bold">Projects →</h3>
              </div>
              <div className="text-lg">
                Learn about various projects Oliver has built over the years and
                is currently building.
              </div>
            </MenuLink>
            <MenuLink href="/techstack">
              <div className="flex flex-row items-center space-x-2">
                <Square3Stack3DIcon className="h-6 w-6" />
                <h3 className="text-2xl font-bold">Tech Stack →</h3>
              </div>
              <div className="text-lg">
                Glance into Oliver&apos;s favorite tech stack for quickly
                building high quality web apps.
              </div>
            </MenuLink>
            <MenuLink href="/guestbook">
              <div className="flex flex-row items-center space-x-2">
                <BookOpenIcon className="h-6 w-6" />
                <h3 className="text-2xl font-bold">Guestbook →</h3>
              </div>
              <div className="text-lg">
                Don&apos;t be shy! Let Oliver know you dropped by.
              </div>
            </MenuLink>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;

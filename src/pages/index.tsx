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
import HireButton from "../components/HireButton/HireButton";
import ThemeSwitcher from "../components/ThemeSwitcher/ThemeSwitcher";

const MenuLink = ({ href, target = "_self", children }: any) => {
  return (
    <Link
      className="menulink flex max-w-xs flex-col gap-5 rounded-xl p-8"
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
        <title>Web app development with Oliver Oxenham</title>
      </Head>
      <div className="p-4 flex flex-row-reverse bg-accent">
        <ThemeSwitcher />
      </div>
      <div className="bg-gradient-to-t from-neutral-content to-accent w-full h-[500px]"></div>
      {/* <svg className="bg-gradient-to-t from-white to-accent fill-transparent w-full" width="1600" height="595" viewBox="0 0 1600 595" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 338L53.3 349.2C106.7 360.3 213.3 382.7 320 393.8C426.7 405 533.3 405 640 359.3C746.7 313.7 853.3 222.3 960 189.2C1066.7 156 1173.3 181 1280 159.2C1386.7 137.3 1493.3 68.7 1546.7 34.3L1600 0V595H1546.7C1493.3 595 1386.7 595 1280 595C1173.3 595 1066.7 595 960 595C853.3 595 746.7 595 640 595C533.3 595 426.7 595 320 595C213.3 595 106.7 595 53.3 595H0V338Z"></path></svg> */}
      <main className="flex min-h-screen flex-col items-center justify-center -mt-[510px]">
        <div className="container flex flex-col items-center justify-center gap-6 px-4 pb-16">
          <Logo leftCircleColor="" rightCircleColor="neutral" />
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[4em]">
            OliverOx<span className="text-neutral-content">.dev</span>
          </h1>
          <span className="text-center font-medium">
            Web Application Development
            <br />
            with Oliver Oxenham
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
      <input type="checkbox" id="hire-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box border-2 border-neutral-content">
          <h3 className="text-xl font-bold">Thank you!</h3>
          <p className="pt-4">Your interest has been noted.</p>
          <p className="pt-2">
            This feature is still under development. For now, please reach out
            directly to Oliver using one of his social media platforms in the
            footer.
          </p>
          <div className="modal-action">
            <label htmlFor="hire-modal" className="btn-accent btn">
              OK
            </label>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

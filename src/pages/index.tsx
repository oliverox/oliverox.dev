import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import {
  HeartIcon,
  Square3Stack3DIcon,
  // BookOpenIcon,
  CodeBracketSquareIcon,
} from "@heroicons/react/24/solid";
import Logo from "../components/Logo/Logo";
import Footer from "../components/Footer/Footer";
import HireButton from "../components/HireButton/HireButton";
import ThemeSwitcher from "../components/ThemeSwitcher/ThemeSwitcher";

type MenuLinkProps = {
  href: string,
  target?: "_self" | "_blank" | "_parent" | "_top",
  children: React.ReactNode
};

const MenuLink: React.FC<MenuLinkProps> = ({
  href,
  target = "_self",
  children,
}) => {
  return (
    <Link
      className="menulink flex max-w-sm flex-col gap-5 rounded-xl p-8"
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
      <div className="m-4 flex flex-row-reverse">
        <ThemeSwitcher />
      </div>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-6 px-4 pb-16">
          <Logo />
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[4em]">
            OliverOx<span className="text-accent">.dev</span>
          </h1>
          <span className="text-center font-medium">
            Web Application Development
            <br />
            with Oliver Oxenham
          </span>
          <HireButton />
          <div className="mt-10 grid grid-cols-1 gap-5 md:gap-8">
            <MenuLink href="/foundation">
              <div className="fx-row flex items-center space-x-2">
                <HeartIcon className="h-6 w-6" />
                <h1 className="text-2xl font-bold">Foundation →</h1>
              </div>
              <div className="text-lg">
                Find out more about Oliver, and why you can trust him with your
                web development needs.
              </div>
            </MenuLink>
            <MenuLink href="/projects">
              <div className="fx-row flex items-center space-x-2">
                <CodeBracketSquareIcon className="h-6 w-6" />
                <h1 className="text-2xl font-bold">Projects →</h1>
              </div>
              <div className="text-lg">
                Learn about various projects Oliver has built over the years and
                is currently building.
              </div>
            </MenuLink>
            <MenuLink href="/techstack">
              <div className="flex flex-row items-center space-x-2">
                <Square3Stack3DIcon className="h-6 w-6" />
                <h1 className="text-2xl font-bold">Tech Stack →</h1>
              </div>
              <div className="text-lg">
                Glance into Oliver&apos;s favorite tech stack for quickly
                building high quality web apps.
              </div>
            </MenuLink>
            {/* <MenuLink href="/guestbook">
              <div className="flex flex-row items-center space-x-2">
                <BookOpenIcon className="h-6 w-6" />
                <h1 className="text-2xl font-bold">Guestbook →</h1>
              </div>
              <div className="text-lg">
                Don&apos;t be shy! Let Oliver know you dropped by.
              </div>
            </MenuLink> */}
          </div>
        </div>
      </main>
      <input type="checkbox" id="hire-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box border-2 border-neutral-content">
          <h1 className="text-xl font-bold">Thank you!</h1>
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

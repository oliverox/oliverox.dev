import Head from "next/head";
import Link from "next/link";
import { type NextPage } from "next";
import Layout from "../components/Layout/Layout";
import HireButton from "../components/HireButton/HireButton";

const Foundation: NextPage = () => {
  return (
    <Layout h1="Foundation">
      <Head>
        <title>Foundation</title>
      </Head>
      {/* <main className="max-w prose mx-auto -mt-32 max-w-4xl rounded-lg bg-white"> */}
      <main className="-mt-32">
        <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <article className="prose mx-auto rounded-lg border-neutral-content border-2 bg-base-100 px-5 py-12 shadow sm:px-6 pb-20 text-base-content">
            <blockquote className="-ml-8 border-0 text-center text-xl">
              <p>
                Truthfulness is the foundation
                <br />
                of all human virtues.
              </p>
              <span className="text-xs italic text-gray-300">
                -{" "}
                <Link
                  href="https://www.bahai.org/abdul-baha"
                  target="_blank"
                  className="underline underline-offset-4"
                >
                  ‘Abdu’l-Bahá
                </Link>
              </span>
            </blockquote>

            <p>
              Oliver is known for delivering world-class, full stack web apps.
              In fact, his software was{" "}
              <Link
                className="underline underline-offset-4"
                href="https://techcrunch.com/2012/03/08/ebays-stubhub-acquires-peekspy-to-add-3d-map-views-for-venues/"
                target="_blank"
              >
                acquired by eBay in 2012
              </Link>
              . He works closely with his clients, striving to fully understand
              their needs and requirements. He works systematically and
              iteratively always with constant, truthful communication with his
              clients. His experience with bootstrapping a startup from scratch,
              growing it and taking it through an acquisition process gives him
              a unique edge with working with clients with tight budgets while
              still needing to deliver a first-class experience.
            </p>
            <p>
              To do so, Oliver usually opts to build his web apps on top of
              Serverless platforms to support their backend needs. Oliver
              iterates quickly when building web apps with React and TailwindCSS
              on the frontend. If you have a Figma design ready, Oliver enjoys
              the challenge of turning it into a componentized pixel-perfect app
              in a very short time. He is a quick learner and aims to launch his
              projects in the shortest time possible with the best quality.
            </p>
            <p>
              Oliver works as a freelance software developer on{" "}
              <Link
                className="underline underline-offset-4"
                href="https://www.toptal.com/60VA4e/worlds-top-talent"
                target="_blank"
              >
                Toptal
              </Link>
              , an exclusive network of the top freelance software developers.
              Toptal is reknown for hiring fewer than the top 3% of the
              thousands of applications it receives each month. If you are a
              company or startup looking to hire a top talent, Oliver highly
              recommends you consider{" "}
              <Link
                className="underline underline-offset-4"
                href="https://www.toptal.com/60VA4e/worlds-top-talent"
                target="_blank"
              >
                hiring them from Toptal
              </Link>{" "}
              for your peace of mind and assured quality.
            </p>
            <div className="mt-12 flex justify-center">
              <HireButton />
            </div>
          </article>
        </div>
      </main>
    </Layout>
  );
};

export default Foundation;

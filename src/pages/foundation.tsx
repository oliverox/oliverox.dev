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
      <main className="-mt-32">
        <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <article className="prose mx-auto rounded-lg border-2 border-neutral-content bg-base-100 px-5 py-12 pb-20 text-base-content shadow sm:px-6">
            <blockquote className="-ml-8 border-0 text-center text-xl">
              Truthfulness is the foundation
              <br />
              of all human virtues.
              <br />
              <Link
                href="https://www.bahai.org/abdul-baha"
                target="_blank"
                className="text-xs italic text-neutral underline underline-offset-4"
              >
                ‘Abdu’l-Bahá
              </Link>
            </blockquote>

            <p>
              Known for delivering world-class, full stack web application
              solutions, Oliver, a 15-year veteran in the software development
              industry, now provides his services to any startup or business
              requiring web application development. Oliver&apos;s software was{" "}
              <Link
                className="underline underline-offset-4"
                href="https://techcrunch.com/2012/03/08/ebays-stubhub-acquires-peekspy-to-add-3d-map-views-for-venues/"
                target="_blank"
              >
                acquired by eBay in 2012
              </Link>
              . He strives to work closely with his clients in order to fully
              understand their needs and requirements. He is systematic and
              works iteratively, always with constant, truthful communication.
              His experience with bootstrapping a startup from scratch, growing
              it and taking it through an acquisition process gives him a unique
              edge with working with clients with tight budgets while still
              needing to deliver a first-class experience.
            </p>
            <p>
              To do so, Oliver usually opts to build his web applications on top
              of Serverless platforms to support their backend needs. Oliver
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
              <Link href="/projects" className="btn-accent btn">
                Next →
              </Link>
            </div>
          </article>
        </div>
      </main>
    </Layout>
  );
};

export default Foundation;

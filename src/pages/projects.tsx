import Head from "next/head";
import Link from 'next/link';
import { type NextPage } from "next";
import Layout from "../components/Layout/Layout";

const Projects: NextPage = () => {
  return (
    <Layout h1="Projects">
      <Head>
        <title>Projects</title>
      </Head>
      <main className="-mt-32">
        <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <article className="prose mx-auto rounded-lg border-2 border-neutral-content bg-base-100 px-5 py-12 pb-20 text-base-content shadow sm:px-6">
            <p className="text-center">...coming soon...</p>
            <div className="mt-12 flex justify-center">
              <Link href="/techstack" className="btn-accent btn">
                Next →
              </Link>
            </div>
          </article>
        </div>
      </main>
    </Layout>
  );
};

export default Projects;

import Head from "next/head";
import Link from "next/link";
import { type NextPage } from "next";
import Layout from "../components/Layout/Layout";

const TechStack: NextPage = () => {
  return (
    <Layout h1="TechStack">
      <Head>
        <title>Tech Stack</title>
      </Head>
      <main className="-mt-32">
        <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <article className="prose mx-auto rounded-lg border-2 border-neutral-content bg-base-100 px-5 py-12 pb-20 text-base-content shadow sm:px-6">
            <p>My Tech Stack</p>
            <div className="mt-12 flex justify-center">
              <Link href="/guestbook" className="btn-accent btn">
                Next →
              </Link>
            </div>
          </article>
        </div>
      </main>
    </Layout>
  );
};

export default TechStack;

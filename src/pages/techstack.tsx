import Head from "next/head";
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
          <p className="text-white">My preferred Tech Stack</p>
        </div>
      </main>
    </Layout>
  );
};

export default TechStack;

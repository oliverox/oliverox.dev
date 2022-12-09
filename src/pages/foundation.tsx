import Head from "next/head";
import { type NextPage } from "next";
import Layout from "../components/Layout/Layout";

const Foundation: NextPage = () => {
  return (
    <Layout h1="Foundation">
      <Head>
        <title>Foundation</title>
      </Head>
      <main className="-mt-32">
        <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <p className="text-white">Boom</p>
        </div>
      </main>
    </Layout>
  );
};

export default Foundation;

import Head from "next/head";
import { type NextPage } from "next";
import Layout from "../components/Layout/Layout";

const GuestBook: NextPage = () => {
  return (
    <Layout h1="Guestbook">
      <Head>
        <title>Sign Oliver&apos;s Guestbook</title>
      </Head>
      <main className="-mt-32">
        <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
            <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
          </div>
          {/* /End replace */}
        </div>
      </main>
    </Layout>
  );
};

export default GuestBook;

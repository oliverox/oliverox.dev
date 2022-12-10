import Head from "next/head";
import { type NextPage } from "next";
import Form from "../components/Guestbook/Form";
import Loading from '../components/Loading/Loading';
import Messages from "../components/Guestbook/Messages";
import { useSession, signIn } from "next-auth/react";
import Layout from "../components/Layout/Layout";

const GuestBook: NextPage = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <main className="flex flex-col items-center gap-3 pt-20">
        <Loading />
      </main>
    );
  }

  return (
    <Layout h1="Guestbook">
      <Head>
        <title>Sign Oliver&apos;s Guestbook</title>
      </Head>
      <main className="-mt-32">
        <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
            <div className="rounded-lg border-4 border-dashed border-gray-200 p-4">
              {session ? (
                <Form />
              ) : (
                <div className="mx-auto max-w-lg text-center">
                  <button
                    className="btn-ghost btn"
                    onClick={() => signIn("google")}
                  >
                    Post a message
                  </button>
                </div>
              )}
              <Messages />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default GuestBook;

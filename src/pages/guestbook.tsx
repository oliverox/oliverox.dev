import Head from "next/head";
import { type NextPage } from "next";
import Form from "../components/Guestbook/Form";
import Loading from "../components/Loading/Loading";
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
          <div className="prose mx-auto rounded-lg border-2 border-neutral-content bg-base-100 px-5 py-12 pb-20 text-base-content shadow sm:px-6">
            {session ? (
              <Form />
            ) : (
              <div className="mx-auto max-w-lg text-center">
                <button
                  className="btn-neutral btn"
                  onClick={() => signIn("google")}
                >
                  Post a message
                </button>
              </div>
            )}
            <Messages />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default GuestBook;

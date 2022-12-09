import Head from "next/head";
import { type NextPage } from "next";
import Form from "../components/Guestbook/Form";
import Messages from "../components/Guestbook/Messages";
import { useSession, signIn, signOut } from "next-auth/react";
import Layout from "../components/Layout/Layout";

const GuestBook: NextPage = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <main className="flex flex-col items-center pt-4">Loading...</main>;
  }

  return (
    <Layout h1="Guestbook">
      <Head>
        <title>Sign Oliver&apos;s Guestbook</title>
      </Head>
      <main className="-mt-32">
        <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
            <div className="h-96 rounded-lg border-4 border-dashed border-gray-200 p-4">
              {session ? (
                    <Form />
              ) : (
                <>
                  <p>Sign in to post a message.</p>
                  <button
                    className="rounded-md border-2 border-zinc-800 p-2 focus:outline-none"
                    onClick={() => signIn("google")}
                  >
                    Login with Google
                  </button>
                </>
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

import { useState } from "react";
import { trpc } from "../../utils/trpc";
import { useSession } from "next-auth/react";

export default function Form() {
  const utils = trpc.useContext();
  const [message, setMessage] = useState("");
  const { data: session } = useSession();
  const postMessage = trpc.guestbook.postMessage.useMutation({
    onMutate: () => {
      utils.guestbook.getAll.cancel();
      const optimisticUpdate = utils.guestbook.getAll.getData();
      if (optimisticUpdate) {
        utils.guestbook.getAll.setData(undefined, optimisticUpdate);
      }
    },
    onSettled: () => {
      utils.guestbook.getAll.invalidate();
    },
  });

  return (
    <form
      className="flex gap-2 w-full justify-center pb-4"
      onSubmit={(event) => {
        event.preventDefault();
        if (session) {
          postMessage.mutate({
            name: session.user?.name as string,
            message,
          });
          setMessage("");
        }
      }}
    >
      <input
        type="text"
        value={message}
        placeholder="Say hi, don't be shy!"
        minLength={2}
        maxLength={100}
        onChange={(event) => setMessage(event.target.value)}
        className="text-sm bg-neutral-900 rounded-md border-2 border-neutral px-4 py-2 focus:outline-none w-96"
      />
      <button
        type="submit"
        disabled={session ? false : true}
        className="btn btn-accent"
      >
        {session ? "Post" : "Sign in to post"}
      </button>
    </form>
  );
}
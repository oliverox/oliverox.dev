import { trpc } from "../../utils/trpc";

type msgType = {
  message: string,
  name: string,
  createdAt: Date
}

export default function Messages() {
  const { data: messages, isLoading } = trpc.guestbook.getAll.useQuery();

  if (isLoading) return <div>Fetching messages...</div>;

  return (
    <div className="flex flex-col mx-auto items-center gap-4 max-w-lg">
        {messages?.map(
          (
            msg: msgType,
            index: number
          ) => {
            return (
              <div
                key={index}
                className={`chat ${
                  index % 2 === 0 ? "chat-start" : "chat-end"
                } w-full p-2`}
              >
                <div className="chat-bubble">
                  <span className="text-xs">{msg.name}:</span>
                  <p>{msg.message}</p>
                  <span className="text-xs">{msg.createdAt.toDateString()}</span>
                </div>
              </div>
            );
          }
        )}
    </div>
  );
}

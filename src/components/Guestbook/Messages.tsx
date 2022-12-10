import { trpc } from "../../utils/trpc";
import Loading from "../Loading/Loading";

type msgType = {
  message: string;
  name: string;
  createdAt: Date;
};

export default function Messages() {
  const { data: messages, isLoading } = trpc.guestbook.getAll.useQuery();

  if (isLoading)
    return (
      <div className="w-full text-center">
        <Loading text="Fetching messages..." />
      </div>
    );

  return (
    <div className="mx-auto mt-5 flex max-w-lg flex-col items-center gap-4">
      {messages?.map((msg: msgType, index: number) => {
        return (
          <div key={index} className="chat chat-start w-full">
            <div className="chat-bubble mx-auto p-4">
              <p>{msg.message}</p>
              <span className="text-[11px] text-gray-400">
                {msg.name} &#8226; {msg.createdAt.toDateString()}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

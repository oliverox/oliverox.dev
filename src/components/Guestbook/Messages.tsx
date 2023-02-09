// import { trpc } from "../../utils/trpc";
// import Loading from "../Loading/Loading";

type msgType = {
  message: string;
  name: string;
  createdAt: Date;
};

export default function Messages() {
  // const { data: messages, isLoading } = trpc.guestbook.getAll.useQuery(undefined, {
  //   refetchOnWindowFocus: false,
  //   refetchOnMount: false
  // });

  // if (isLoading) {
  //   return (
  //     <div className="w-full text-center my-4">
  //       <Loading text="Fetching messages..." />
  //     </div>
  //   );
  // }

  return (
    <div className="mx-auto mt-5 flex max-w-lg flex-col gap-4">
      {/* {messages?.map((msg: msgType, index: number) => {
        const chatContainerClasses = ["chat", "basis-full"];
        const chatBubbleClasses = ["chat-bubble", "mx-auto", "lg:w-5/6", "drop-shadow-md"];
        const chatTextClasses = ["mt-2", "flex", "flex-col"];
        if (msg.name === "Oliver Oxenham") {
          chatContainerClasses.push("chat-end");
          chatBubbleClasses.push("chat-bubble-neutral");
          chatTextClasses.push("text-right");
        } else {
          chatContainerClasses.push("chat-start");
          chatBubbleClasses.push("chat-bubble-accent");
        }
        return (
          <div key={index} className={chatContainerClasses.join(" ")}>
            <div className={chatBubbleClasses.join(" ")}>
              <p>{msg.message}</p>
              <div className={chatTextClasses.join(" ")}>
                <span className="text-[11px] italic capitalize">{msg.name}</span>
                <span className="text-[10px] italic">
                  {msg.createdAt.toDateString()}
                </span>
              </div>
            </div>
          </div>
        );
      })} */}
    </div>
  );
}

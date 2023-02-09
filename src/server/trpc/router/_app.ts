import { router } from "../trpc";
import { authRouter } from "./auth";
// import { guestbookRouter } from './guestbook';
// import { exampleRouter } from "./example";

export const appRouter = router({
  // example: exampleRouter,
  auth: authRouter,
  // guestbook: guestbookRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;

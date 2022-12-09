// src/server/trpx/router/guestbook.ts

import { z } from "zod";
import { router, publicProcedure, protectedProcedure } from "../trpc";

export const guestbookRouter = router({
  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.guestbook.findMany({
        select: {
          name: true,
          message: true,
          createdAt: true
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    } catch (error) {
      console.log("Error: getAll()", error);
    }
  }),

  postMessage: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        message: z.string(),
        createdAt: z.date()
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.guestbook.create({
          data: {
            name: input.name,
            message: input.message,
            createdAt: input.createdAt
          },
        });
      } catch (error) {
        console.log("Error: postMessage()", error);
      }
    }),
});

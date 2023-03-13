import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const prismaRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    return ctx.prisma.wesetproperties_1155_test.findMany({
      orderBy: {
        created_at: "desc",
      },
    });
  }),
  getPropsUser: publicProcedure
    .input(z.object({ user: z.string() }))
    .query(({ ctx, input }) => {
      const deployer = input.user;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      return ctx.prisma.wesetproperties_1155_test.findMany({
        where: {
          deployer: deployer,
        },
        orderBy: {
            created_at: "desc",
          },
      });
    }),
});

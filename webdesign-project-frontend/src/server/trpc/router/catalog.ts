import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const catalogRouter = router({
    getAllSpaces: publicProcedure
        .input(z.object({ text: z.string().nullish() }).nullish())
        .query(async ({ ctx }) => {
            return {
                spaces: await ctx.prisma.space.findMany({
                    include: {
                        location: true
                    }
                })
            };
        }),

    getSpaceById: publicProcedure
        .input(z.object({ id: z.string() }))
        .query(({ ctx, input }) => {
            return {
                spaces: ctx.prisma.space.findFirst({ where: { id: input.id } })
            };
        }),

});

import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const catalogRouter = router({
    getAllSpaces: publicProcedure
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
        .query(async ({ ctx, input }) => {
            return {
                space: await ctx.prisma.space.findFirst({
                    where: { id: input.id },
                    include: {
                        location: true
                    }
                })
            };
        }),

    getBookingsOfUser: publicProcedure
        .input(z.object({ id: z.string() }))
        .query(async ({ ctx, input }) => {
            return {
                spaces: await ctx.prisma.bookedTimeSlot.findMany({
                    where: {
                        userId: input.id
                    },
                    include: {
                        space: true,
                        timeSlot: true,
                        bookedBy: true,
                    }
                })
            };
        }),

    getTimeSlots: publicProcedure
        .input(z.object({}).nullish())
        .query(async ({ ctx }) => {
            return {
                timeSlots: await ctx.prisma.timeSlot.findMany({})
            }
        }),

    getLocations: publicProcedure
        .query(async ({ ctx }) => {
            return {
                locations: await ctx.prisma.location.findMany({})
            }
        }),

    addLocation: publicProcedure
        .input(z.object({
            name: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            return await ctx.prisma.location
                .create({
                    data: {
                        name: input.name,
                    }
                })
        }),

    addSpace: publicProcedure
        .input(z.object({
            title: z.string(),
            description: z.string(),
            locationId: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            return await ctx.prisma.space
                .create({
                    data: {
                        title: input.title,
                        description: input.description,
                        locationId: input.locationId,
                    }
                })
        }),

    editSpace: publicProcedure
        .input(z.object({
            id: z.string(),
            title: z.string(),
            description: z.string(),
            locationId: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            return await ctx.prisma.space
                .update({
                    where: {
                        id: input.id
                    },
                    data: {
                        title: input.title,
                        description: input.description,
                        locationId: input.locationId,
                    }
                })
        }),

    deleteSpace: publicProcedure
        .input(z.object({
            id: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            return await ctx.prisma.space
                .delete({
                    where: {
                        id: input.id
                    }
                })
        }),
});

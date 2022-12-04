import { router } from "../trpc";
import { authRouter } from "./auth";
import { catalogRouter } from "./catalog";
import { exampleRouter } from "./example";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  catalog: catalogRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

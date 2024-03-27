import { publicProcedure, router } from "./trpc";
import { createHTTPServer } from '@trpc/server/adapters/standalone'
import { z } from 'zod'


const appRouter = router({
    createTodo: publicProcedure
        .input(z.object({
        title : z.string(),
            description : z.string()
        }))
    // .mutation(async (opts) => {
    //     const title = opts.input.title;
    //     const description = opts.input.description;
    //     return {
    //         id : "1"
    //     }
    // })
    .query(async (opts) => {
        return {
            id : "1"
        }
    })
})

export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3000);

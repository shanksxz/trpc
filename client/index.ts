import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server/index";


const trpc = createTRPCProxyClient<AppRouter>({
    links : [
        httpBatchLink({
            url : 'http://localhost:3000',
        }),
    ],
})

trpc.createTodo.query({
    
})
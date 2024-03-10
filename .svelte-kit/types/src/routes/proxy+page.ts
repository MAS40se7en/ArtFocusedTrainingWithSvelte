// @ts-nocheck
import type { Posts } from "@prisma/client";
import type { PageLoad } from "./$types";

export const load = async ({ fetch, depends }: Parameters<PageLoad>[0]) => {
    const random = Math.round(Math.random() * 30)
    const response = await fetch(`/api/posts?limit=${random}`)
    const posts: Posts[] = await response.json()

    
    depends('app:posts')


    return { posts }
}
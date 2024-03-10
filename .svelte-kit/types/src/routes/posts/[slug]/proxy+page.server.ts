// @ts-nocheck
import db from "$lib/database"
import { error } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"

export const load = async ({ params, parent }: Parameters<PageServerLoad>[0]) => {
    const parentData = await parent()
    console.log(parentData)
    
    const post = await db.posts.findUnique({
        where: { slug: params.slug}
    })

    if(!post) {
        throw error(404, 'Post not found')
    }

    return { post }
}
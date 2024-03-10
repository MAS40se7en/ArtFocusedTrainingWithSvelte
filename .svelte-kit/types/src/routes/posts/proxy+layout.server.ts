// @ts-nocheck
import db from "$lib/database";
import type { LayoutServerLoad } from "./$types";

export const load = async (event: Parameters<LayoutServerLoad>[0]) => {
    const posts = await db.posts.findMany({
        select: {
            title: true,
            slug: true
        },
        take: 3
    })

    return { posts }
}
import db from "$lib/database";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async (event) => {
    const posts = await db.posts.findMany({
        select: {
            title: true,
            slug: true
        },
        take: 3
    })

    return { posts }
}
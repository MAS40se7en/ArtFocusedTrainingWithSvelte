import db from "$lib/database";
import type { RequestHandler } from "./$types";
import { json } from "@sveltejs/kit"

export const GET: RequestHandler = async ({ url }) => {
    const limit = Number(url.searchParams.get('limit') ?? 30)
    const order = url.searchParams.get('order') ?? 'asc'
    const posts = await db.posts.findMany({
        orderBy: { id: order },
        take: limit
    })
    return json(posts)
}
<script lang="ts">
import type { PageData } from "./$types"

    export let data: PageData

    function formatdate(date: Date) {
        return new Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(date)
    }
</script>

<hgroup>
    <h1>{data.post.title}</h1>
    <h2>{formatdate(data.post.createdAt)}</h2>
</hgroup>

<div class="content">
    {@html data.post.content}
</div>

<div class="posts">
    <h3 class="recom">Posts</h3>

    <ul>
        {#each data.posts as { slug, title }}
            <li><a href="/posts/{slug}">{title}</a></li>
        {/each}
    </ul>

</div>

<style>
    .recom {
        margin: 20px;
    }
</style>
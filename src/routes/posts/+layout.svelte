<script lang="ts">
    import type { LayoutData } from './$types'

    export let data: LayoutData
</script>



<div class="posts">
    <aside>
        <h4>Posts</h4>
        <nav>
            <ul>
                {#each data.posts as { slug, title }}
                <li>
                    <a href="/posts/{slug}">{title}</a>
                </li>
                {/each}
            </ul>
        </nav>
    </aside>

<main class="main">
    <slot />
</main>
</div>




<style>
    .posts {
        display: grid;
        gap: 4rem;
        grid-template-columns: 200px minmax(auto, 60ch);
        margin-top: 2rem;
    }
</style>
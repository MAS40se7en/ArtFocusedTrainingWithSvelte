<script lang="ts">
    import { page } from '$app/stores'
    import '../app.css'

</script>

<svelte:head>
    <title>{$page.data.post?.title}</title>
</svelte:head>

<nav>
    <ul>
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="/posts">Posts</a>
        </li>
        <li>
            <a href="/todos">Todos</a>
        </li>
        <li>
            <a href="/login">Login</a>
        </li>
    </ul>
</nav>




<slot />
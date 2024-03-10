<script lang="ts">
	import { invalidate, invalidateAll } from "$app/navigation"
	import type { PageData } from "./$types"
    import { applyAction, enhance } from "$app/forms"
	import type { ActionData } from "./$types"
	import type { SubmitFunction } from "@sveltejs/kit"
    import { page } from '$app/stores'

    export let form: ActionData

    export let data: PageData

    const login: SubmitFunction = () => {
        return async ({ result }) => {
            if(result.type == 'success') {
                // do anything
                await applyAction(result)
            }
        }
    }


    $: ({ posts } = data)

    function rerunLoadFunction() {
        invalidate(url => url.href.includes('posts'))
    }
</script>

<title>ArtFocused</title>

{#if $page.data.user}
Welcome {$page.data.user}
{/if}


<!---   Login-->

<pre>
    {JSON.stringify(form, null, 2)}
</pre>

<form method="POST" action="/login" use:enhance={login}>
    <input type="text" name="user" value={form?.data?.user ?? ''} />
    {#if form?.errors?.user}
        <p class="error">Name is required</p>
    {/if}
    <input type="password" name="password" />
    {#if form?.errors?.password}
        <p class="error">Password is required</p>
    {/if}
    <button type="submit">Login</button>
</form>

<style>
    .error {
        color: tomato;
    }
</style>




<h1>Posts</h1>

<p>Showing {data.posts.length} posts.</p>

<button on:click={rerunLoadFunction}>Rerun</button>

{#each data.posts as { slug, title}}
    <ul>
        <li><a href="/posts/{slug}">{title}</a></li>
    </ul>
{/each}
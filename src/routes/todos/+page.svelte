<script lang="ts">
	import { enhance } from '$app/forms'
    import type { ActionData, PageData, SubmitFunction } from './$types';

    
    export let data: PageData;
    export let form: ActionData;

    let loading = false

    const addTodo: SubmitFunction = (input) => {
        // do something before the submit function
        loading = true


        return async ({ update }) => {
            // do something after the submit function
            loading = false
            await update()
        }
    }
</script>

<pre>
    {JSON.stringify(form, null, 2)}
</pre>

<ul>
    {#each data.todos as todo}
        <li>
            <span>{todo.text}</span>
            <form method="POST" action="?/removeTodo" use:enhance>
                <input type="hidden" name="id" value={todo.id} />
                <button class="delete" type="submit">Remove</button>
            </form>
        </li>
    {/each}
</ul>

<form method="POST" action="?/addTodo" use:enhance={addTodo}>
    <input type="text" name="todo" />
    {#if form?.missing}
    <p class="error">This field is required</p>
    {/if}
    <button aria-busy={loading} class:secondary={loading} type="submit">
        {#if !loading}
            + Add Todo
        {/if}
    </button>

    <button formaction="?/clearTodos" class="secondary">clear</button>
</form>

{#if form?.success}
<p>Added todo!</p>
{/if}


<style>
    ul {
        padding: 0;
    }

    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    span {
        text-transform: capitalize;
    }

    .delete {
        margin: 0;
        background: none;
        border: none;
    }

    .error {
        color: tomato;
    }

</style>
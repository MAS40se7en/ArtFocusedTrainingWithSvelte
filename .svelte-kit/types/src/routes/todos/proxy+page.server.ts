// @ts-nocheck
import { addTodos, cleartodos, getTodos, removeTodos } from '$lib/database';
import { fail, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = async () => {
    const todos = getTodos()
    return { todos }
}

async function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export const actions = {
    addTodo: async ({request}: import('./$types').RequestEvent) => {
        const formData = await request.formData()
        const todo = String(formData.get('todo'))

        if(!todo) {
            return fail(400, { todo, missing: true})
        }

        await sleep(2000)

        addTodos(todo)

        return { success: true }
        
    },
    removeTodo: async ({request}: import('./$types').RequestEvent) => {
        const formData = await request.formData()
        const todoId = Number(formData.get('id'))

        removeTodos(todoId)

        return { success: true }
    },
    clearTodos: () => {
        cleartodos()
    }
};null as any as PageServerLoad;;null as any as Actions;
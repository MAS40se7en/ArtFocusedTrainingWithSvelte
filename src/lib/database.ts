import { PrismaClient } from '@prisma/client'

const db = new PrismaClient();

type Todo = {
    id: number
    text: string
    completed: boolean
}

let todos: Todo[] = [
    {
        id: Date.now(),
        text: 'Learn how forms work',
        completed: false
    }
]

export function getTodos() {
    return todos
}

export function addTodos(text: string) {
    const todo: Todo = {
        id: Date.now(),
        text,
        completed: false
    }
    todos.push(todo)
}

export function removeTodos(id: number) {
    todos = todos.filter((todo) => todo.id !== id)
}

export function cleartodos() {
    todos = []
}

export default db;
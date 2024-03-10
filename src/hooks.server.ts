import type { Handle } from '@sveltejs/kit'
import { parseFormData } from 'parse-nested-form-data'

export const handle: Handle = async ({ event, resolve }) => {
    if (event.request.method == 'POST') {
        const formData = await event.request.formData()
        const data = parseFormData(formData)
        event.locals.formData = data
    }

    return resolve(event)
}
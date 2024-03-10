// @ts-nocheck
import { redirect, type Actions, fail } from "@sveltejs/kit";
import {zfd} from 'zod-form-data'

export const actions = {
    default: async ({ request }: import('./$types').RequestEvent) => {
        const formData = await request.formData()

        const loginSchema = zfd.formData({
            user: zfd.text(),
            password: zfd.text()
        })

        const result = loginSchema.safeParse(formData)

        if (!result.success) {
            const data = {
                data: Object.fromEntries(formData),
                errors: result.error.flatten().fieldErrors
            }

            return fail (400, data)
        }

        throw redirect(303, '/todos')
    }
};null as any as Actions;
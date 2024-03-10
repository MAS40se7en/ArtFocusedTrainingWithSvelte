// @ts-nocheck
import type { Actions } from "./$types";

export const actions = {
    default: async ({ locals }: import('./$types').RequestEvent) => {
        console.log(locals.formData)
    },
};null as any as Actions;
import type { Actions } from "./$types";

export const actions: Actions = {
    default: async ({ locals }) => {
        console.log(locals.formData)
    },
}
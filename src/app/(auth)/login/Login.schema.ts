import * as zod from 'zod';


export const schema = zod.object({
    email: zod.string().nonempty('Please enter your email').regex(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/, 'Please enter a valid email'),
    password: zod.string().nonempty('Please enter your password').regex(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/, 'Please enter a valid password'),
    // keepSigned: zod.boolean().optional().default(false),
})
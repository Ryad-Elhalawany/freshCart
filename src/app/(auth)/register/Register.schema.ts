import * as zod from 'zod';


export const schema = zod.object({
    name: zod.string().nonempty('Name is required').regex(/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/, 'Please enter a valid name.'),
    email: zod.string().nonempty('Email is required').regex(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/, 'Please enter a valid email'),
    password: zod.string().nonempty('Password is required').regex(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/, 'Please enter a valid password'),
    rePassword: zod.string().nonempty('Confirm Password is required'),
    phone: zod.string().nonempty('Phone Number is required').regex(/^(\+20|0)(10|11|12|15)[0-9]{8}$/, 'Only Egyptian phone numbers are allowed'),
    terms: zod.boolean().refine(val => val === true, {
        message: "*You must accept the terms and conditions"
    })
}).refine((data) => data.password === data.rePassword, {
    path: ["rePassword"],
    error: "Please re-enter the same password."
})

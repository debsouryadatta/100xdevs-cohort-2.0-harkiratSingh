import {z} from 'zod';

export const signinSchema = z.object({
    email: z.string(),
    password: z.string(),
})

export const signupSchema = z.object({
    email: z.string(),
    password: z.string(),
    name: z.string(),
    age: z.number(),
})

export type SigninType = z.infer<typeof signinSchema>;
export type SignupType = z.infer<typeof signupSchema>;
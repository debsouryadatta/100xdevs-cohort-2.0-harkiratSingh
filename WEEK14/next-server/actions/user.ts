"use server"

import client from "@/db"

export async function signup(email: string, password: string) {
    // should add zod validation here
    const user = await client.user.create({
        data: {
            email: email,
            password: password
        }
    });

    console.log(user.id);

    return "Signed up!"
}
"use server"

import { getUserToken } from "@/app/myUtil";

export async function handleGetUserData() {

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/verifyToken`, {
        method: 'GET',
        headers: {
            token: (await getUserToken() as string),
            "Content-Type": "application/json"
        },
    });

    const res = await response.json();
    return res
}
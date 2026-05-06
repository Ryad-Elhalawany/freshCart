"use server"

import { getUserToken } from "@/app/myUtil";

export async function handleClearUserCart() {

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/cart`, {
        method: 'DELETE',
        headers: {
            token: (await getUserToken() as string),
        }
    });

    const data = await response.json();

    return data
}
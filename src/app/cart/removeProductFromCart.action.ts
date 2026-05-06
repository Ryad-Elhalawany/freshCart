"use server"

import { getUserToken } from "@/app/myUtil";

export async function handleRemoveProductFromCart(id: string) {

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/cart/${id}`, {
        method: 'DELETE',
        headers: {
            token: (await getUserToken() as string),
        }
    });

    const data = await response.json();
    return data
}
"use server"

import { getUserToken } from "@/app/myUtil";

export async function handleAddProductToCart(productId: object) {

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/cart`, {
        method: 'POST',
        headers: {
            token: (await getUserToken() as string),
            "Content-Type": "application/json"
        },
        body: JSON.stringify(productId)
    });

    const data = await response.json();
    return data
}
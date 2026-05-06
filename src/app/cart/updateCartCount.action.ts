"use server"
import { getUserToken } from "@/app/myUtil";

export async function handleUpdateCartCount(id: string, count: number) {

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/cart/${id}`, {
        method: 'PUT',
        headers: {
            token: (await getUserToken() as string),
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ count: count })
    });

    const test = await response.json();
}
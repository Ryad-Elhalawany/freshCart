"use server"

import { getUserToken } from "@/app/myUtil";

export async function handleAddAddress(data: object) {

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/addresses`, {
        method: 'POST',
        headers: {
            token: (await getUserToken() as string),
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const res = await response.json();
    return res
}
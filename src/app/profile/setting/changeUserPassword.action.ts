"use server"

import { getUserToken } from "@/app/myUtil";

export async function handleChangePassword(data: object) {

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/users/changeMyPassword`, {
        method: 'PUT',
        headers: {
            token: (await getUserToken() as string),
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const res = await response.json();
    return res
}
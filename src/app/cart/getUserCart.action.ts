"use server"

import { revalidatePath } from "next/cache";
import { getUserToken } from "@/app/myUtil";

export async function getUserCart() {

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/cart`, {
            method: 'GET',
            headers: {
                token: (await getUserToken() as string),
            }
        });

        const data = await response.json();
        return data

    } catch (error) {
        console.log(error)
    }
}
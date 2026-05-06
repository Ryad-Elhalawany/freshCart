"use server";

import { revalidatePath } from "next/cache";

export async function handleGetAllProducts() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/products`)
        const data = await response.json()
        return data.data
    } catch (error: any) {
        console.log(error.message)
    }
}

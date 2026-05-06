"use server"

import { getUserToken } from "@/app/myUtil";

export async function getUserWishlist() {

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/wishlist`, {
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
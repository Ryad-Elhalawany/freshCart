"use server"

export default async function handleUserRegister(userData: {}) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/signup`, {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    const data = await response.json();
    return data.message
}

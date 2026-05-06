"use server"

export async function handleGetSpecificBrand({ id }: { id: string }) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/brands/${id}`);
    if (!response.ok) throw new Error(`Failed to fetch brand: ${response.status}`);
    return response.json();
}
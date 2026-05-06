"use server"

export async function handleGetSpecificSubCategory({ id }: { id: string }) {

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/subcategories/${id}`);
        const data = await response.json();

        return data

    } catch (error) {
        console.log(error)
    }
}
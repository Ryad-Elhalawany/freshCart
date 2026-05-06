"use server"

export async function handleGetAllSubCategoriesOnCategory({ id }: { id: string }) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/categories/${id}/subcategories`);
    if (!response.ok) throw new Error(`Failed to fetch subcategories: ${response.status}`);
    return response.json();
}
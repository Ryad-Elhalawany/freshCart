import BrandCard from "../BrandCard/BrandCard"


export default async function AllBrands() {

    async function AllBrands() {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/brands`)
        const data = await response.json()
        return data.data
    }

    const productList = await AllBrands()
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
            {productList.map((e: any) => <BrandCard key={e._id} name={e.name} image={e.image} id={e._id} />)}
        </div>
    )
}

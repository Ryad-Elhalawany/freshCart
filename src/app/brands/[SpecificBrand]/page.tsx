import PageTitle from "@/components/PageTitle/PageTitle"
import { handleGetSpecificBrand } from "./getSpecificBrand.action"
import Image from "next/image"
import { Box, Filter, Tags, X } from "lucide-react"
import Link from "next/link"
import { handleGetAllProducts } from "@/components/AllProducts/getAllProducts.action"
import ProductCard from "@/components/ProductCard/ProductCard"

export default async function page({ params }: { params: Promise<{ SpecificBrand: string }> }) {
    const { SpecificBrand } = await params
    const allProducts = await handleGetAllProducts()

    const { data: { _id, name, slug, image } } = await handleGetSpecificBrand({ id: SpecificBrand })
    const filteredCards = allProducts.filter((e: any) => e.brand.slug === slug)
    return (
        <>
            <PageTitle breadCrumb={`${name}`} pageTitle={`${name}`} titleDescription={`Shop ${name} products`} titleIcon={<Image src={image} alt={name} width={40} height={40} />} pageBackground="bg-green-600" />
            <div className="container mx-auto px-4 py-8">
                <div className="mb-6 flex items-center gap-3 flex-wrap">
                    <span className="flex items-center gap-2 text-sm text-gray-600">
                        <Filter size={10} />
                        Active Filters:
                    </span>
                    <Link className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-medium hover:bg-violet-200 transition-colors" href="/products">
                        <Tags size={15} />
                        {name}
                        <X size={15} />
                    </Link>
                    <Link className="text-sm text-gray-500 hover:text-gray-700 underline" href='/products'>Clear all</Link>
                </div>
                <div className="mb-6 text-sm text-gray-500">Showing {filteredCards.length} products</div>
                {filteredCards.length === 0 ?
                    <div className="text-center py-20">
                        <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">
                            <Box size={30} className="text-gray-400" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">No Products Found</h3>
                        <p className="text-gray-500 mb-6">No products match your current filters.</p>
                        <Link href='/products' className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors">View All Products</Link>
                    </div>
                    :
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                        {filteredCards.map((e: any) => <ProductCard key={e._id} prod={e} />)}
                    </div>
                }
            </div>
        </>
    )
}
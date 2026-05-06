import PageTitle from "@/components/PageTitle/PageTitle"
import { Box, Filter, FolderOpen, Tags, Truck, X } from "lucide-react"
import Link from "next/link"
import { handleGetSpecificSubCategory } from "./getSpecificSubCategory.action"

export default async function page({ params }: { params: Promise<{ sub: string }> }) {
    const { sub } = await params

    const { data: { name, slug, _id } } = await handleGetSpecificSubCategory({ id: sub })

    return (
        <>
            <PageTitle breadCrumb={name} pageTitle={name} titleDescription={`Browse ${name} products`} titleIcon={<FolderOpen />} pageBackground="bg-green-600" />
            <div className="container mx-auto px-4 py-8">
                <div className="mb-6 flex items-center gap-3 flex-wrap">
                    <span className="flex items-center gap-2 text-sm text-gray-600">
                        <Filter size={10} />
                        Active Filters:
                    </span>
                    <Link className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-medium hover:bg-green-200 transition-colors" href="/products">
                        <FolderOpen size={15} />
                        {name}
                        <X size={15} />
                    </Link>
                    <Link className="text-sm text-gray-500 hover:text-gray-700 underline" href='/products'>Clear all</Link>
                </div>
                <div className="mb-6 text-sm text-gray-500">Showing 0 products</div>
                <div className="text-center py-20">
                    <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">
                        <Box size={30} className="text-gray-400" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">No Products Found</h3>
                    <p className="text-gray-500 mb-6">No products match your current filters.</p>
                    <Link href='/products' className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors">View All Products</Link>
                </div>

            </div>
        </>
    )
}
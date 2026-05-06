import PageTitle from "@/components/PageTitle/PageTitle"
import { FolderOpen, MoveLeft, Truck } from "lucide-react"
import Link from "next/link"
import { handleGetSpecificCategory } from "./getSpecificCategory.action"
import Image from "next/image"
import { handleGetAllSubCategoriesOnCategory } from "./getAllSubCategoriesOnCategory.action"
import SpecificCategoryCard from "@/components/SpecificCategoryCard/SpecificCategoryCard"

export default async function page({ params }: { params: Promise<{ specificCategory: string }> }) {
    const { specificCategory } = await params
    const { data: { name, slug, image, _id } } = await handleGetSpecificCategory({ id: specificCategory })
    const { data } = await handleGetAllSubCategoriesOnCategory({ id: specificCategory })
    return (
        <>
            <div className="min-h-screen">
                <PageTitle breadCrumb={`${name}`} pageTitle={`${name}`} titleDescription='Choose a subcategory to browse products' titleIcon={<Image src={image} alt={name} width={40} height={40} />} pageBackground="bg-green-600" />
                <div className="container mx-auto px-4 py-10">
                    <Link href='/categories' className="inline-flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors mb-6"><MoveLeft /> Back to Categories </Link>
                    {data.length === 0 ?
                        <div className="text-center py-20">
                            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">
                                <FolderOpen className="text-3xl text-gray-400" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">No Subcategories Found</h3>
                            <p className="text-gray-500 mb-6">This category doesn't have any subcategories yet.</p>
                            <Link href='/products' className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors">View All Products</Link>
                        </div>
                        :
                        <>
                            <div className="mb-6">
                                <h2 className="text-lg font-bold text-gray-900">{data.length} Subcategories in {name}</h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                                {data.map((e: any) => <SpecificCategoryCard key={e._id} id={e._id} name={e.name} />)}
                            </div>
                        </>
                    }
                </div >
            </div>

        </>
    )
}

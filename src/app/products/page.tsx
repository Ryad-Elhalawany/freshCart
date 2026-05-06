import AllProducts from '@/components/AllProducts/AllProducts'
import PageTitle from '@/components/PageTitle/PageTitle'
import { Box } from 'lucide-react'

export default function page() {
    return (
        <>
            <PageTitle breadCrumb="All Products" pageTitle="All Products" titleDescription="Explore our complete product collection" pageBackground="bg-green-600" titleIcon={<Box />} />
            <div className="px-4 py-8">
                <div className="mb-6 text-sm text-gray-500">Showing 40 products</div>
                <AllProducts />
            </div>
        </>
    )
}

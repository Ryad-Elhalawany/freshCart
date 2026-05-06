import GetAllCategories from '@/components/GetAllCategories/GetAllCategories'
import PageTitle from '@/components/PageTitle/PageTitle'
import { Layers } from 'lucide-react'

export default function page() {
    return (
        <>
            <PageTitle breadCrumb="Categories" titleIcon={<Layers />} pageTitle="All Categories" titleDescription="Browse our wide range of product categories" pageBackground="bg-green-600" />
            <div className="container mx-auto py-10 px-4">
                <GetAllCategories />
            </div>
        </>
    )
}

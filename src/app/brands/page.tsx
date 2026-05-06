import AllBrands from "@/components/AllBrands/AllBrands";
import PageTitle from "@/components/PageTitle/PageTitle";
import { Tags } from "lucide-react";

export default function page() {
    return (
        <>
            <PageTitle breadCrumb="Brands" pageTitle="Top Brands" titleDescription="Shop from your favorite brands" titleIcon={<Tags size={30} />} pageBackground="bg-violet-500" />
            <div className="container mx-auto px-4 py-10">
                <AllBrands />
            </div>
        </>
    )
}

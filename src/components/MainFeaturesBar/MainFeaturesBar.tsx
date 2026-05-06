import React from 'react'
import FeaturesBarCard from '../FeaturesBarCard/FeaturesBarCard'
import { Headset, RotateCcw, ShieldCheck, Truck } from 'lucide-react'

export default function MainFeaturesBar() {
    return (
        <div className="p-8 bg-gray-50" >
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-4">
                <FeaturesBarCard CardIcon={Truck} CardTitle="Free Shipping" CardDescription="On orders over 500 EGP" IconStyle="text-blue-600" CardStyle='rounded-[12px] p-4 bg-white shadow hover:shadow-lg duration-200' IconBackgroundStyle='rounded-full bg-[#FEF2F2]' />
                <FeaturesBarCard CardIcon={ShieldCheck} CardTitle="Secure Payment" CardDescription="100% secure checkout" IconStyle="text-green-600" CardStyle='rounded-[12px] p-4 bg-white shadow hover:shadow-lg duration-200' IconBackgroundStyle='rounded-full bg-[#ECFDF5]' />
                <FeaturesBarCard CardIcon={RotateCcw} CardTitle="Easy Returns" CardDescription="14-day return policy" IconStyle="text-orange-600" CardStyle='rounded-[12px] p-4 bg-white shadow hover:shadow-lg duration-200' IconBackgroundStyle='rounded-full bg-[#F3F4F6]' />
                <FeaturesBarCard CardIcon={Headset} CardTitle="24/7 Support" CardDescription="Contact us anytime" IconStyle="text-violet-600" CardStyle='rounded-[12px] p-4 bg-white shadow hover:shadow-lg duration-200' IconBackgroundStyle='rounded-full bg-[#F9FAFB]' />
            </div>
        </div >
    )
}

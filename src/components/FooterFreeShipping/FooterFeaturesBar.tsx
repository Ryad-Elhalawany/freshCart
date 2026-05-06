import FeaturesBarCard from "@/components/FeaturesBarCard/FeaturesBarCard";
import { Headset, RotateCcw, ShieldCheck, Truck } from 'lucide-react';

export default function FooterFeaturesBar() {
    return (
        <div className="bg-green-50 py-6 px-4" >
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-6">
                <FeaturesBarCard IconBackgroundStyle="rounded-[12px] bg-[#DCFCE7]" CardIcon={Truck} CardTitle="Free Shipping" CardDescription="On orders over 500 EGP" IconStyle="text-green-600" />
                <FeaturesBarCard IconBackgroundStyle="rounded-[12px] bg-[#DCFCE7]" CardIcon={RotateCcw} CardTitle="Easy Returns" CardDescription="14-day return policy" IconStyle="text-green-600" />
                <FeaturesBarCard IconBackgroundStyle="rounded-[12px] bg-[#DCFCE7]" CardIcon={ShieldCheck} CardTitle="Secure Payment" CardDescription="100% secure checkout" IconStyle="text-green-600" />
                <FeaturesBarCard IconBackgroundStyle="rounded-[12px] bg-[#DCFCE7]" CardIcon={Headset} CardTitle="24/7 Support" CardDescription="Contact us anytime" IconStyle="text-green-600" />
            </div>
        </div >
    )
}

import AddAddress from "@/components/AddAddress/AddAddress";
import { LocationEdit, Phone, Plus, Home, Pen, Trash } from "lucide-react";
import { getUserAddresses } from "./getUserAddresses.action";
import AddressCard from "@/components/AddressCard/AddressCard";

export const dynamic = "force-dynamic";

export default async function page() {

    const { data } = await getUserAddresses()

    return <>
        <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-xl font-bold text-gray-900">My Addresses</h2>
                    <p className="text-gray-500 text-sm mt-1">Manage your saved delivery addresses</p>
                </div>
                <AddAddress><Plus />Add Address</AddAddress>
            </div>
            {data?.length > 0 ?
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data.map((e: any) => <AddressCard key={e._id} id={e._id} name={e.name} details={e.details} phone={e.phone} city={e.city} />)}
                </div>
                :
                <>
                    <div className="bg-white rounded-3xl border border-gray-100 p-12 text-center">
                        <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">
                            <LocationEdit />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">No Addresses Yet</h3>
                        <p className="text-gray-500 mb-6 max-w-sm mx-auto">Add your first delivery address to make checkout faster and easier.</p>
                        <AddAddress><Plus /> Add Your First Address</AddAddress>
                    </div>
                </>
            }


        </div>

    </>
}

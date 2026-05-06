"use client"

import { handleRemoveUserAddress } from "@/app/profile/addresses/removeUserAddress";
import { LocationEdit, Phone, Plus, Home, Pen, Trash } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AddressCard({ id, name, details, phone, city }: { id: string, name: string, details: string, phone: number, city: string }) {
    const myRouter = useRouter()

    async function handleDelete() {
        const confirmDelete = confirm("Are you sure you want to delete this address?");

        if (confirmDelete) {
            await handleRemoveUserAddress(id)
            myRouter.refresh()
        }
    }


    return (
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md hover:border-green-100 transition-all duration-200 group">
            <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                    <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center shrink-0 group-hover:bg-green-100 transition-colors">
                        <LocationEdit />
                    </div>

                    <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-gray-900 mb-1">{name}</h3>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{details}</p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1.5">
                                <Phone fill="gray" size={15} />
                                {phone}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Home size={15} />
                                {city}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button className="w-9 h-9 rounded-lg bg-gray-100 text-gray-600 hover:bg-green-100 hover:text-green-600 flex items-center justify-center transition-colors cursor-pointer">
                        <Pen size={20} />
                    </button>
                    <button onClick={handleDelete} className="w-9 h-9 rounded-lg bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600 flex items-center justify-center transition-colors disabled:opacity-50 cursor-pointer">
                        <Trash size={20} />
                    </button>
                </div>
            </div>
        </div>)
}

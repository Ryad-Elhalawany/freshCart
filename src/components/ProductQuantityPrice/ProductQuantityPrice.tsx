"use client"

import { useState } from "react"
import AppButton from "../shared/AppButton/AppButton"
import { Plus } from "lucide-react"

export default function ProductQuantityPrice({ price, available }: { price: number; available: number }) {
    const [count, setCount] = useState(1)

    return (
        <>
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-600">Quantity</label>
                <div className="flex items-center gap-4">
                    <div className="border-2 border-gray-100 rounded-[8px] flex items-center gap-2">
                        <AppButton disabled={count < 2} onClick={() => setCount(count - 1)} className="w-13 h-12 bg-transparent rounded-[8px] hover:bg-muted cursor-pointer">
                            <div className="bg-gray-700 w-3 h-0.5"></div>
                        </AppButton>
                        <span className="font-medium text-md">{count}</span>
                        <AppButton onClick={() => setCount(count + 1)} className="w-13 h-12 bg-transparent rounded-[8px] hover:bg-muted cursor-pointer">
                            <Plus className="text-gray-700 size-4" />
                        </AppButton>
                    </div>
                    <span className="text-gray-600 text-sm font-medium">{available} available</span>
                </div>
            </div>
            <div className="flex items-center justify-between bg-gray-50 rounded-[8px] p-4 mb-6">
                <span className="text-gray-600 font-medium">Total Price:</span>
                <span className="text-2xl font-bold text-green-600">{(price * count).toFixed(2)} EGP</span>
            </div>
        </>
    )
}

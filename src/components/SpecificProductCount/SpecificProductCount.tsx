"use client"

import { useState } from 'react'
import AppButton from '../shared/AppButton/AppButton'
import { Plus } from 'lucide-react'

export default function SpecificProductCount() {

    const [count, setCount] = useState(1)

    return (
        <div className="border-2 border-gray-100 rounded-[8px] flex items-center gap-2">
            <AppButton disabled={count < 2} onClick={() => setCount(count - 1)} className="w-13 h-12 bg-transparent rounded-[8px] hover:bg-muted cursor-pointer"><div className="bg-gray-700 w-3 h-0.5"></div></AppButton>
            <span className="font-medium text-md">{count}</span>
            <AppButton onClick={() => setCount(count + 1)} className="w-13 h-12 bg-transparent rounded-[8px] hover:bg-muted cursor-pointer"><Plus className="text-gray-700 size-4" /></AppButton>
        </div>
    )
}

"use client"

import { FolderOpen } from "lucide-react"
import Link from "next/link"

export default function SpecificCategoryCard({ name, id }: { name: string, id: string }) {
    return (
        <Link href={`/subCategory/${id}`} className="group bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:border-primary-200 transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
                <FolderOpen className="text-2xl text-green-600" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg group-hover:text-green-600 transition-colors mb-2">{name}</h3>
        </Link>
    )
}

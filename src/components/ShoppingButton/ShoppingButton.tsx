"use client"

import { MoveLeft } from "lucide-react"
import Link from "next/link"


export default function ShoppingButton() {
    return (
        <Link href='/products' className="text-gray-500 hover:text-primary-600 text-sm font-medium transition-colors flex items-center gap-2"> <MoveLeft /> Continue Shopping</Link>
    )
}

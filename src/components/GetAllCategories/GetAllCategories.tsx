"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';
import SectionTitle from './../SectionTitle/SectionTitle';
import { MoveRight, MoveRightIcon } from 'lucide-react';
import Image from 'next/image';

export default function GetAllCategories() {

    const [allCategories, setAllCategories] = useState([])

    async function getAllCategories() {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/categories`)
        const data = await response.json()
        setAllCategories(data.data)
    }

    useEffect(() => {
        getAllCategories()
    }, [])

    return (
        <div className='py-10 px-4'>
            <div className="container mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {allCategories.map((e: any) =>
                        <Link key={e._id} href={`/categories/${e._id}`} className='group flex flex-col items-center justify-center bg-white rounded-2xl border border-gray-100 p-4 sm:p-6 shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-300 hover:-translate-y-1'>
                            <div className="aspect-square size-40 rounded-xl overflow-hidden bg-gray-50 mb-4">
                                <Image src={e.image} width={80} height={80} className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' alt={e.name} />
                            </div>
                            <h3 className='font-bold text-gray-900 text-center group-hover:text-green-600 transition-colors'>{e.name}</h3>
                            <div className="flex justify-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-xs text-green-600 flex items-center gap-1">View Subcategories <MoveRightIcon size={10} /></span>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

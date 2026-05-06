"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';
import SectionTitle from './../SectionTitle/SectionTitle';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import { Skeleton } from '../ui/skeleton';

export default function HomeCategories() {

    const [allCategories, setAllCategories] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    async function getAllCategories() {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/categories`
            );
            const data = await response.json();
            setAllCategories(data.data);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getAllCategories();
    }, []);

    return (
        <div className='py-10 px-4'>
            <div className="container mx-auto">
                {/* Categories Title */}
                <div className="flex flex-col md:flex-row w-full items-center justify-between mb-8">
                    <div className='py-8 self-start md:self-auto'>
                        <SectionTitle BlackWord='Shop By' GreenWord='Category' />
                    </div>
                    <Link href='/categories' className='flex items-center gap-2 text-green-600 font-medium self-end md:self-auto'>
                        <span>View All Categories</span>
                        <MoveRight />
                    </Link>
                </div>

                {/* CategoriesCard */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {isLoading ? Array.from({ length: 10 }).map((_, i) => (<div key={i} className="p-4 rounded-[8px] shadow flex flex-col items-center justify-center gap-3">
                        <Skeleton className="w-20 h-20 rounded-full" />
                        <Skeleton className="h-4 w-16" />
                    </div>))
                        : allCategories.map((e: any) => <Link key={e._id} href={`/categories/${e._id}`} className='p-4 rounded-[8px] shadow flex flex-col items-center justify-center gap-3 hover:shadow-md duration-200'>
                            <Image src={e.image} width={80} height={80} className='w-20 h-20 rounded-full object-cover' alt={e.name} />
                            <h3 className='font-medium text-main-color'>{e.name}</h3>
                        </Link>
                        )}
                </div>
            </div>
        </div>
    )

}

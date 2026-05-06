"use client"

import { useState, useEffect } from "react"
import ProductCard from "../ProductCard/ProductCard"
import { handleGetAllProducts } from "./getAllProducts.action"
import { getUserWishlist } from "@/app/wishlist/getUserWishlist.action"
import { Skeleton } from "../ui/skeleton";

export default function AllProducts() {
    const [productsList, setProductsList] = useState<any[]>([]);
    const [wishlistIds, setWishlistIds] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    async function fetchAll() {
        try {
            const [products, wishlist] = await Promise.all([
                handleGetAllProducts(),
                getUserWishlist(),
            ]);
            setProductsList(products || []);
            setWishlistIds((wishlist?.data || []).map((e: any) => e.id));
        } finally {
            setIsLoading(false);
        }
    }

    function refreshWishlist() {
        getUserWishlist().then((wishlist) => {
            setWishlistIds((wishlist?.data || []).map((e: any) => e.id));
        });
    }

    useEffect(() => {
        fetchAll()
    }, [])

    return (
        <div id="All-Products">
            <div className="container mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:gap-6 p-4">

                {isLoading
                    ? Array.from({ length: 40 }).map((_, i) => (
                        <div
                            key={i}
                            className="mx-auto flex flex-col border border-gray-200 rounded-lg overflow-hidden bg-white w-full p-3 space-y-3"
                        >
                            <Skeleton className="w-full h-37.5 rounded-md" />
                            <Skeleton className="h-3 w-1/3" />
                            <Skeleton className="h-4 w-2/3" />

                            <div className="flex gap-2">
                                <Skeleton className="h-4 w-20" />
                                <Skeleton className="h-4 w-10" />
                            </div>

                            <div className="flex justify-between items-center">
                                <Skeleton className="h-5 w-20" />
                                <Skeleton className="h-10 w-10 rounded-full" />
                            </div>
                        </div>
                    ))
                    : productsList.map((e: any) => (
                        <ProductCard key={e._id} prod={e} wishlistIds={wishlistIds} refreshWishlist={refreshWishlist} />
                    ))}
            </div>
        </div>
    );
}

"use client"

import { Eye, Heart, Plus, RefreshCcw, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AddToCart from "../AddToCart/AddToCart";
import AddToWishlist from "../AddToWishlist/AddToWishlist";
import { ProductCardSkeleton } from "../ProductCardSkeleton/ProductCardSkeleton";
import RemoveFromWishlist from "../RemoveFromWishlist/RemoveFromWishlist";

interface ProductCardProps {
    prod: any;
    wishlistIds?: string[];
    refreshWishlist?: () => void;
}

export default function ProductCard({ prod, wishlistIds, refreshWishlist }: ProductCardProps) {
    const { category, id, imageCover, price, ratingsAverage, ratingsQuantity, title, priceAfterDiscount } = prod
    const isInWishlist = wishlistIds?.some((wId) => wId === id);

    return prod ?
        <div className="Product-Card mx-auto flex flex-col border border-gray-200 rounded-lg overflow-hidden bg-white w-full hover:-translate-y-1.5 hover:shadow-xl duration-200 relative" >

            <div className="absolute inset-e-5 top-5 flex flex-col gap-2">
                {isInWishlist
                    ? <RemoveFromWishlist refreshWishlist={refreshWishlist} id={id} className="bg-white h-8 w-8 rounded-full flex items-center justify-center transition shadow-sm text-red-500 hover:text-red-600 cursor-pointer"><Heart fill="red" className="text-red-600" /></RemoveFromWishlist>
                    : <AddToWishlist refreshWishlist={refreshWishlist} id={id} className="size-8 hover:bg-white shadow bg-white rounded-full flex items-center justify-center cursor-pointer group">
                        <Heart className="size-5 text-main-color group-hover:text-red-600" />
                    </AddToWishlist>
                }
                <button className="size-8 shadow bg-white rounded-full flex items-center justify-center cursor-pointer group">
                    <RefreshCcw className="size-5 text-main-color group-hover:text-green-600" />
                </button>
                <Link href={`/ProductDetails/${id}`} className="size-8 shadow bg-white rounded-full flex items-center justify-center cursor-pointer group">
                    <Eye className="size-5 text-main-color group-hover:text-green-600" />
                </Link>
            </div>

            {/* Product Card image */}
            <div className='product-image mx-auto'>
                <Image src={imageCover} width={150} height={150} alt="" className="w-full h-full object-cover" />
            </div>‍
            {/* Product Card image */}


            {/* Product Card details */}
            <div className='product-details p-4'>
                <div className='text-[12px]'>{category.name}</div>
                <Link href={`/ProductDetails/${id}`} className='text-main-color font-medium'>{title.split(' ', 6).join(' ')}</Link>
                <div className="flex items-center gap-3 mb-3 mt-1">
                    <div className="flex justify-start items-center gap-1">
                        {Array.from({ length: Math.floor(ratingsAverage) }).map((e, i) => <Star key={i} color="#FCC800" size={20} fill="#FCC800" />)}
                        {Array.from({ length: 5 - Math.floor(ratingsAverage) }).map((e, i) => <Star key={i} color="#FCC800" size={20} />)}
                    </div>
                    <span className="text-color-main text-xs">{ratingsAverage} ({ratingsQuantity})</span>
                </div>
                <div className="flex justify-between items-center">
                    {priceAfterDiscount ? <div className="font-bold text-lg text-green-600 flex gap-3 items-center"><span>{priceAfterDiscount} EGP</span><span className="line-through text-sm text-gray-400">{price} EGP</span></div> : <div className="font-bold text-lg">{price} EGP</div>}
                    <AddToCart className='size-10 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-800 cursor-pointer' id={id}><Plus className="size-5" /> </AddToCart>
                </div>
            </div>
            {/* Product Card details */}

            {/* discount logo */}
            {priceAfterDiscount && <div className="absolute top-3 left-3 py-1 px-2 bg-red-500 text-xs text-white rounded-sm font-medium">{(((priceAfterDiscount / price) * 100) - 100).toFixed(0)}%</div>}
            {/* discount logo */}
        </div >
        :
        <ProductCardSkeleton />
}

"use client"

import Image from 'next/image'
import Link from 'next/link'
import AddToCart from '../AddToCart/AddToCart'
import { Check, ShoppingCart, ShoppingCartIcon, Trash } from 'lucide-react'
import RemoveFromWishlist from '../RemoveFromWishlist/RemoveFromWishlist'
import { useEffect, useState } from 'react'
import { getUserCart } from '@/app/cart/getUserCart.action'

export default function WishlistCard({ price, priceAfterDiscount, id, name, category, image }: { price: number, priceAfterDiscount: number, id: string, name: string, category: string, image: string }) {

    const [userCart, setUserCart] = useState([])

    async function getCart() {
        const { data: { products } } = await getUserCart()
        setUserCart(products)
    }

    useEffect(() => {
        getCart()
    }, [])

    const isInCart = userCart.some((e: any) => e.product._id === id);

    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 md:px-6 md:py-5 items-center hover:bg-gray-50/50 transition-colors">
            <div className="md:col-span-6 flex items-center gap-4">
                <Link className="w-20 h-20 rounded-xl bg-gray-50 border border-gray-100 overflow-hidden shrink-0" href={`/ProductDetails/${id}`}>
                    <Image src={image} alt={name} width={200} height={200} className="w-full h-full object-contain p-2" />
                </Link>
                <div className="min-w-0">
                    <Link href={`/ProductDetails/${id}`} className="font-medium text-gray-900 hover:text-green-600 transition-colors line-clamp-2" >{name}</Link>
                    <p className="text-sm text-gray-400 mt-1">{category}</p>
                </div>
            </div>
            <div className="md:col-span-2 flex md:justify-center items-center gap-2">
                <span className="md:hidden text-sm text-gray-500">Price :</span>
                {priceAfterDiscount ?
                    <div className="text-right md:text-center">
                        <div className="font-semibold text-gray-900">{price} EGP</div>
                        <div className="text-sm text-gray-400 line-through">{priceAfterDiscount} EGP</div>
                    </div>
                    :
                    <div className="text-right md:text-center">
                        <span className="font-semibold text-gray-900">{price} EGP</span>
                    </div>
                }
            </div>
            <div className="md:col-span-2 flex md:justify-center">
                <span className="md:hidden text-sm text-gray-500 mr-2">Status</span>
                {isInCart ?
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700"> <ShoppingCartIcon size={10} /> In Cart</span>
                    :
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>In Stock</span>
                }
            </div>
            <div className="md:col-span-2 flex items-center gap-2 md:justify-center">
                {isInCart ?
                    <Link href='/cart' className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all">
                        <Check className="text-green-600" />
                        View Cart
                    </Link>
                    :
                    <AddToCart onAdd={getCart} className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all bg-green-600 text-white hover:bg-green-700 cursor-pointer" id={id}>
                        <ShoppingCart className="w-5 h-4" />
                        <span className="font-medium">Add to Cart</span>
                    </AddToCart>
                }
                <RemoveFromWishlist id={id} className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all disabled:opacity-50 cursor-pointer"><Trash size={18} /></RemoveFromWishlist>
            </div>
        </div>
    )
}

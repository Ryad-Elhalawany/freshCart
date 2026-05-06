import RemoveProductFromCart from '@/components/RemoveProductFromCart/RemoveProductFromCart'
import { Check, Minus, Plus, Trash } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import UpdateCartCount from '../UpdateCartCount/UpdateCartCount'

export default function CartItems({ product }: { product: any }) {

    const { count, price, product: { title, _id, slug, quantity, imageCover, category, brand, ratingAverage } } = product


    return (
        <div className="relative bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300">
            <div className="p-4 sm:p-5">
                <div className="flex gap-4 sm:gap-6">
                    <Link href={`/ProductDetails/${_id}`} className="relative shrink-0 group">
                        <div className='w-28 h-28 sm:w-32 sm:h-32 rounded-xl bg-linear-to-br from-gray-50 via-white to-gray-100 p-3 border border-gray-100 overflow-hidden'>
                            <Image src={imageCover} width={220} height={220} alt={title} className='w-full h-full object-contain transition-transform duration-300 group-hover:scale-110' />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-green-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                            <Check size={8} />
                            In Stock
                        </div>
                    </Link>
                    <div className="flex-1 min-w-0 flex flex-col">
                        <div className="mb-3">
                            <Link href={`/ProductDetails/${_id}`} className="group/title">
                                <h3 className='font-semibold text-gray-900 group-hover/title:text-green-600 transition-colors leading-relaxed text-base sm:text-lg'>{title}</h3>
                            </Link>
                            <span className="inline-block px-2.5 py-1 bg-linear-to-r from-green-50 to-emerald-50 text-green-700 text-xs font-medium rounded-full mt-2">{category.name}</span>
                        </div>
                        <div className="mb-4">
                            <div className="flex items-baseline gap-2">
                                <span className="text-green-600 font-bold text-lg">{price} EGP</span>
                                <span className='text-xs text-gray-400'>per unit</span>
                            </div>
                        </div>
                        <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center">
                                <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-200">
                                    <UpdateCartCount id={_id} count={count - 1} disabled={count < 2} className='h-8 w-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none transition-all cursor-pointer'><Minus /></UpdateCartCount>
                                    <span className='w-12 text-center font-bold text-gray-900'>{count}</span>
                                    <UpdateCartCount id={_id} count={count + 1} className='h-8 w-8 rounded-lg bg-green-600 shadow-sm shadow-green-600/30 flex items-center justify-center text-white hover:bg-green-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer'>
                                        <Plus />
                                    </UpdateCartCount>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-right">
                                    <p className="text-xs text-gray-400 mb-0 5">Total</p>
                                    <p className='text-xl font-bold text-gray-900'>{count * price} <span className='text-sm font-medium text-gray-400'>EGP</span></p>
                                </div>
                                <RemoveProductFromCart id={_id} title={title} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

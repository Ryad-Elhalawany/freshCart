export const dynamic = 'force-dynamic';

import Link from "next/link"
import { getUserCart } from "./getUserCart.action"
import { Box, Lock, MoveLeft, MoveRight, ShieldAlert, ShoppingBag, ShoppingCart, Tag, Trash, Truck } from "lucide-react"
import CartItems from '../../components/CartItems/CartItems';
import ClearUserCart from "../../components/ClearUserCart/ClearUserCart";
import ShoppingButton from "@/components/ShoppingButton/ShoppingButton";

export default async function page() {

    const cart = await getUserCart();

    const numOfCartItems = cart?.numOfCartItems ?? 0;
    const products = cart?.data?.products ?? [];
    const totalCartPrice = cart?.data?.totalCartPrice ?? 0;

    const shippingFees = 50
    const startFreeShipping = 500
    const progressFreeShipping = (totalCartPrice / startFreeShipping) * 100

    return (
        <>
            {numOfCartItems > 0 ?
                <div className="bg-gray-50 min-h-screen py-8">
                    <div className="container mx-auto px-4">
                        <div className="mb-8">
                            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                                <Link href='/' className="hover:text-green-600 transition">Home</Link>
                                <span>/</span>
                                <div className="text-gray-900 font-medium">Shopping Cart</div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                                        <div className="bg-green-600 text-white w-12 h-12 rounded-xl flex items-center justify-center">
                                            <ShoppingCart />
                                        </div>
                                        Shopping Cart
                                    </h1>
                                    <p className="text-gray-500 mt-2">
                                        You have <span className="font-semibold text-green-600">{numOfCartItems} {numOfCartItems > 1 ? 'items' : 'item'}</span> in your cart
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2">
                                <div className="space-y-4">
                                    {products.map((e: any) => <CartItems key={e._id} product={e} />)}
                                </div>
                                <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
                                    <Link className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center gap-2" href="/"><MoveLeft /> continue shopping</Link>
                                    <ClearUserCart />
                                </div>
                            </div>


                            <div className="lg:col-span-1">
                                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden sticky top-24 shadow-sm">
                                    <div className="bg-linear-to-r from-green-600 to-green-700 px-6 py-4">
                                        <h2 className="text-lg font-bold text-white flex items-center gap-2">
                                            <ShoppingBag size={20} />
                                            Order Summary
                                        </h2>
                                        <p className="text-green-100 text-sm mt-1">{numOfCartItems} items in your cart</p>
                                    </div>
                                    <div className="p-6 space-y-5">
                                        {totalCartPrice < startFreeShipping ?
                                            <div className="bg-linear-to-r from-orange-50 to-amber-50 rounded-xl p-4">
                                                <div className="flex items-center gap-2 mb-2">

                                                    <Truck color="orange" />
                                                    <span className="text-sm font-medium text-gray-700">Add {startFreeShipping - totalCartPrice} EGP for free shipping</span>

                                                </div>
                                                <div className="h-2 bg-orange-100 rounded-full overflow-hidden">
                                                    <div className='h-full bg-linear-to-r from-orange-400 to-amber-400 rounded-full transition-all duration-500' style={{ width: `${progressFreeShipping}%` }}></div>
                                                </div>
                                            </div>
                                            :
                                            <div className="bg-linear-to-r from-green-50 to-emerald-50 rounded-xl p-4 flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                                    <Truck color="green" />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-green-700">Free Shipping!</p>
                                                    <p className="text-sm text-green-600">You qualify for free delivery</p>
                                                </div>
                                            </div>
                                        }
                                        <div className="space-y-3">
                                            <div className="flex justify-between text-gray-600">
                                                <span>Subtotal</span>
                                                <span className="font-medium text-gray-900">{totalCartPrice} EGP</span>
                                            </div>
                                            <div className="flex justify-between text-gray-600">
                                                <span>Shipping</span>
                                                {totalCartPrice < startFreeShipping ? <span className="font-medium text-gray-900">{shippingFees} EGP</span> : <span className="font-medium text-green-600">FREE</span>}
                                            </div>
                                            <div className="border-t border-dashed border-gray-200 pt-3 mt-3">
                                                <div className="flex justify-between items-baseline">
                                                    <span className="text-gray-900 font-semibold">Total</span>
                                                    <div className="text-right">
                                                        <span className="text-2xl font-bold text-gray-900">{totalCartPrice < startFreeShipping ? totalCartPrice + shippingFees : totalCartPrice}</span>
                                                        <span className="text-sm text-gray-500 ml-1">EGP</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <button className="w-full cursor-pointer flex items-center justify-center gap-2 py-3 border border-dashed border-gray-300 rounded-xl text-gray-600 hover:border-green-400 hover:text-green-600 hover:bg-green-50/50 transition-all">
                                            <Tag />
                                            <span className="text-sm font-medium">Apply Promo Code</span>
                                        </button>
                                        <button className="w-full cursor-pointer bg-linear-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all flex items-center justify-center gap-3 shadow-lg shadow-green-600/20 active:scale-[0.98]">
                                            <Lock />
                                            <span>Secure Checkout</span>
                                        </button>
                                        <div className="flex items-center justify-center gap-4 py-2">
                                            <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                                <ShieldAlert color="green" size={15} />
                                                <span>Secure Payment</span>
                                            </div>
                                            <div className="w-px h-4 bg-gray-200"></div>
                                            <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                                <Truck color="blue" size={15} />
                                                <span>Fast Delivery</span>

                                            </div>
                                        </div>
                                        <ShoppingButton />
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
                : <div className="min-h-[60vh] flex items-center justify-center px-4">
                    <div className="max-w-md text-center">
                        <div className="relative mb-8">
                            <div className="w-32 h-32 rounded-full bg-linear-to-br from-gray-100 to-gray-50 flex items-center justify-center mx-auto">
                                <Box size={70} className="text-gray-300 " />
                            </div>
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-gray-100 rounded-full blur-md"></div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">Your cart is empty</h2>
                            <p className="text-gray-500 mb-8 leading-relaxed">Looks like you haven't added anything to your cart yet. <br /> Start exploring our products!</p>
                            <Link className="inline-flex items-center gap-2 bg-linear-to-r from-green-600 to-green-700 text-white py-3.5 px-8 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all shadow-lg shadow-green-600/20 active:scale-[0.98]" href="/">Start Shopping <MoveRight /></Link>
                            <div className="mt-12 pt-8 border-t border-gray-100">
                                <p className="text-sm text-gray-400 mb-4">Popular Categories</p>
                                <div className="flex flex-wrap justify-center gap-2">
                                    <Link className="px-4 py-2 bg-gray-50 hover:bg-green-50 hover:text-green-600 text-gray-600 rounded-full text-sm font-medium transition-colors" href="/categories">Electronics</Link>
                                    <Link className="px-4 py-2 bg-gray-50 hover:bg-green-50 hover:text-green-600 text-gray-600 rounded-full text-sm font-medium transition-colors" href="/categories">Fashion</Link>
                                    <Link className="px-4 py-2 bg-gray-50 hover:bg-green-50 hover:text-green-600 text-gray-600 rounded-full text-sm font-medium transition-colors" href="/categories">Home</Link>
                                    <Link className="px-4 py-2 bg-gray-50 hover:bg-green-50 hover:text-green-600 text-gray-600 rounded-full text-sm font-medium transition-colors" href="/categories">Beauty</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

import Image from 'next/image'
import React from 'react'
import logo from '@images/freshCart.svg'
import { CreditCard, Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react'
import Link from "next/link"
export default function Footer() {
    return (
        <div className="bg-gray-900 px-4">
            <div className="border-b border-[#1E2939] py-12">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-12">
                        {/* first part  */}
                        <div className="flex md:col-span-2 flex-col gap-6">
                            {/* logo */}
                            <div className='bg-white py-2 px-6 rounded-[8px] self-start'>
                                <Image src={logo} alt='freshCart Logo' />
                            </div>
                            {/* logo */}
                            <p className='text-gray-400 font-medium text-sm'>FreshCart is your one-stop destination for quality products. From fashion to electronics, we bring you the best brands at competitive prices with a seamless shopping experience.</p>
                            <div className='flex flex-col gap-3'>
                                <a href='tel:+18001234567' className='flex gap-3 items-center'>
                                    <Phone fill='currentColor' className='size-4 text-green-600' />
                                    <span className='text-sm text-gray-400'>+1 (800) 123-4567</span>
                                </a>
                                <a href='mailto:support@freshcart.com' className='flex gap-3 items-center'>
                                    <Mail className='size-4 text-green-600' />
                                    <span className='text-sm text-gray-400'>support@freshcart.com</span>
                                </a>
                                <span className='flex gap-3 items-center'>
                                    <MapPin className='size-4 text-green-600' />
                                    <span className='text-sm text-gray-400'>123 Commerce Street, New York, NY 10001</span>
                                </span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <a href="#" className='size-10 hover:bg-green-600 hover:text-white duration-200 bg-gray-800 text-gray-400 flex items-center justify-center rounded-full'><Facebook className='size-5' /></a>
                                <a href="#" className='size-10 hover:bg-green-600 hover:text-white duration-200 bg-gray-800 text-gray-400 flex items-center justify-center rounded-full'><Twitter className='size-5' /></a>
                                <a href="#" className='size-10 hover:bg-green-600 hover:text-white duration-200 bg-gray-800 text-gray-400 flex items-center justify-center rounded-full'><Instagram className='size-5' /></a>
                                <a href="#" className='size-10 hover:bg-green-600 hover:text-white duration-200 bg-gray-800 text-gray-400 flex items-center justify-center rounded-full'><Youtube className='size-5' /></a>
                            </div>
                        </div>
                        {/* first part  */}

                        {/* second part */}
                        <div className='flex flex-col'>
                            <h3 className='font-semibold text-white text-lg mb-5'>Shop</h3>
                            <div className='flex flex-col gap-3'>
                                <Link href='/products' className='text-gray-400 text-sm hover:text-green-400 duration-200'>All Products</Link>
                                <Link href='/categories' className='text-gray-400 text-sm hover:text-green-400 duration-200'>Categories</Link>
                                <Link href='/brands' className='text-gray-400 text-sm hover:text-green-400 duration-200'>Brands</Link>
                                <Link href='/categories/6439d2d167d9aa4ca970649f' className='text-gray-400 text-sm hover:text-green-400 duration-200'>Electronics</Link>
                                <Link href='/categories/6439d5b90049ad0b52b90048' className='text-gray-400 text-sm hover:text-green-400 duration-200'>Men's Fashion</Link>
                                <Link href='/categories/6439d58a0049ad0b52b9003f' className='text-gray-400 text-sm hover:text-green-400 duration-200'>Women's Fashion</Link>
                            </div>
                        </div>
                        {/* second part */}

                        {/* third part */}
                        <div className='flex flex-col'>
                            <h3 className='font-semibold text-white text-lg mb-5'>Account</h3>
                            <div className='flex flex-col gap-3'>
                                <Link href='/profile' className='text-gray-400 text-sm hover:text-green-400 duration-200'>My Account</Link>
                                <Link href='' className='text-gray-400 text-sm hover:text-green-400 duration-200'>Order History</Link>
                                <Link href='/wishlist' className='text-gray-400 text-sm hover:text-green-400 duration-200'>Wishlist</Link>
                                <Link href='/cart' className='text-gray-400 text-sm hover:text-green-400 duration-200'>Shopping Cart</Link>
                                <Link href='/login' className='text-gray-400 text-sm hover:text-green-400 duration-200'>Sign In</Link>
                                <Link href='/register' className='text-gray-400 text-sm hover:text-green-400 duration-200'>Create Account</Link>
                            </div>
                        </div>
                        {/* third part */}

                        {/* 4th part */}
                        <div className='flex flex-col'>
                            <h3 className='font-semibold text-white text-lg mb-5'>Support</h3>
                            <div className='flex flex-col gap-3'>
                                <Link href='' className='text-gray-400 text-sm hover:text-green-400 duration-200'>Contact Us</Link>
                                <Link href='' className='text-gray-400 text-sm hover:text-green-400 duration-200'>Help Center</Link>
                                <Link href='' className='text-gray-400 text-sm hover:text-green-400 duration-200'>Shipping Info</Link>
                                <Link href='' className='text-gray-400 text-sm hover:text-green-400 duration-200'>Returns & Refunds</Link>
                                <Link href='' className='text-gray-400 text-sm hover:text-green-400 duration-200'>Track Order</Link>
                            </div>
                        </div>
                        {/* 4th part */}

                        {/* 5th part */}
                        <div className='flex flex-col'>
                            <h3 className='font-semibold text-white text-lg mb-5'>Legal</h3>
                            <div className='flex flex-col gap-3'>
                                <Link href='' className='text-gray-400 text-sm hover:text-green-400 duration-200'>Privacy Policy</Link>
                                <Link href='' className='text-gray-400 text-sm hover:text-green-400 duration-200'>Terms of Service</Link>
                                <Link href='' className='text-gray-400 text-sm hover:text-green-400 duration-200'>Cookie Policy</Link>
                            </div>
                        </div>
                        {/* 5th part */}
                    </div>
                </div>
            </div>

            {/* copyrights part */}
            <div className='flex md:flex-row gap-1 md:gap-0 flex-col justify-between items-center py-6 text-gray-400'>
                <p className='text-sm'>© 2026 FreshCart. All rights reserved.</p>
                <div className='flex items-center gap-4'>
                    <div className='flex items-center gap-2'>
                        <CreditCard className='w-4 h-3.5' />
                        <span className='text-sm'>Visa</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <CreditCard className='w-4 h-3.5' />
                        <span className='text-sm'>Mastercard</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <CreditCard className='w-4 h-3.5' />
                        <span className='text-sm'>PayPal</span>
                    </div>
                </div>
            </div>
            {/* copyrights part */}
        </div>
    )
}

"use client"

import { Gift, LogIn, Mail, Phone, Truck, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { UserPlus } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function FreeShipping() {

    const { data } = useSession()
    const MyRouter = useRouter()
    async function handleLogOut() {
        await signOut({ redirect: false })
        MyRouter.push('/login')
    }

    return (
        <div className="px-4 py-2.5 container mx-auto hidden lg:flex justify-between items-center border-b border-[#F3F4F6]">
            {/* left part start */}
            <div className='flex items-center gap-6'>
                {/* free shipping part */}
                <div className='flex items-center gap-2 font'>
                    <Truck fill='currentColor' size={14} className="text-[#16A34A]" />
                    <p className='text-main-color text-sm'>Free Shipping on Orders 500 EGP</p>
                </div>
                {/* free shipping part */}

                {/* New Arrival */}
                <div className='flex items-center gap-2 font'>
                    <Gift size={14} className="text-[#16A34A]" />
                    <p className='text-main-color text-sm'>New Arrivals Daily</p>
                </div>
                {/* New Arrival */}
            </div>

            {/* left part end */}

            {/* Right part */}
            <div className='flex items-center gap-6'>
                <div className='flex items-center gap-4'>
                    {/* links part */}
                    {/* Phone part */}
                    <a href='tel:+18001234567' className='flex gap-1.5 text-main-color items-center hover:text-green-600'>
                        <Phone fill='currentColor' className='w-3.5 h-3' />
                        <span className='text-sm'>+1 (800) 123-4567</span>
                    </a>
                    {/* Phone part */}
                    {/* email part */}
                    <a href='mailto:support@freshcart.com' className='flex gap-1.5 text-main-color items-center hover:text-green-600'>
                        <Mail className='w-3.5 h-3' />
                        <span className='text-sm'>support@freshcart.com</span>
                    </a>
                    {/* email part */}
                    {/* links part */}
                </div>
                <div className='w-px h-4 bg-[#E5E7EB]'></div>
                <div className='flex gap-4'>
                    {/* auth part */}
                    {/* login && profile */}
                    <Link href={data ? '/profile' : '/login'} className='flex items-center gap-1.5 text-main-color text-sm hover:text-green-600'>
                        <User className='w-4 h-3 font-medium' />
                        <span className='font-medium'>{data ? data?.user?.name : 'Sign in'}</span>
                    </Link>
                    {/* login && profile */}
                    {/* register && logout */}
                    {data ? <button onClick={() => handleLogOut()} className='flex items-center gap-1.5 text-main-color text-sm hover:text-red-600 cursor-pointer'>
                        <LogIn className='w-4 h-3' />
                        <span className='font-medium'>Sign Out</span>
                    </button> : <Link href='/register' className='flex items-center gap-1.5 text-main-color text-sm hover:text-green-600'>
                        <UserPlus fill='currentColor' className='w-4 h-3' />
                        <span className='font-medium'>Sign Up</span>
                    </Link>
                    }
                    {/* register && logout */}
                    {/* auth part */}
                </div>
            </div>
            {/* Right part */}

        </div >
    )
}

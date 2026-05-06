import logo from '@images/LoginIntroImage.png'
import { Clock, ShieldCheck, Truck } from 'lucide-react'
import Image from 'next/image'

export default function LoginIntro() {
    return (
        <div className="flex-col gap-6 text-center hidden lg:flex mx-auto container">
            <div className="relative h-96">
                <Image src={logo} fill className='object-cover rounded-[16px] shadow-lg' alt='Login Intro Image..' />
            </div>
            <div className='flex flex-col gap-4'>
                <h2 className='font-bold text-3xl text-gray-900'>FreshCart - Your One-Stop Shop for Fresh Products</h2>
                <p className='text-gray-600 text-lg font-medium'>Join thousands of happy customers who trust FreshCart for their daily grocery needs</p>
                <div className="flex justify-center items-center gap-8">
                    <div className="flex items-center gap-2 text-gray-600">
                        <Truck size={14} fill='currentColor' className='text-green-600' />
                        <span className="text-sm font-medium">Free Delivery</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <ShieldCheck size={14} className='text-green-600' />
                        <span className="text-sm font-medium">Secure Payment</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <Clock size={14} className='text-green-600' />
                        <span className="text-sm font-medium">24/7 Support</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

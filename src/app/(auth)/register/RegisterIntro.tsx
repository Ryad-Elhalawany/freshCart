import { ShieldCheck, Star, TruckElectric } from 'lucide-react'
import IntroImage from '@images/RegisterIntroImage.png'
import Image from 'next/image'

export default function RegisterIntro() {
    return (
        <div className="flex flex-col items-start gap-2 w-full">
            <h1 className='text-4xl font-bold text-main-color'>
                Welcome to <span className='text-green-600'>FreshCart</span>
            </h1>

            <p className='font-medium text-xl text-gray-700'>Join thousands of happy customers who enjoy fresh groceries
                delivered right to their doorstep.</p>

            <div className='py-6 flex flex-col gap-6'>
                {/* card */}
                <div className="flex gap-4">
                    {/* card image */}
                    <div className="size-12 rounded-full bg-green-200 flex items-center justify-center">
                        <Star className='text-green-600 size-5' fill='currentColor' />
                    </div>
                    {/* card content */}
                    <div className='flex flex-col'>
                        <h2 className='font-semibold text-lg text-main-color '>Premium Quality</h2>
                        <p className='font-medium'>Premium quality products sourced from trusted suppliers.</p>
                    </div>
                </div>
                {/* card */}

                {/* card */}
                <div className="flex gap-4">
                    {/* card image */}
                    <div className="size-12 rounded-full bg-green-200 flex items-center justify-center">
                        <TruckElectric className='text-green-600 size-5' fill='currentColor' />
                    </div>
                    {/* card content */}
                    <div className='flex flex-col'>
                        <h2 className='font-semibold text-lg text-main-color '>Fast Delivery</h2>
                        <p className='font-medium'>Same-day delivery available in most areas</p>
                    </div>
                </div>
                {/* card */}

                {/* card */}
                <div className="flex gap-4">
                    {/* card image */}
                    <div className="size-12 rounded-full bg-green-200 flex items-center justify-center">
                        <ShieldCheck className='text-green-600 size-5' fill='currentColor' />
                    </div>
                    {/* card content */}
                    <div className='flex flex-col'>
                        <h2 className='font-semibold text-lg text-main-color '>Secure Shopping</h2>
                        <p className='font-medium'>Your data and payments are completely secure</p>
                    </div>
                </div>
                {/* card */}

            </div>

            <div className="flex flex-col p-4 rounded-[6px] shadow gap-4">
                <div className="flex gap-4 items-center">
                    <div className='relative size-12'>
                        <Image src={IntroImage} fill alt='Sarah Johnson Image' className='w-12 h-12 object-cover rounded-full' />
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-main-color font-medium'>Sarah Johnson</h3>
                        <div className='flex items-center'>
                            <Star className='w-5 h-4 text-yellow-300' fill='currentColor' />
                            <Star className='w-5 h-4 text-yellow-300' fill='currentColor' />
                            <Star className='w-5 h-4 text-yellow-300' fill='currentColor' />
                            <Star className='w-5 h-4 text-yellow-300' fill='currentColor' />
                            <Star className='w-5 h-4 text-yellow-300' fill='currentColor' />
                        </div>
                    </div>
                </div>
                <p className='italic font-medium text-gray-700'>"FreshCart has transformed my shopping experience. The quality of the products is outstanding, and the delivery is always on time. Highly recommend!"</p>
            </div>

        </div>
    )
}

import React from 'react'
import { getUserWishlist } from './getUserWishlist.action'
import PageTitle from '@/components/PageTitle/PageTitle'
import { ArrowBigRight, Heart } from 'lucide-react'
import WishlistCard from '@/components/WishlistCard/WishlistCard'
import ShoppingButton from '@/components/ShoppingButton/ShoppingButton'

export default async function page() {

    const { data, count } = await getUserWishlist()
    return (
        <>
            {count > 0 ?
                <div className="min-h-screen bg-gray-50/50">
                    <PageTitle breadCrumb="Wishlist" breadCrumbColor="text-gray-900!" pageTitle="My Wishlist" titleColor='text-black text-2xl! sm-text-3xl!' titleDescription={`${count} item saved`} slashColor='text-gray-500!' homeBtnColor='text-gray-500 hover:text-green-600!' iconBackground='shadow-none! bg-red-50! size-12! rounded-xl!' descriptionColor='text-gray-500! text-xs! sm:text-sm!' titleIcon={<Heart color='red' fill='red' size={25} />} pageBackground="bg-white px-4! py-8!" />
                    <div className="container mx-auto px-4 py-8">
                        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                            <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-100 text-sm font-medium text-gray-500">
                                <div className="col-span-6">Product</div>
                                <div className="col-span-2 text-center">Price</div>
                                <div className="col-span-2 text-center">Status</div>
                                <div className="col-span-2 text-center">Action</div>
                            </div>
                            <div className="divide-y divide-gray-100">
                                {data.map((e: any) => <WishlistCard key={e._id} price={e.price} priceAfterDiscount={e.priceAfterDiscount} id={e._id} name={e.title} category={e.category.name} image={e.imageCover} />)}
                            </div>
                        </div>
                        <div className="mt-8 flex items-center justify-between">
                            <ShoppingButton />
                        </div>
                    </div>
                </div>
                :
                <div className='min-h-screen bg-gray-50/50'>
                    <div className='container mx-auto px-4 py-20'>
                        <div className='max-w-sm mx-auto text-center'>
                            <div className='w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-6'>
                                <Heart />
                            </div>
                            <h2 className='text-xl font-bold text-gray-900 mb-2'>Your wishlist is empty</h2>
                            <p className='text-gray-500 text-sm mb-6'>Browse products and save your favorites here.</p>
                            <div className='flex flex-col gap-3'>
                                <a className='inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors'>Browse Products
                                    <ArrowBigRight />
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

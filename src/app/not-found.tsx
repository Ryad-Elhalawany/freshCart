import { Apple, ArrowLeftIcon, Heart, Home, LocateFixed, ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export default function Notfound() {
    return <>
        <div className=" min-h-screen bg-[#fafbfc] flex items-center justify-center px-4 py-16 relative overflow-hidden">
            <div className=" absolute inset-0 overflow-hidden">
                <div className=" absolute top-[10%] left-[5%] text-green-200 text-4xl animate-[float_6s_ease-in-out_infinite]">
                    <Apple />
                </div>
                <div className=" absolute top-[20%] right-[10%] text-green-200 text-3xl animate-[float_8s_ease-in-out_infinite_1s]">
                    <Apple />
                </div>
                <div className=" absolute bottom-[25%] left-[8%] text-green-200 text-3xl animate-[float_7s_ease-in-out_infinite_0.5s]">
                    <Apple />
                </div>
                <div className=" absolute bottom-[15%] right-[15%] text-green-200 text-4xl animate-[float_9s_ease-in-out_infinite_2s]">
                    <Apple />
                </div>
                <div className=" absolute top-[50%] left-[15%] text-green-100 text-2xl animate-[float_5s_ease-in-out_infinite_1.5s]">
                    <Apple />
                </div>
                <div className=" absolute top-[40%] right-[5%] text-green-100 text-2xl animate-[float_6s_ease-in-out_infinite_0.8s]">
                    <Apple />
                </div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-green-100/40 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-green-100/30 to-transparent rounded-full blur-3xl" />
            </div>
            <div className="relative z-10 max-w-xl w-full">
                <div className="flex justify-center mb-10">
                    <div className="relative">
                        <div className="absolute inset-0 w-64 h-52 sm:w-72 sm:h-60 bg-green-100/50 rounded-[32px] blur-2xl" />
                        <div className="relative w-64 h-52 sm:w-72 sm:h-60">
                            <div className="absolute inset-x-0 top-4 mx-auto w-52 h-40 sm:w-60 sm:h-44 bg-white rounded-3xl shadow-xl border border-gray-100 flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-green-50/80 via-transparent to-green-100/40" />
                                <ShoppingCart size={50} />
                            </div>
                            <div className="absolute -top-2 -right-2 sm:top-0 sm:right-0">
                                <div className="relative">
                                    <div className="absolute -inset-2 rounded-full bg-white shadow-lg" />
                                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                                        <span className="text-xl sm:text-2xl font-black text-white">404</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mb-10">
                    <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
                        Oops! Nothing Here
                    </h1>
                    <p className="text-gray-500 text-lg max-w-md mx-auto">
                        Looks like this page went out of stock! Don't worry, there's plenty more fresh content to explore.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                    <Link href='/' className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-green-600 text-white py-4 px-8 rounded-2xl font-bold text-lg shadow-lg hover:bg-green-700">
                        <Home />
                        Go to Homepage
                    </Link>
                    <button className="group cursor-pointer w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-gray-700 py-4 px-8 rounded-2xl font-bold text-lg shadow-md border">
                        <ArrowLeftIcon />
                        Go Back
                    </button>
                </div>
                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
                    <p className="text-center text-sm text-gray-400 uppercase mb-4">
                        Popular Destinations
                    </p>
                    <div className="flex flex-wrap lg:flex-nowrap justify-center gap-3">
                        <button className="px-5 py-2.5 cursor-pointer rounded-xl text-nowrap bg-green-50 text-green-700">All Products</button>
                        <button className="px-5 py-2.5 cursor-pointer rounded-xl text-nowrap bg-gray-100 text-gray-700">Categories</button>
                        <button className="px-5 py-2.5 cursor-pointer rounded-xl text-nowrap bg-gray-100 text-gray-700">Today's Deals</button>
                        <button className="px-5 py-2.5 cursor-pointer rounded-xl text-nowrap bg-gray-100 text-gray-700">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, ShoppingBag, Star, Truck } from "lucide-react"


export default function ProductDetailsReviews({ category, subcategory, brand, sold, description, ratingsQuantity, ratingsAverage, reviews }: { category: string, subcategory: string, brand: string, sold: string, description: string, ratingsQuantity: number, ratingsAverage: number, reviews: [] }) {



    const reviewBars: Record<number, number> = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
    }
    const totalReviews = reviews.length

    reviews.forEach((e: { rating: number }) => {
        reviewBars[e.rating] = reviewBars[e.rating] + 1
    })


    return (
        <>
            <Tabs defaultValue="overview">
                <TabsList variant="line">
                    <TabsTrigger className="hover:text-green-700 cursor-pointer text-sm md:text-md px-6 pt-3 mt-3" value="overview"><ShoppingBag /> Product Details</TabsTrigger>
                    <TabsTrigger className="hover:text-green-700 cursor-pointer text-sm md:text-md px-6 pt-3 mt-3" value="analytics"><Star /> Reveiws ({ratingsQuantity})</TabsTrigger>
                    <TabsTrigger className="hover:text-green-700 cursor-pointer text-sm md:text-md px-6 pt-3 mt-3" value="reports"><Truck /> Shipping & returns</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="mt-6 p-6">
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">About this Product</h3>
                            <p className="text-gray-600 leading-relaxed">{description}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gray-50 rounded-lg p-4">
                                <h4 className="font-medium text-gray-900 mb-3">Product Information</h4>
                                <ul className="space-y-2">
                                    <li className="flex justify-between text-sm">
                                        <span className="text-gray-500">Category</span>
                                        <span className="text-gray-900 font-medium">{category}</span>
                                    </li>
                                    <li className="flex justify-between text-sm">
                                        <span className="text-gray-500">Subcategory</span>
                                        <span className="text-gray-900 font-medium">{subcategory}</span>
                                    </li>
                                    <li className="flex justify-between text-sm">
                                        <span className="text-gray-500">Brand</span>
                                        <span className="text-gray-900 font-medium">{brand}</span>
                                    </li>
                                    <li className="flex justify-between text-sm">
                                        <span className="text-gray-500">Items Sold</span>
                                        <span className="text-gray-900 font-medium">{sold}+ sold</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-4">
                                <h4 className="font-medium text-gray-900 mb-3">Key Features</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-center text-sm text-gray-600">
                                        <Check color="green" />
                                        Premium Quality Product
                                    </li>
                                    <li className="flex items-center text-sm text-gray-600">
                                        <Check color="green" />
                                        100% Authentic Guarantee
                                    </li>
                                    <li className="flex items-center text-sm text-gray-600">
                                        <Check color="green" />
                                        Fast & Secure Packaging
                                    </li>
                                    <li className="flex items-center text-sm text-gray-600">
                                        <Check color="green" />
                                        Quality Tested
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="analytics" className="mt-6 p-6">
                    <div className="space-y-6">
                        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                            <div className="text-center">
                                <div className="text-5xl font-bold text-gray-900 mb-2">{ratingsAverage}</div>
                                <div className="text-yellow-400 flex items-center justify-center">
                                    {Array.from({ length: Math.floor(ratingsAverage) }).map((e, i) => <Star key={i} color="#FCC800" size={20} fill="#FCC800" />)}
                                    {Array.from({ length: 5 - Math.floor(ratingsAverage) }).map((e, i) => <Star key={i} color="#FCC800" size={20} />)}
                                </div>
                                <p className="text-sm text-gray-500 mt-2">Based on {ratingsQuantity} reviews</p>
                            </div>

                            <div className="flex-1 w-full">
                                {Object.entries(reviewBars).map(([rating, count]) => (
                                    <div key={rating} className="flex items-center gap-3 mb-2">
                                        <span className="text-sm text-gray-600 w-8">{rating} star</span>
                                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                            {/* <div className="h-full bg-yellow-400 rounded-full transition-all duration-300 w-[${count}%]"></div> */}
                                            <div className="h-full bg-yellow-400 rounded-full transition-all duration-300" style={{ width: `${(count / totalReviews * 100).toFixed(0)}%` }}></div>
                                        </div>
                                        <span className="text-sm text-gray-500 w-10">{(count / totalReviews * 100).toFixed(0)}%</span>
                                    </div>
                                ))}
                                {/* <div className="flex items-center gap-3 mb-2">
                                    <span className="text-sm text-gray-600 w-8">5 star</span>
                                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                        <div className="h-full bg-yellow-400 rounded-full transition-all duration-300"></div>
                                    </div>
                                    <span className="text-sm text-gray-500 w-10">25%</span>
                                </div> */}
                                {/* <div className="flex items-center gap-3 mb-2">
                                    <span className="text-sm text-gray-600 w-8">5 star</span>
                                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                        <div className="h-full bg-yellow-400 rounded-full transition-all duration-300 w-[33%]"></div>
                                    </div>
                                    <span className="text-sm text-gray-500 w-10">25%</span>
                                </div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-sm text-gray-600 w-8">5 star</span>
                                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                        <div className="h-full bg-yellow-400 rounded-full transition-all duration-300"></div>
                                    </div>
                                    <span className="text-sm text-gray-500 w-10">25%</span>
                                </div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-sm text-gray-600 w-8">5 star</span>
                                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                        <div className="h-full bg-yellow-400 rounded-full transition-all duration-300"></div>
                                    </div>
                                    <span className="text-sm text-gray-500 w-10">25%</span>
                                </div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-sm text-gray-600 w-8">5 star</span>
                                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                        <div className="h-full bg-yellow-400 rounded-full transition-all duration-300"></div>
                                    </div>
                                    <span className="text-sm text-gray-500 w-10">25%</span>
                                </div> */}
                            </div>
                        </div>

                        <div className="border-t border-gray-200 pt-6">
                            <div className="text-center mb-3 py-8">
                                <Star className="mx-auto mb-3 text-gray-600" fill="gray" size={30} color="gray" />
                                <p className="text-gray-500">Customer reviews will be displayed here.</p>
                                <button className="mt-4 text-green-600 hover:text-green-700 font-medium cursor-pointer">Write a Review</button>
                            </div>
                        </div>

                    </div>
                </TabsContent>
                <TabsContent value="reports" className="mt-6 p-6">
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-linear-to-br from-green-50 to-green-100 rounded-lg p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="h-12 w-12 bg-green-600 text-white rounded-full flex items-center justify-center">
                                        <Truck />
                                    </div>
                                    <h4 className="font-semibold text-gray-900">Shipping Information</h4>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2 text-sm text-gray-700">
                                        <Check />
                                        <span>Free shipping on orders over $50</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-700">
                                        <Check />
                                        <span>Standard delivery: 3-5 business days</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-700">
                                        <Check />
                                        <span>Express delivery available (1-2 business days)</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-700">
                                        <Check />
                                        <span>Track your order in real-time</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-linear-to-br from-green-50 to-green-100 rounded-lg p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="h-12 w-12 bg-green-600 text-white rounded-full flex items-center justify-center">
                                        <Truck />
                                    </div>
                                    <h4 className="font-semibold text-gray-900">Shipping Information</h4>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2 text-sm text-gray-700">
                                        <Check />
                                        <span>30-day hassle-free returns</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-700">
                                        <Check />
                                        <span>Full refund or exchange available</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-700">
                                        <Check />
                                        <span>Free return shipping on defective items</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-gray-700">
                                        <Check />
                                        <span>Easy online return process</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-6 flex items-center gap-4">
                            <div className="h-14 w-14 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center shrink-0">
                                <Truck />
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-1">Buyer Protection Guarantee</h4>
                                <p className="text-sm text-gray-600">Get a full refund if your order doesn't arrive or isn't as described. We ensure your shopping experience is safe and secure.</p>
                            </div>
                        </div>


                    </div>
                </TabsContent>
            </Tabs>

        </>
    )
}

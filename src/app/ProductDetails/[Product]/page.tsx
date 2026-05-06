import { ChevronRight, Heart, Home, RotateCcw, Share2, Shield, ShoppingCart, Star, TruckElectric, Zap } from "lucide-react";
import Link from "next/link";
import AppButton from './../../../components/shared/AppButton/AppButton';
import ProductImageGallery from "@/components/ProductImageGallery/ProductImageGallery";
import AddToCart from "@/components/AddToCart/AddToCart";
import ProductQuantityPrice from "@/components/ProductQuantityPrice/ProductQuantityPrice";
import AddToWishlist from "@/components/AddToWishlist/AddToWishlist";
import ProductDetailsReviews from "@/components/ProductDetailsReviews/ProductDetailsReviews";
import { getUserWishlist } from "@/app/wishlist/getUserWishlist.action";
import RemoveFromWishlist from "@/components/RemoveFromWishlist/RemoveFromWishlist";

export default async function page({ params }: { params: Promise<{ Product: string }> }) {
    const { Product } = await params

    async function getSpecificProduct() {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/products/${Product}`)
        const data = await response.json()
        return data.data
    }

    const { data } = await getUserWishlist()
    const specificProduct = await getSpecificProduct();
    const { brand, category, description, subcategory, imageCover, images, price, quantity, ratingsAverage, ratingsQuantity, reviews, sold, title, _id } = specificProduct
    const isInWishlist = data?.some((e: any) => e.id === _id);

    return (
        <div className="min-h-screen px-4">
            <div className="container mx-auto">
                <div className="mt-4 flex gap-1 items-center mb-10">
                    <div className="flex gap-1.5 items-center">
                        <Home className="size-3.5" />
                        <Link href='/' className="text-sm text-main-color font-medium">Home</Link>
                    </div>
                    <ChevronRight className="size-3.5" />
                    <Link href={`/categories/${category._id}`} className="text-sm text-main-color font-medium">{category.name}</Link>
                    <ChevronRight className="size-3.5" />
                    <span className="text-sm font-semibold">{title}</span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                    {/* Product images */}
                    <div className="lg:col-span-1 overflow-hidden p-4 rounded-lg shadow-lg lg:sticky top-20">
                        <ProductImageGallery imageCover={imageCover} images={images} />
                    </div>
                    {/* Product images */}

                    {/* Product details */}

                    <div className="lg:col-span-3 bg-white shadow p-6 rounded-xl w-full">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="py-1.5 px-3 rounded-full bg-green-50">
                                <Link href='/' className="text-xs text-green-600 font-medium ">{category.name}</Link>
                            </div>
                            <div className="py-1.5 px-3 rounded-full bg-gray-100">
                                <span className="text-xs text-gray-800 font-medium ">{brand.name}</span>
                            </div>
                        </div>
                        <h1 className="text-2xl text-gray-900 font-bold mb-3">{title}</h1>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="flex items-center">
                                {Array.from({ length: Math.floor(ratingsAverage) }).map((_, i) => <Star key={i} fill="#FCC800" color="#FCC800" className="w-5 h-4 mb-0.5" />)}
                                {Array.from({ length: 5 - Math.floor(ratingsAverage) }).map((_, i) => <Star key={i} color="#FCC800" className="w-5 h-4 mb-0.5" />)}
                            </div>
                            <span className="text-gray-700 text-sm font-medium">{ratingsAverage} ({ratingsQuantity} reviews)</span>
                        </div>
                        <span className="text-2xl text-gray-900 font-bold mb-6 inline-block">{price} EGP</span>
                        <div className="py-1.5 px-3 rounded-full bg-green-50 flex items-center gap-1.5 w-fit mb-6">
                            <div className="size-2 rounded-full bg-green-500"></div>
                            <span className="font-medium text-sm text-green-600">In Stock</span>
                        </div>
                        <p className="font-medium text-gray-600 mb-6 pt-5 border-t border-[#F3F4F6]">{description}</p>
                        <ProductQuantityPrice price={price} available={quantity} />
                        <div className="flex flex-col lg:flex-row items-center w-full gap-3 mb-6">
                            <AddToCart className="w-full flex items-center gap-1 cursor-pointer rounded-[12px] bg-green-600 flex-1 py-3.5 lg:py-6 px-3.5 hover:bg-green-700" id={_id}>
                                <ShoppingCart className="w-5 h-4" />
                                <span className="font-medium">Add to Cart</span>
                            </AddToCart>

                            <AppButton className="w-full flex items-center gap-1 cursor-pointer rounded-[12px] bg-gray-900 flex-1 py-3.5 lg:py-6 px-3.5 hover:bg-gray-800">
                                <Zap className="w-5 h-4" />
                                <span className="font-medium">Buy Now</span>
                            </AppButton>
                        </div>
                        <div className="flex items-center justify-between gap-3 w-full mb-6">
                            {isInWishlist ? <RemoveFromWishlist id={_id} className="flex-1 border-2 py-3 px-4 rounded-xl font-medium transition flex items-center justify-center gap-2 border-red-200 text-red-600 bg-red-50 cursor-pointer"><Heart fill="red" className="text-red-600" size={22} /> In Wishlist</RemoveFromWishlist> : <AddToWishlist id={_id} className="flex gap-2 items-center text-main-color bg-transparent border-2 border-[#E5E7EB] rounded-[12px] py-6 px-3.5 flex-1 hover:text-green-600 hover:border-green-600 hover:bg-transparent duration-200 cursor-pointer">
                                <Heart className="w-5 h-4" />
                                <span className="font-medium">Add to Wishlist</span>
                            </AddToWishlist>}
                            {/* <AddToWishlist id={_id} className="flex gap-2 items-center text-main-color bg-transparent border-2 border-[#E5E7EB] rounded-[12px] py-6 px-3.5 flex-1 hover:text-green-600 hover:border-green-600 hover:bg-transparent duration-200 cursor-pointer">
                                <Heart className="w-5 h-4" />
                                <span className="font-medium">Add to Wishlist</span>
                            </AddToWishlist> */}
                            <button className="border-2 rounded-[12px] p-4.5 flex items-center justify-center border-gray-200 cursor-pointer hover:border-green-600 group duration-200">
                                <Share2 className="size-4 group-hover:text-green-600 duration-200" />
                            </button>
                        </div>
                        <div className="pt-6 border-t border-[#F3F4F6] items-center grid grid-cols-1 lg:grid-cols-3 gap-4 justify-between">
                            <div className="flex gap-3 items-center">
                                <div className="size-10 rounded-full bg-green-100 flex items-center justify-center">
                                    <TruckElectric className="text-green-600 w-5 h-4" />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-sm text-gray-900 font-medium">Free Delivery</h4>
                                    <span className="text-xs font-medium">Orders over $50</span>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center">
                                <div className="size-10 rounded-full bg-green-100 flex items-center justify-center">
                                    <RotateCcw className="text-green-600 w-5 h-4" />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-sm text-gray-900 font-medium">30 Days Return</h4>
                                    <span className="text-xs font-medium">Money back</span>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center">
                                <div className="size-10 rounded-full bg-green-100 flex items-center justify-center">
                                    <Shield className="text-green-600 w-5 h-4" />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-sm text-gray-900 font-medium">Secure Payment</h4>
                                    <span className="text-xs font-medium">100% Protected</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product details */}
                </div>
                <div className="py-8">
                    <div className="container mx-auto px-4">
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                            <ProductDetailsReviews category={category.name} description={description} subcategory={subcategory[0].name} brand={brand.name} sold={sold} ratingsQuantity={ratingsQuantity} ratingsAverage={ratingsAverage} reviews={reviews} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

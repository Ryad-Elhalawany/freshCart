"use client"

import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from "@images/mainPageSlider.png"

import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
    {
        image: img1.src,
        title: "Fresh Products Delivered to your Door",
        subtitle: "Get 20% off your first order",
        primaryBtn: { label: "Shop Now", href: "/products" },
        secondaryBtn: { label: "View Deals", href: "" },
    },
    {
        image: img1.src,
        title: "Premium Quality Guaranteed",
        subtitle: "Fresh from farm to your table",
        primaryBtn: { label: "Shop Now", href: "/products" },
        secondaryBtn: { label: "Learn More", href: "" },
    },
    {
        image: img1.src,
        title: "Fast & Free Delivery",
        subtitle: "Same day delivery available",
        primaryBtn: { label: "Order Now", href: "/products" },
        secondaryBtn: { label: "Delivery Info", href: "" },
    },
]

export default function HomeSlider() {
    const [swiper, setSwiper] = useState<SwiperType | null>(null)

    return (
        <div className="relative">
            <Swiper
                modules={[Pagination, A11y]}
                slidesPerView={1}
                loop={true}
                onSwiper={setSwiper}
                pagination={{ clickable: true }}
                className="home-slider"
            >
                {slides.map((slide, i) => (
                    <SwiperSlide key={i}>
                        <div
                            className="h-[400px] flex items-center justify-center relative"
                            style={{ backgroundImage: `url("${slide.image}")`, backgroundSize: 'cover', backgroundPosition: 'center center' }}
                        >
                            <div className="absolute inset-0 bg-green-500/60" />
                            <div className="overlay py-20 text-white md:p-20 w-full h-full z-10 p-6">
                                <div className="container h-full content-center">
                                    <h2 className="text-white text-3xl font-bold mb-4 max-w-96">{slide.title}</h2>
                                    <p>{slide.subtitle}</p>
                                    <div className="mt-4 flex items-center">
                                        <Link
                                            href={slide.primaryBtn.href}
                                            className="btn bg-white border-2 border-white text-green-600 inline-block px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform text-nowrap"
                                        >
                                            {slide.primaryBtn.label}
                                        </Link>
                                        <Link
                                            href={slide.secondaryBtn.href}
                                            className="btn bg-transparent border-2 border-white text-white ml-2 inline-block px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform text-nowrap"
                                        >
                                            {slide.secondaryBtn.label}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <button onClick={() => swiper?.slidePrev()} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/90 hover:bg-white text-green-500 hover:text-green-600 rounded-full w-10 h-10 hidden md:flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
                <ChevronLeft size={18} />
            </button>
            <button onClick={() => swiper?.slideNext()} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/90 hover:bg-white text-green-500 hover:text-green-600 rounded-full w-10 h-10 hidden md:flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
                <ChevronRight size={18} />
            </button>
        </div>
    )
}

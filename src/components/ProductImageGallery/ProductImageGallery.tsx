"use client"

import Image from "next/image";
import { useState } from "react";

export default function ProductImageGallery({ imageCover, images }: { imageCover: string; images: string[] }) {
    const [activeImage, setActiveImage] = useState(imageCover);

    return (
        <div>
            <div className="overflow-hidden rounded-lg mb-3">
                <Image
                    src={activeImage}
                    width={500}
                    height={500}
                    className="w-auto h-auto mx-auto transition-all duration-300"
                    alt="product"
                />
            </div>
            <div className="flex overflow-x-auto gap-2 justify-center">
                {images.map((img, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveImage(img)}
                        className={`flex-shrink-0 rounded border-2 overflow-hidden transition-all duration-200 cursor-pointer ${activeImage === img ? "border-green-500" : "border-gray-200 hover:border-gray-400"}`}
                    >
                        <Image src={img} width={60} height={60} className="w-[60px] h-[60px] object-cover" alt={`product-${i}`} />
                    </button>
                ))}
            </div>
        </div>
    );
}

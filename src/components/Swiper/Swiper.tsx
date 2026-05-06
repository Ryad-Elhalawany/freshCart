"use client"

import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

export default ({ slidesPerView = 1, spaceBetween = 50, imgList, navigation = true }: { slidesPerView?: number, spaceBetween?: number, imgList: string[], navigation?: boolean }) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            navigation={navigation}
            loop={true}
            pagination={{ clickable: true, bulletActiveClass: 'w-8! h-3! bg-white! opacity-100! rounded-[6px]!' }}
        >
            {imgList.map((e, i) => <SwiperSlide key={i}>
                <div className='relative h-96'>
                    <Image src={e} fill className='object-cover' alt='freshCart Image' />
                </div>
            </SwiperSlide>)}
        </Swiper>
    );
};

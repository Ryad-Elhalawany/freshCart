import React from 'react'

export default function SectionTitle({ BlackWord, GreenWord }: { BlackWord: string, GreenWord: string }) {
    return (
        <div className="flex gap-3 items-center">
            <div className="w-1.5 h-8 bg-linear-to-b from-[#00BC7D] to-[#007A55] rounded-full"></div>
            <h2 className='font-bold text-3xl text-gray-800'>{BlackWord} <span className='text-emerald-600'>{GreenWord}</span></h2>
        </div>
    )
}

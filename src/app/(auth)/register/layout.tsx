import React from 'react'
import RegisterIntro from './RegisterIntro';

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 items-start gap-12 p-4 my-10 container mx-auto max-w-7xl'>
            <RegisterIntro />
            {children}
        </div>
    )
}

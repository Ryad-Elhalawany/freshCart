import React from 'react'
import LoginIntro from './LoginIntro'

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12 p-4 my-10 container mx-auto max-w-7xl'>
            <LoginIntro />
            {children}
        </div>
    )
}

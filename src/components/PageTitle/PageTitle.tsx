import Link from 'next/link'
import React from 'react'

export default function PageTitle({ breadCrumb, breadCrumbColor, titleIcon, iconBackground, pageTitle, titleColor, slashColor, homeBtnColor, titleDescription, descriptionColor, pageBackground }: { breadCrumb: string, breadCrumbColor?: string, titleIcon: React.ReactNode, iconBackground?: string, pageTitle: string, titleColor?: string, slashColor?: string, homeBtnColor?: string, titleDescription: string, descriptionColor?: string, pageBackground: string }) {
    return (
        <div className={`bg-linear-to-br text-white py-12 px-4 mx-auto ${pageBackground}`}>
            <div className="container mx-auto py-4">
                <div className="flex items-center gap-2 text-sm text-white/70 mb-6">
                    <Link href='/' className={`hover:text-white transition-colors ${homeBtnColor}`}>Home</Link>
                    <span className={`text-white/40 ${slashColor}`}>/</span>
                    <span className={`text-white font-medium ${breadCrumbColor}`}>{breadCrumb}</span>
                </div>
                <div className="flex items-center gap-6">
                    <div className={`w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30 ${iconBackground}`}>
                        {titleIcon}
                    </div>
                    <div>
                        <h1 className={`text-3xl sm:text-4xl font-bold tracking-tight ${titleColor}`}>{pageTitle}</h1>
                        <p className={`text-white/80 mt-1 ${descriptionColor}`}>{titleDescription}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

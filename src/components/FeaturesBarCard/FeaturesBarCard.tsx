import { RotateCcw } from 'lucide-react'
import React, { ReactElement } from 'react'

export default function FeaturesBarCard({ CardIcon, CardTitle, CardDescription, IconStyle, CardStyle, IconBackgroundStyle }: { CardIcon: React.ElementType, CardTitle: string, CardDescription: string, IconStyle?: string, CardStyle?: string, IconBackgroundStyle?: string }) {
    return (
        <div className={`flex items-center gap-3 ${CardStyle}`}>
            <div className={`size-12 flex items-center justify-center ${IconBackgroundStyle}`}>
                {CardIcon && <CardIcon className={`${IconStyle}`} />}
            </div>
            <div className='flex flex-col'>
                <h4 className='font-semibold text-gray-900 text-sm'>{CardTitle}</h4>
                <p className='text-gray-500 text-xs font-medium'>{CardDescription}</p>
            </div>
        </div>
    )
}

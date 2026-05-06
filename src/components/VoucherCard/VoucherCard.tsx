import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function VoucherCard({ VoucherCardBackground, VoucherTitleIcon, VoucherTitle, VoucherName, VoucherDescription, VoucherDiscount, VoucherDiscountCode, VoucherButtonContent, VoucherButtonColor }: { VoucherCardBackground: string, VoucherTitleIcon: string, VoucherTitle: string, VoucherName: string, VoucherDescription: string, VoucherDiscount: number, VoucherDiscountCode: string, VoucherButtonContent: string, VoucherButtonColor: string }) {
    return (
        <div className={`relative w-full p-8 rounded-[16px] overflow-hidden ${VoucherCardBackground}`}>
            <div className="relative z-10 flex flex-col items-start">

                <div className='flex gap-2 items-center bg-[#FFFFFF33] py-1 px-3 rounded-full mb-4 text-sm'>
                    <span>{VoucherTitleIcon}</span>
                    <span className="font-medium text-white">{VoucherTitle}</span>
                </div>

                <h3 className="text-3xl font-bold text-white mb-2">{VoucherName}</h3>

                <p className="mb-4 font-medium text-white/80">{VoucherDescription}</p>

                <div className="flex items-center gap-4 mb-6">
                    <span className="text-white text-3xl font-bold">{VoucherDiscount}% OFF</span>
                    <div className="text-sm font-medium ">
                        <span className="text-white/80">Use code: </span>
                        <span className="font-bold text-white">{VoucherDiscountCode}</span>
                    </div>
                </div>

                <Link href='/products' className={`py-3 px-6 bg-white flex items-center gap-2 ${VoucherButtonColor} font-semibold rounded-full`}>
                    <span>{VoucherButtonContent}</span>
                    <MoveRight />
                </Link>
            </div>
            <div className="absolute -top-20 -inset-e-20 rounded-full size-40 bg-white/10"></div>
            <div className="absolute -bottom-20 -inset-s-20 rounded-full size-40 bg-white/10"></div>
        </div>
    )
}

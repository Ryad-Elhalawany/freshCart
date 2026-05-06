import VoucherCard from "../VoucherCard/VoucherCard";

export default function HomeVouchers() {
    return (
        <div className="pt-10 pb-12 px-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-6">
                    <VoucherCard VoucherCardBackground="bg-linear-to-r from-[#00BC7D] to-[#007A55]" VoucherTitleIcon="🔥" VoucherTitle="Deal of the Day" VoucherName="Fresh Organic Fruits" VoucherDescription='Get up to 40% off on selected organic fruits' VoucherDiscount={40} VoucherDiscountCode='ORGANIC40' VoucherButtonContent='Shop Now' VoucherButtonColor='text-green-600' />
                    <VoucherCard VoucherCardBackground="bg-linear-to-r from-[#FF8904] to-[#FF2056]" VoucherTitleIcon="✨" VoucherTitle="New Arrivals" VoucherName="Exotic Vegetables" VoucherDescription='Discover our latest collection of premium vegetables' VoucherDiscount={25} VoucherDiscountCode='FRESH25' VoucherButtonContent='Explore Now' VoucherButtonColor='text-orange-600' />
                </div>
            </div>
        </div>
    )
}

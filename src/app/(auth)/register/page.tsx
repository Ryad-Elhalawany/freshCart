import RegisterForm from './RegisterForm'
import Image from 'next/image'

export default function page() {
    return (
        <>
            <div className="w-full shadow rounded-[16px] py-10 px-6 flex flex-col gap-2">
                <h2 className='text-3xl text-gray-700 font-semibold text-center'>Create Your Account</h2>
                <p className="text-center font-medium text-gray-600">Start your fresh journey with us today</p>
                <div className="py-8 flex gap-2 items-center">
                    <button className='flex gap-2 items-center justify-center border border-[#D1D5DC] rounded-[8px] py-2 px-4 flex-1 cursor-pointer hover:bg-muted duration-200'>
                        <div className='relative size-5'>
                            <Image src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" fill alt="Google icon" className="size-5 object-cover" />
                        </div>
                        <span className='font-semibold text-gray-900'>Google</span>
                    </button>
                    <button className='flex gap-2 items-center justify-center border border-[#D1D5DC] rounded-[8px] py-2 px-4 flex-1 cursor-pointer hover:bg-muted duration-200'>
                        <div className='relative size-5'>
                            <Image src="https://www.svgrepo.com/show/448224/facebook.svg" fill alt="Facebook icon" className="size-5 object-cover" />
                        </div>
                        <span className='font-semibold text-gray-900'>Facebook</span>
                    </button>
                </div>
                <div className="divider relative w-full h-0.5 bg-gray-300/30 my-4 flex items-center before:content-['or'] before:absolute before:top-1/2 before:left-1/2 before:-translate-1/2 before:bg-white before:px-4"></div>
                <RegisterForm />
            </div>
        </>
    )
}

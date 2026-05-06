import Image from 'next/image'
import LoginForm from './LoginForm'

export default function page() {
    return (
        <>
            <div className="w-full shadow-xl rounded-2xl p-8 lg:p-12 flex flex-col mx-auto container">
                <div className='mb-8'>
                    <div className='text-3xl text-gray-900 font-semibold text-center mb-4'><span className='text-green-600'>Fresh</span>Cart</div>
                    <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">Welcome Back!</h1>
                    <p className="text-center font-medium text-gray-600">Sign in to continue your fresh shopping experience</p>
                </div>
                <div className="flex flex-col w-full gap-3 items-center mb-6">
                    <button className='flex gap-2 items-center justify-center border-2 border-[#E5E7EB] rounded-[12px] py-3 px-4 flex-1 cursor-pointer hover:bg-muted duration-200 w-full'>
                        <div className='relative size-5'>
                            <Image src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" fill alt="Google icon" className="size-5 object-cover" />
                        </div>
                        <span className='text-gray-900'>Continue with Google</span>
                    </button>
                    <button className='flex gap-2 items-center justify-center border-2 border-[#E5E7EB] rounded-[12px] py-3 px-4 flex-1 cursor-pointer hover:bg-muted duration-200 w-full'>
                        <div className='relative size-5'>
                            <Image src="https://www.svgrepo.com/show/448224/facebook.svg" fill alt="Facebook icon" className="size-5 object-cover" />
                        </div>
                        <span className='text-gray-900'>Continue with Facebook</span>
                    </button>
                </div>
                <div className="relative py-4 mb-6">
                    <div className="w-full border-t border-gray-200"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="px-4 bg-white text-gray-500 font-medium text-sm">
                            OR CONTINUE WITH EMAIL
                        </span>
                    </div>
                </div>
                <LoginForm />
            </div>
        </>
    )
}

"use client"

import { Trash } from 'lucide-react'
import { handleRemoveProductFromCart } from '../../app/cart/removeProductFromCart.action'
import { useRouter } from 'next/navigation'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useContext } from 'react'
import { CartCreatedContext } from '@/context/CartContext/CartContext'

export default function RemoveProductFromCart({ id, title }: { id: string, title: any }) {

    const { cartCount, setCartCount } = useContext(CartCreatedContext)

    const myRouter = useRouter()
    async function removeProduct() {
        const { numOfCartItems } = await handleRemoveProductFromCart(id)
        myRouter.refresh()
        setCartCount(numOfCartItems)
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <button className='h-10 w-10 rounded-xl border border-red-200 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 flex items-center justify-center disabled:opacity-40 transition-all duration-200 cursor-pointer'><Trash size={20} /></button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader className="items-center justify-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center"><Trash className="w-8 h-8 text-red-500" /></div>
                    <AlertDialogTitle className="text-xl font-bold text-gray-900 justify-self-center">Remove Item?</AlertDialogTitle>
                    <AlertDialogDescription className="text-gray-500 text-sm">Remove <span className="text-gray-900">{title}</span> from your cart?</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="justify-center!">
                    <AlertDialogCancel className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-5 cursor-pointer px-6 rounded-xl transition-all">Cancel</AlertDialogCancel>
                    <AlertDialogAction className="bg-red-500 hover:bg-red-600 text-white font-semibold py-5 cursor-pointer px-6 rounded-xl transition-all" onClick={() => removeProduct()}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

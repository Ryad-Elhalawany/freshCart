"use client"
import { ShoppingCart, Trash } from 'lucide-react'
import { handleClearUserCart } from '../../app/cart/clearUserCart.action'
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

export default function ClearUserCart() {

    const { setCartCount } = useContext(CartCreatedContext)
    const myRouter = useRouter()
    async function clearCart() {
        handleClearUserCart()
        myRouter.refresh()
        setCartCount(0)
    }

    return (

        <AlertDialog>
            <AlertDialogTrigger asChild>
                <button className="group flex items-center gap-2 cursor-pointer text-sm text-gray-400 hover:text-red-500 transition-colors disabled:opacity-50">
                    <Trash size={20} />
                    <span>Clear all items</span>
                </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader className="items-center justify-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
                        <ShoppingCart className="w-8 h-8 text-red-500" />
                    </div>
                    <AlertDialogTitle className="text-xl font-bold text-gray-900 justify-self-center">Clear Your Cart?</AlertDialogTitle>
                    <AlertDialogDescription className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto text-center">All items will be removed from your cart. This action cannot be undone.</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="justify-center!">
                    <AlertDialogCancel className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold cursor-pointer py-6 px-7 rounded-xl transition-all">Keep Shopping</AlertDialogCancel>
                    <AlertDialogAction className="bg-red-500 hover:bg-red-600 text-white font-semibold cursor-pointer py-6 px-7 rounded-xl transition-all shadow-lg shadow-red-500/20" onClick={() => clearCart()}>Yes, Clear All</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>


    )
}

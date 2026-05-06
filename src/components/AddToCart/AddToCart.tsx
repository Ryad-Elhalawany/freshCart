"use client"

import { Loader, Plus } from "lucide-react"
import AppButton from "../shared/AppButton/AppButton"
import { handleAddProductToCart } from "./AddToCart.action"
import { toast } from "sonner"
import { useContext, useState } from "react"
import { CartCreatedContext } from "@/context/CartContext/CartContext"
import { useRouter } from "next/navigation"

export default function AddToCart({ id, onAdd, children, ...probs }: { id: string, onAdd?: () => void, children: React.ReactNode } & React.ComponentProps<typeof AppButton>) {
    const { setCartCount } = useContext(CartCreatedContext)
    const [isLoading, setIsLoading] = useState(false)
    const myRouter = useRouter()

    function addProductToCart() {
        setIsLoading(true)
        toast.promise(handleAddProductToCart({ productId: id }), {
            loading: 'loading....',
            success: function (data) {
                setCartCount(data.numOfCartItems)
                myRouter.refresh()
                onAdd?.()
                return data.message
            },
            error: function (data) {
                return data.message
            },
            position: 'top-right',
            finally: function () {
                setIsLoading(false)
            },
        });
    }

    return (
        <AppButton disabled={isLoading} onClick={addProductToCart} {...probs}>{isLoading ? <Loader className="size-5" /> : children}</AppButton>
    )
}

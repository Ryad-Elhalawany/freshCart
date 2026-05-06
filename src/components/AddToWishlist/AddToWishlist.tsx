"use client"

import { Loader, Plus } from "lucide-react"
import AppButton from "../shared/AppButton/AppButton"
import { toast } from "sonner"
import { useContext, useState } from "react"
import { handleAddProductToWishlist } from "@/app/wishlist/addToWishlist.action"
import { WishlistCreatedContext } from "@/context/WishlistContext/WishlistContext"
import { useRouter } from "next/navigation"

export default function AddToWishlist({ id, children, refreshWishlist, ...probs }: { id: string, children: React.ReactNode, refreshWishlist?: () => void } & React.ComponentProps<typeof AppButton>) {

    const [isLoading, setIsLoading] = useState(false)
    const { wishlistCount, setWishlistCount } = useContext(WishlistCreatedContext)
    const myRouter = useRouter()
    function addProductToWishlist() {
        setIsLoading(true)
        toast.promise(handleAddProductToWishlist({ productId: id }), {
            loading: 'loading....',
            success: function (data) {
                setWishlistCount(data.data.length)
                refreshWishlist?.()
                myRouter.refresh()
                return data.message
            },
            error: function (data) {
                return 'Cannot add the product to wishlist'
            },
            position: 'top-right',
            finally: function () {
                setIsLoading(false)
            },
        });
    }
    return (
        <AppButton disabled={isLoading} onClick={addProductToWishlist} {...probs}>{isLoading ? <Loader className="size-5 text-red-600" /> : children}</AppButton>
    )
}

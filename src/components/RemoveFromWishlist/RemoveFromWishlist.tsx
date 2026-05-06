"use client"

import { handleRemoveProductFromWishlist } from "@/app/wishlist/removeProductFromWishlist.action"
import { WishlistCreatedContext } from "@/context/WishlistContext/WishlistContext"
import { Trash } from "lucide-react"
import { useRouter } from "next/navigation"
import { useContext } from "react"

export default function RemoveFromWishlist({ id, children, refreshWishlist, ...probs }: { id: string, children: React.ReactNode, refreshWishlist?: () => void } & React.ComponentProps<"button">) {

    const { wishlistCount, setWishlistCount } = useContext(WishlistCreatedContext)

    const myRouter = useRouter()
    async function removeFromWishlist() {
        const { data } = await handleRemoveProductFromWishlist(id)
        myRouter.refresh()
        setWishlistCount(data.length)
        refreshWishlist?.()
    }

    return (
        <button {...probs} onClick={removeFromWishlist}>
            {/* <Trash size={18} /> */}
            {children}
        </button>
    )
}

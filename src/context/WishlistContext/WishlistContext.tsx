"use client"

import { createContext, useState } from "react"

export const WishlistCreatedContext = createContext({ wishlistCount: 0, setWishlistCount: function (count: any) { } })

export default function WishlistContextProvider({ children }: { children: React.ReactNode }) {

    const [wishlistCount, setWishlistCount] = useState(0)

    return (
        <WishlistCreatedContext value={{ wishlistCount, setWishlistCount }}>
            {children}
        </WishlistCreatedContext>
    )
}

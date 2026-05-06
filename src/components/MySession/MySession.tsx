"use client"

import CartContextProvider from "@/context/CartContext/CartContext";
import WishlistContextProvider from "@/context/WishlistContext/WishlistContext";
import { SessionProvider } from "next-auth/react";

export default function MySession({ children }: { children: React.ReactNode }) {
    return (
        <CartContextProvider>
            <WishlistContextProvider>
                <SessionProvider>
                    {children}
                </SessionProvider>
            </WishlistContextProvider>
        </CartContextProvider>
    )
}

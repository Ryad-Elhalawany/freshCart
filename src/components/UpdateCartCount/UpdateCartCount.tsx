"use client"

import { Plus } from "lucide-react"
import { handleUpdateCartCount } from "../../app/cart/updateCartCount.action"
import { useRouter } from "next/navigation"

export default function UpdateCartCount({ id, count, children, ...probs }: { id: string, count: number, children: any } & React.ComponentProps<"button">) {
    const myRouter = useRouter()
    async function updateCount() {
        await handleUpdateCartCount(id, count)
        myRouter.refresh()
    }

    return (
        // <button onClick={updateCount} className='h-8 w-8 rounded-lg bg-green-600 shadow-sm shadow-green-600/30 flex items-center justify-center text-white hover:bg-green-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer'><Plus /></button>
        <button {...probs} onClick={updateCount}>{children}</button>

    )
}

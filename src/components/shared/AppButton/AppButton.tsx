"use client"
import { Button } from "@/components/ui/button"

export default function AppButton({ children, ...probs }: React.ComponentProps<typeof Button>) {
    return (
        <Button {...probs}>{children}</Button>
    )
}

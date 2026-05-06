import { LoaderIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
    return (
        <LoaderIcon
            role="status"
            aria-label="Loading"
            className={cn("size-4 animate-spin", className)}
            {...props}
        />
    )
}

export default function SpinnerCustom() {
    return (
        <div className="flex items-center justify-center h-screen text-green-400">
            <div className="flex flex-col items-center">
                <Spinner className="size-7" />
                <p className="text-main-color">Loading Products...</p>
            </div>
        </div>
    )
}

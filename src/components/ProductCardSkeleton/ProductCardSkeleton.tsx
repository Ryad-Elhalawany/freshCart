import { Skeleton } from "@/components/ui/skeleton";

export function ProductCardSkeleton() {
    return (
        <div className="mx-auto flex flex-col border border-gray-200 rounded-lg overflow-hidden bg-white w-full relative shadow">

            {/* icons */}
            <div className="absolute inset-e-5 top-5 flex flex-col gap-2">
                <Skeleton className="w-8 h-8 rounded-full animate-pulse" />
                <Skeleton className="w-8 h-8 rounded-full animate-pulse" />
                <Skeleton className="w-8 h-8 rounded-full animate-pulse" />
            </div>

            {/* image */}
            <Skeleton className="w-full aspect-square animate-pulse" />

            {/* details */}
            <div className="p-4 space-y-3">

                {/* category */}
                <Skeleton className="h-3 w-1/3 animate-pulse" />

                {/* title */}
                <Skeleton className="h-4 w-2/3 animate-pulse" />

                {/* rating */}
                <div className="flex items-center gap-2">
                    <Skeleton className="h-4 w-24 animate-pulse" />
                    <Skeleton className="h-4 w-10 animate-pulse" />
                </div>

                {/* price + button */}
                <div className="flex justify-between items-center">
                    <Skeleton className="h-5 w-24 animate-pulse" />
                    <Skeleton className="h-10 w-10 rounded-full animate-pulse" />
                </div>

            </div>
        </div>
    );
}
"use client"

import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { handleAddAddress } from "./AddAddress.action"
import { useRouter } from "next/navigation"
import { useState } from "react"

type FormData = {
    name: string
    details: string
    phone: string
    city: string
}

export default function AddAddress({ children }: { children: React.ReactNode }) {
    const { register, handleSubmit, reset } = useForm<FormData>()
    const myRouter = useRouter()
    const [open, setOpen] = useState(false)

    async function addressData(data: FormData) {
        await handleAddAddress(data)
        reset()
        setOpen(false)
        myRouter.refresh()
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button className="inline-flex cursor-pointer items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors shadow-lg shadow-green-600/25">{children}</button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md rounded-[24px] p-6">
                <form onSubmit={handleSubmit(addressData)}>
                    <DialogHeader className="mb-4">
                        <DialogTitle className="text-lg font-semibold">
                            Add New Address
                        </DialogTitle>
                    </DialogHeader>

                    <div className="space-y-4">
                        <div className="space-y-1">
                            <Label>Address Name</Label>
                            <Input required
                                {...register("name")}
                                placeholder="e.g. Home, Office"
                                className="h-11 rounded-[14px]"
                            />
                        </div>

                        <div className="space-y-1">
                            <Label>Full Address</Label>
                            <textarea required
                                {...register("details")}
                                placeholder="Street, building, apartment..."
                                className="w-full resize-none h-24 rounded-[16px] border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <div className="flex gap-3">
                            <div className="w-full space-y-1">
                                <Label>Phone Number</Label>
                                <Input required
                                    {...register("phone")}
                                    placeholder="01xxxxxxxxx"
                                    className="h-11 rounded-[14px]"
                                />
                            </div>

                            <div className="w-full space-y-1">
                                <Label>City</Label>
                                <Input required
                                    {...register("city")}
                                    placeholder="Cairo"
                                    className="h-11 rounded-[14px]"
                                />
                            </div>
                        </div>
                    </div>

                    <DialogFooter className="mt-6 flex gap-3">
                        <DialogClose asChild>
                            <Button
                                type="button"
                                variant="outline"
                                className="flex-1 h-11 rounded-[14px] cursor-pointer">
                                Cancel
                            </Button>
                        </DialogClose>

                        <Button
                            type="submit"
                            className="flex-1 h-11 rounded-[14px] bg-green-600 hover:bg-green-700 cursor-pointer">
                            Add Address
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
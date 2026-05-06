"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { zodResolver } from "@hookform/resolvers/zod"
import { UserPlus } from "lucide-react"
import Link from "next/link"
import { Controller, useForm } from "react-hook-form"
import handleUserRegister from "./Register.action"
import { schema } from "./Register.schema"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export default function RegisterForm() {
    const Navigation = useRouter()

    async function sendUserData(userData: {}) {
        toast.promise(handleUserRegister(userData), {
            loading: 'loading ...',
            success: function (response) {
                if (response === 'success') {
                    Navigation.push('/login')
                }
                return response
            },
            error: function (error) {
                return error?.message || 'Something went wrong'
            },
            position: 'top-right'
        }
        )


    }

    const { handleSubmit, control } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            rePassword: '',
            phone: '',
            terms: false
        },
        resolver: zodResolver(schema)
    })

    return (
        <form className="flex flex-col gap-7" onSubmit={handleSubmit(sendUserData)}>

            {/* Name */}
            <Controller
                name="name"
                control={control}
                render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid} className="gap-2">
                        <FieldLabel className="font-medium text-[#364153] text-base" htmlFor={field.name}>Name*</FieldLabel>
                        <Input
                            {...field}
                            id={field.name}
                            aria-invalid={fieldState.invalid}
                            placeholder="Ali"
                            autoComplete="off"
                            type="text"
                            required
                            className="px-3 py-2.5 rounded-[6px] bg-white font-medium focus-visible:ring-0 focus-visible:border-green-600 text-base! placeholder:text-[#36415380] w-full h-full"
                        />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                )} />
            {/* Name */}

            {/* Email */}
            <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid} className="gap-2">
                        <FieldLabel className="font-medium text-[#364153] text-base" htmlFor={field.name}>Email*</FieldLabel>
                        <Input
                            {...field}
                            id={field.name}
                            aria-invalid={fieldState.invalid}
                            placeholder="ali@example.com"
                            autoComplete="off"
                            type="email"
                            required
                            className="px-3 py-2.5 rounded-[6px] bg-white font-medium focus-visible:ring-0 focus-visible:border-green-600 text-base! placeholder:text-[#36415380] w-full h-full"
                        />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                )} />
            {/* Email */}

            {/* Password */}
            <Controller
                name="password"
                control={control}
                render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid} className="gap-2">
                        <FieldLabel className="font-medium text-[#364153] text-base" htmlFor={field.name}>Password*</FieldLabel>
                        <Input
                            {...field}
                            id={field.name}
                            aria-invalid={fieldState.invalid}
                            placeholder="create a strong password"
                            autoComplete="off"
                            type="password"
                            required
                            className="px-3 py-2.5 rounded-[6px] bg-white font-medium focus-visible:ring-0 focus-visible:border-green-600 text-base! placeholder:text-[#36415380] w-full h-full"
                        />
                        <FieldDescription className="text-xs font-medium text-[#6A7282]">Must be at least 8 characters with numbers and symbols</FieldDescription>
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                )} />
            {/* Password */}

            {/* Confirm Password */}
            <Controller
                name="rePassword"
                control={control}
                render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid} className="gap-2">
                        <FieldLabel className="font-medium text-[#364153] text-base" htmlFor={field.name}>Confirm Password*</FieldLabel>
                        <Input
                            {...field}
                            id={field.name}
                            aria-invalid={fieldState.invalid}
                            placeholder="confirm your password"
                            autoComplete="off"
                            type="password"
                            required
                            className="px-3 py-2.5 rounded-[6px] bg-white font-medium focus-visible:ring-0 focus-visible:border-green-600 text-base! placeholder:text-[#36415380] w-full h-full"
                        />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                )} />
            {/* Confirm Password */}

            {/* Phone Number */}
            <Controller
                name="phone"
                control={control}
                render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid} className="gap-2">
                        <FieldLabel className="font-medium text-[#364153] text-base" htmlFor={field.name}>Phone Number*</FieldLabel>
                        <Input
                            {...field}
                            id={field.name}
                            aria-invalid={fieldState.invalid}
                            placeholder="+1 234 567 8900"
                            autoComplete="off"
                            type="text"
                            required
                            className="px-3 py-2.5 rounded-[6px] bg-white font-medium focus-visible:ring-0 focus-visible:border-green-600 text-base! placeholder:text-[#36415380] w-full h-full"
                        />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                )} />
            {/* Phone Number */}

            {/* Terms of service and privacy policy */}

            <Controller
                name="terms"
                control={control}
                render={({ field, fieldState }) => (
                    <Field orientation="horizontal" className="flex-col items-start">
                        <div className="flex items-center gap-4">
                            <Checkbox checked={field.value || false} onCheckedChange={field.onChange} id="terms-checkbox" name="terms-privacy" className="size-4 rounded-[2.5px] border-[#767676]" />
                            <Label htmlFor="terms-checkbox" className="text-main-color font-medium text-base"><div>I agree to the <Link href='/terms' className="text-[#16A34A]">Terms of Service</Link> and <Link href='privacy-policy' className="text-[#16A34A]">Privacy Policy</Link> *</div></Label>
                        </div>
                        {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                        )}
                    </Field>
                )}
            />

            {/* Terms of service and privacy policy */}

            {/* Create Account Button */}

            <Button size={"lg"} className="w-full rounded-[8px] bg-green-600 hover:bg-green-700 font-semibold text-base duration-200 cursor-pointer">
                <UserPlus />
                <span>Create My Account</span>
            </Button>

            {/* Create Account Button */}

            <p className='pt-10 border-t border-[#D1D5DC4D] font-medium text-center mb-4'>Already have an account? <Link href='/login' className="text-[#16A34A]">Sign In</Link></p>
        </form>
    )
}
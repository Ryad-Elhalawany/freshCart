"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Lock, Star, UserPlus, Users } from "lucide-react"
import Link from "next/link"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from "./Login.schema"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function LoginForm() {
    const MyRouter = useRouter()
    async function handleLogin(userData: {}) {
        toast.promise(signIn('credentials', { ...userData, redirect: false }), {
            loading: 'loading ...',
            success: function () {
                MyRouter.push('/')
                return 'login successfully !'
            },
            error: 'Incorrect Email or Password',
            position: 'top-right'
        })
    }

    const { handleSubmit, control } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: zodResolver(schema),
    })

    return (
        <>
            <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col gap-6">

                {/* Email */}
                <Controller
                    name="email"
                    control={control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid} className="gap-2">
                            <FieldLabel className="font-bold text-[#364153]" htmlFor={field.name}>Email Address</FieldLabel>
                            <Input
                                {...field}
                                id={field.name}
                                aria-invalid={fieldState.invalid}
                                placeholder="Enter your email"
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
                            <FieldLabel className="font-bold text-[#364153] justify-between" htmlFor={field.name}>
                                Password
                                <Link href='/forget-password' className='text-sm font-medium text-green-600'>Forgot Password?</Link>
                            </FieldLabel>
                            <Input
                                {...field}
                                id={field.name}
                                aria-invalid={fieldState.invalid}
                                placeholder="Enter your password"
                                autoComplete="off"
                                type="password"
                                required
                                className="px-3 py-2.5 rounded-[6px] bg-white font-medium focus-visible:ring-0 focus-visible:border-green-600 text-base! placeholder:text-[#36415380] w-full h-full"
                            />
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )} />
                {/* Password */}

                {/* Keep signed in  */}

                {/* <Controller
                    name="keepSigned"
                    control={control}
                    render={({ field, fieldState }) => (
                        <Field orientation="horizontal" className="flex-col items-start">
                            <div className="flex items-center gap-3">
                                <Checkbox checked={field.value || false} onCheckedChange={field.onChange} id="keepSigned" name="keepSigned" className="size-4 rounded-[2.5px] border-[#767676]" />
                                <Label htmlFor="keepSigned" className="text-main-color font-medium text-sm">Keep me signed in</Label>
                            </div>
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                /> */}

                {/* Keep signed in  */}

                {/* Login Button */}
                <Button size={"lg"} className="w-full rounded-[12px] bg-green-600 hover:bg-green-700 font-semibold text-lg duration-200 cursor-pointer py-3 h-full px-4">
                    Sign In
                </Button>
                {/* Login Button */}
            </form>

            <div className="text-center pt-6 border-t border-[#F3F4F6] mt-8 flex flex-col gap-6">
                <p className="text-gray-600">
                    New to FreshCart? <Link href='/register' className='font-semibold text-green-600'>Create an account</Link>
                </p>
                <div className="flex items-center gap-6 justify-center">
                    <div className="flex items-center gap-1 text-[#6A7282]">
                        <Lock size={12} />
                        <span className="text-xs font-medium">SSL Secured</span>
                    </div>
                    <div className="flex items-center gap-1 text-[#6A7282]">
                        <Users fill="currentColor" size={12} />
                        <span className="text-xs font-medium">50K+ Users</span>
                    </div>
                    <div className="flex items-center gap-1 text-[#6A7282]">
                        <Star fill="currentColor" size={12} />
                        <span className="text-xs font-medium">4.9 Rating</span>
                    </div>
                </div>
            </div>
        </>
    )
}

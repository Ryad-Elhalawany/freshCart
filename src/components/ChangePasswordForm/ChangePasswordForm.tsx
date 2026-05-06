"use client"

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleChangePassword } from "@/app/profile/setting/changeUserPassword.action";
import { useState } from "react";

const schema = z.object({
    currentPassword: z.string().min(1, "Current password is required"),
    password: z
        .string()
        .min(6, "Password must be at least 6 characters"),
    rePassword: z.string(),
})
    .refine((data) => data.password === data.rePassword, {
        message: "Passwords do not match",
        path: ["rePassword"],
    });

export default function ChangePasswordForm() {
    const [errorMessage, setErrorMessage] = useState(false);
    const [message, setMessage] = useState("");
    const [statusMsg, setStatusMsg] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(schema),
    });

    async function handleChangeUserPassword(data: any) {
        const res = await handleChangePassword(data)
        setMessage(res.message);
        setStatusMsg(res.statusMsg);
        setErrorMessage(true);
    };

    return (
        <>
            {errorMessage && (
                <div
                    className={`p-4 mb-2 rounded-xl border ${statusMsg === "fail"
                        ? "bg-red-100 text-red-600 border-red-200"
                        : "bg-green-100 text-green-600 border-green-200"
                        }`}
                >
                    {message}
                </div>
            )}
            <form onSubmit={handleSubmit(handleChangeUserPassword)} className="space-y-5">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current Password
                    </label>
                    <input
                        type="password"
                        placeholder="Enter your current password"
                        {...register("currentPassword")}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200" />
                    {errors.currentPassword && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.currentPassword.message}
                        </p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        New Password
                    </label>
                    <input
                        type="password"
                        placeholder="Enter your new password"
                        {...register("password")}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200" />
                    {errors.password && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.password.message}
                        </p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Confirm New Password
                    </label>
                    <input
                        type="password"
                        placeholder="Confirm your new password"
                        {...register("rePassword")}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200" />
                    {errors.rePassword && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.rePassword.message}
                        </p>
                    )}
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 py-3 rounded-xl bg-amber-600 text-white cursor-pointer">
                        Change Password
                    </button>
                </div>
            </form>
        </>
    );
}
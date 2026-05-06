"use client"

import { handleUpdateData } from "@/app/profile/setting/updateUserData.action";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const updateUserSchema = z.object({
    name: z
        .string()
        .trim()
        .min(3, "Name must be at least 3 characters")
        .regex(/^[A-Za-z\s]+$/, "Name must contain only letters"),

    email: z
        .string()
        .email("Invalid email format"),

    phone: z
        .string()
        .regex(/^01[0-2,5]{1}[0-9]{8}$/, "Invalid Egyptian phone number"),
});

type UpdateUserType = z.infer<typeof updateUserSchema>;

export default function UpdateUserDataForm() {
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<UpdateUserType>({
        resolver: zodResolver(updateUserSchema)
    });

    async function handleUpdate(data: UpdateUserType) {
        setSuccess("");
        setError("");

        try {
            const res = await handleUpdateData(data);
            if (res?.message === 'success') {
                setSuccess("Profile updated successfully");
            } else {
                setError("Something went wrong");
            }
        } catch (err) {
            setError("Server error, please try again");
        }
    }

    return (
        <form onSubmit={handleSubmit(handleUpdate)}>
            <div className="space-y-5">

                {success && (
                    <div className="bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-xl">
                        {success}
                    </div>
                )}

                {error && (
                    <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-xl">
                        {error}
                    </div>
                )}

                <div>
                    <label className="block mb-2">Full Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        {...register("name")}
                        className="w-full px-4 py-3 border rounded-xl" />
                    {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.name.message}
                        </p>
                    )}
                </div>

                <div>
                    <label className="block mb-2">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your Email"
                        {...register("email")}
                        className="w-full px-4 py-3 border rounded-xl" />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                <div>
                    <label className="block mb-2">Phone</label>
                    <input
                        type="tel"
                        placeholder="01xxxxxxxxx"
                        {...register("phone")}
                        className="w-full px-4 py-3 border rounded-xl" />
                    {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.phone.message}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    className="bg-green-600 text-white px-6 py-3 rounded-xl cursor-pointer">
                    Save Changes
                </button>
            </div>
        </form>
    )
}
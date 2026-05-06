"use client"

import PageTitle from "@/components/PageTitle/PageTitle";
import { ChevronRight, LocationEdit, Settings, User2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function layout({ children }: { children: any }) {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;

    return (
        <>
            <PageTitle breadCrumb="My Account" pageTitle="My Account" titleDescription="Manage your addresses and account settings" pageBackground="bg-green-600 px-4! py-10!" titleIcon={<User2 size={30} />} />
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                    <div className="w-full lg:w-72 shrink-0">
                        <nav className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                            <div className="p-4 border-b border-gray-100">
                                <h2 className="font-bold text-gray-900">My Account</h2>
                            </div>
                            <ul className="p-2">
                                <li className="cursor-pointer">
                                    <Link className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
          ${isActive("/profile/addresses")
                                            ? "bg-green-50 text-green-700"
                                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                        }`} href='/profile/addresses'>
                                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${isActive("/profile/addresses") ? 'text-white bg-green-600' : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'}`}>
                                            <LocationEdit size={20} />
                                        </div>
                                        <span className="font-medium flex-1">
                                            My Addresses
                                        </span>
                                        <ChevronRight />
                                    </Link>
                                </li>
                                <li className="cursor-pointer">
                                    <Link className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
          ${isActive("/profile/setting")
                                            ? "bg-green-50 text-green-700"
                                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                        }`} href='/profile/setting'>
                                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${isActive("/profile/setting") ? 'text-white bg-green-600' : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'}`}>
                                            <Settings size={20} />
                                        </div>
                                        <span className="font-medium flex-1">
                                            Settings
                                        </span>
                                        <ChevronRight />
                                    </Link>
                                </li>


                            </ul>
                        </nav>
                    </div>
                    <div className="flex-1 min-w-0">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

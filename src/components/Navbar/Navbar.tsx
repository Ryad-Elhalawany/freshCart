"use client"

import * as React from "react"
import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Logo from '@images/freshCart.svg';
import Image from 'next/image';
import { Contact, Headset, Heart, IdCard, LogIn, Menu, Package, Search, Settings, ShoppingCart, User, UserPlus, X } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { CartCreatedContext } from "@/context/CartContext/CartContext";
import { getUserCart } from "@/app/cart/getUserCart.action";
import { WishlistCreatedContext } from "@/context/WishlistContext/WishlistContext";
import { getUserWishlist } from "@/app/wishlist/getUserWishlist.action";

export default function NavigationMenuDemo() {
    const { data } = useSession()
    const MyRouter = useRouter()
    const { cartCount, setCartCount } = React.useContext(CartCreatedContext)
    const { wishlistCount, setWishlistCount } = React.useContext(WishlistCreatedContext)
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

    async function handleLogOut() {
        await signOut({ redirect: false })
        MyRouter.push('/login')
    }

    React.useEffect(() => {
        async function fetchData() {
            if (!data) {
                setCartCount(0)
                setWishlistCount(0)
            }
            else {
                const cart = await getUserCart()
                const wishlist = await getUserWishlist()

                setCartCount(cart.numOfCartItems)
                setWishlistCount(wishlist.count)
            }
        }
        fetchData()
    }, [data])

    return (
        <div className="nav w-full p-4 sticky z-50 top-0 bg-white shadow overflow-x-clip">
            <div className="container mx-auto">
                <NavigationMenu className="max-w-none justify-between gap-2 md:gap-8 w-full" viewport={false}>
                    {/* Navbar Logo */}
                    <Link href='/'>
                        <Image src={Logo} alt="FreshCart Logo" className="min-w-auto" />
                    </Link>
                    {/* Navbar Logo */}

                    {/* search bar */}
                    <form className="relative max-w-2xl w-xl hidden lg:flex">
                        <Input className="p-5 bg-white border border-[#E5E7EB] focus-visible:border focus-visible:border-green-600 focus-visible:ring-0" type="search" placeholder="Search for products, brands and more..." />
                        <Button className="absolute inset-e-1 top-0.5 bg-green-600 size-9 cursor-pointer hover:bg-green-700"><Search /></Button>
                    </form>
                    {/* search bar */}

                    {/* List Of Links */}
                    <NavigationMenuList className="gap-6">
                        <NavigationMenuItem className="hidden xl:flex">
                            <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} p-0`}>
                                <Link className="hover:text-green-600" href="/">Home</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem className="hidden xl:flex">
                            <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} p-0`}>
                                <Link className="hover:text-green-600" href="/products">Shop</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem className="hidden xl:flex">
                            <NavigationMenuTrigger className="p-0">Categories</NavigationMenuTrigger>
                            <NavigationMenuContent>

                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link className="hover:text-green-600" href="/categories">All Categories</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link className="hover:text-green-600" href="/categories/6439d2d167d9aa4ca970649f">Electronics</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link className="hover:text-green-600" href="/categories/6439d58a0049ad0b52b9003f">Women's Fashion</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link className="hover:text-green-600" href="/categories/6439d5b90049ad0b52b90048">Men's Fashion</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link className="hover:text-green-600" href="/categories/6439d30b67d9aa4ca97064b1">Beauty & Health</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem className="hidden xl:flex">
                            <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} p-0`}>
                                <Link className="hover:text-green-600" href="/brands">Brands</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                    {/* List Of Links */}

                    {/* List Items on right part */}
                    <NavigationMenuList className="gap-2">
                        <NavigationMenuItem className="hidden lg:flex pe-3 border-e border-[#E5E7EB]">
                            <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} p-0`}>
                                <div className="flex items-center gap-2">
                                    <div className="size-10 flex items-center justify-center bg-green-50 rounded-full">
                                        <Headset className="text-green-600" />
                                    </div>
                                    <div className="flex flex-col text-xs">
                                        <span className="text-main-color">Support</span>
                                        <span>24/7 Help</span>
                                    </div>
                                </div>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} p-0`}>
                                {wishlistCount > 0 ? <Link className="hover:text-green-400 hover:bg-muted size-11! rounded-full relative p-2.5 transition-colors group" href="/wishlist"><Heart className="size-5!" /><span className="absolute top-0.5 right-0.5 size-4.5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">{wishlistCount}</span></Link> : <Link className="hover:text-green-400 hover:bg-muted size-11! rounded-full" href="/wishlist"><Heart className="size-5!" /></Link>}
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} p-0`}>
                                {cartCount > 0 ? <Link href="/cart" className="hover:text-green-400 hover:bg-muted size-11! rounded-full relative p-2.5 transition-colors group"><ShoppingCart className="size-5!" /><span className="absolute top-0.5 right-0.5 size-4.5 rounded-full bg-green-600 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">{cartCount}</span></Link> : <Link href="/cart" className="hover:text-green-400 hover:bg-muted size-11! rounded-full"><ShoppingCart className="size-5!" /></Link>}
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem className="hidden lg:flex">
                            {data ? <><NavigationMenuTrigger className="p-0 [&>svg:last-child]:hidden"><Menu color="white" className="w-5 h-4 cursor-pointer" /><IdCard /></NavigationMenuTrigger>
                                <NavigationMenuContent className="left-auto right-0">
                                    <div className="flex flex-col items-start justify-center">
                                        <div className='flex items-center gap-3 p-4 border-b border-gray-100'>
                                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                                <User className="text-xl text-green-600" />
                                            </div>
                                            <div>
                                                <span className="text-sm font-semibold text-gray-800 truncate">{data.user?.name}</span>
                                                <p className="text-xs text-gray-400 truncate">{data.user?.email}</p>
                                            </div>
                                        </div>
                                        <Link href="/profile" className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors">
                                            <User size={16} />
                                            My Profile
                                        </Link>
                                        <Link href="" className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors">
                                            <Package size={16} />
                                            My Orders
                                        </Link>
                                        <Link href="/wishlist" className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors">
                                            <Heart size={16} />
                                            My Wishlist
                                        </Link>
                                        <Link href="/profile/addresses" className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors">
                                            <Contact size={16} />
                                            Addresses
                                        </Link>
                                        <Link href="/profile/setting" className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors">
                                            <Settings size={16} />
                                            Setting
                                        </Link>
                                        <div className="mt-2 pt-1 border-t border-gray-100 w-full">
                                            <button onClick={() => handleLogOut()} className='flex items-center gap-1.5 text-red-600 text-sm hover:bg-red-100 rounded-md cursor-pointer px-4 py-2.5 w-full '>
                                                <LogIn className='w-4 h-3' />
                                                <span className='font-medium'>Sign Out</span>
                                            </button>
                                        </div>
                                    </div>
                                </NavigationMenuContent></>
                                :
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link href="/login" className="bg-green-600 text-white py-2.5 px-5 text-sm"> <UserPlus /> Sign in</Link>
                                </NavigationMenuLink>
                            }
                        </NavigationMenuItem>
                        {/* List Items on right part */}

                        <NavigationMenuItem className="lg:hidden flex">
                            <button type="button"
                                onClick={() => setMobileMenuOpen(true)}
                                className="bg-green-600 size-10 flex items-center justify-center rounded-full">
                                <Menu color="white" className="w-5 h-5 cursor-pointer" />
                            </button>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className={`fixed inset-0 z-999 lg:hidden transition-all duration-300 ${mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
                {/* Overlay */}
                <div onClick={() => setMobileMenuOpen(false)} className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100" : "opacity-0"}`} />

                {/* Sidebar */}
                <div className={`absolute top-0 right-0 h-full w-[85%] max-w-90 bg-white shadow-2xl overflow-y-auto transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                    {/* Sidebar Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-100">
                        <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                            <Image src={Logo} alt="FreshCart Logo" className="w-40" />
                        </Link>

                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="size-10 rounded-full bg-gray-100 flex items-center justify-center"
                        >
                            <X className="size-5 text-gray-600 cursor-pointer" />
                        </button>
                    </div>

                    {/* Search */}
                    <div className="p-4 border-b border-gray-100">
                        <form className="relative">
                            <Input
                                className="p-5 bg-white border border-[#E5E7EB] focus-visible:border-green-600 focus-visible:ring-0"
                                type="search"
                                placeholder="Search products..."
                            />
                            <div className="absolute inset-e-1 top-0.5 bg-green-600 size-9 cursor-pointer hover:bg-green-700 flex items-center justify-center rounded-full text-white">
                                <Search className="size-4" />
                            </div>
                        </form>
                    </div>

                    {/* Main Links */}
                    <nav className="p-4">
                        <ul className="space-y-5 text-gray-700 font-medium">
                            <li>
                                <Link
                                    href="/"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block hover:text-green-600"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/products"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block hover:text-green-600"
                                >
                                    Shop
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/categories"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block hover:text-green-600"
                                >
                                    Categories
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/brands"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block hover:text-green-600"
                                >
                                    Brands
                                </Link>
                            </li>
                        </ul>

                        <div className="my-6 border-t border-gray-100" />

                        {/* Wishlist and Cart */}
                        <div className="space-y-4">
                            <Link
                                href="/wishlist"
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-3 text-gray-700 font-medium"
                            >
                                <span className="size-10 rounded-full bg-red-50 flex items-center justify-center">
                                    <Heart className="size-5 text-red-500" />
                                </span>
                                Wishlist
                            </Link>

                            <Link
                                href="/cart"
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-3 text-gray-700 font-medium"
                            >
                                <span className="size-10 rounded-full bg-green-50 flex items-center justify-center">
                                    <ShoppingCart className="size-5 text-green-600" />
                                </span>
                                Cart
                            </Link>
                        </div>

                        <div className="my-6 border-t border-gray-100" />

                        {/* Auth Buttons */}
                        {data ? (
                            <div className="space-y-3">
                                <button
                                    onClick={() => {
                                        setMobileMenuOpen(false)
                                        handleLogOut()
                                    }}
                                    className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 py-3 rounded-xl font-semibold cursor-pointer"
                                >
                                    <LogIn className="size-5" />
                                    Sign Out
                                </button>
                            </div>
                        ) : (
                            <div className="flex gap-3">
                                <Link
                                    href="/login"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex-1 text-center bg-green-600 text-white py-3 rounded-xl font-semibold"
                                >
                                    Sign In
                                </Link>

                                <Link
                                    href="/register"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex-1 text-center border border-green-600 text-green-600 py-3 rounded-xl font-semibold"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        )}

                        {/* Help Box */}
                        <Link
                            href="/contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="mt-6 flex items-center gap-3 p-4 rounded-2xl bg-gray-50"
                        >
                            <span className="size-11 rounded-full bg-green-100 flex items-center justify-center">
                                <Headset className="size-5 text-green-600" />
                            </span>

                            <div>
                                <p className="text-sm font-semibold text-gray-700">Need Help?</p>
                                <p className="text-sm font-medium text-green-600">Contact Support</p>
                            </div>
                        </Link>
                    </nav>
                </div>
            </div>
        </div >
    )
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="flex flex-col gap-1 text-sm">
                        <div className="leading-none font-medium">{title}</div>
                        <div className="line-clamp-2 text-muted-foreground">{children}</div>
                    </div>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}

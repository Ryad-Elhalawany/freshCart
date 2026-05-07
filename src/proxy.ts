import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"
import { getUserToken } from "./app/myUtil";

export async function proxy(req: NextRequest) {
    const token = await getUserToken()
    const pathName = req.nextUrl.pathname
    const isAuth: boolean = pathName === '/login' || pathName === '/register';


    if (!token && pathName === '/cart') {
        return NextResponse.redirect(new URL('/login', req.url))
    }

    if (!token && pathName === '/wishlist') {
        return NextResponse.redirect(new URL('/login', req.url))
    }

    if (!token && pathName.startsWith('/profile')) {
        return NextResponse.redirect(new URL('/login', req.url))
    }

    if (pathName === '/profile') {
        return NextResponse.redirect(new URL('/profile/addresses', req.url))
    }

    if (isAuth) {
        if (token) {
            return NextResponse.redirect(new URL('/', req.url))
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/login', '/register', '/wishlist', '/cart', '/profile/:path*']
}
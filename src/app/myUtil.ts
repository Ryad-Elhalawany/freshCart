import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getUserToken() {
    const myCookies = await cookies()
    const sessionToken = myCookies.get('__Secure-next-auth.session-token')?.value;

    const token = await decode({ token: sessionToken, secret: process.env.NEXTAUTH_SECRET || "" })

    return token?.credentialsToken;
}
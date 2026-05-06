import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
    id: string;
    role?: string;
}

export const nextauthConfig: NextAuthOptions = {
    providers: [
        Credentials({
            name: 'FreshCart Login',
            credentials: {
                email: { type: "email" },
                password: { type: 'password' },
            },
            authorize: async function (credentials: {} | null | undefined) {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/signin`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(credentials)
                })
                const data = await response.json()
                if (data.message === 'success') {
                    const decoded = jwtDecode<JwtPayload>(data.token)
                    const { role, ...userData } = data.user
                    return { ...userData, id: decoded.id, userToken: data.token }
                }
                return null
            }
        })
    ],
    pages: {
        signIn: '/login',
    },
    callbacks: {
        jwt: function ({ user, token }) {
            if (user) {
                token.credentialsToken = (user as any).userToken;
                token.userId = user.id
            }
            return token
        },
        session: function ({ session, token }: any) {
            session.user.id = token.userId
            return session
        }
    },
}
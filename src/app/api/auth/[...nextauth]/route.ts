import { nextauthConfig } from "@/app/nextauth";
import NextAuth from "next-auth";

const routerHandlerObject = NextAuth(nextauthConfig)

export { routerHandlerObject as GET, routerHandlerObject as POST }
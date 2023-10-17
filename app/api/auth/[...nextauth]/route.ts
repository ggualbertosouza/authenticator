import { authOptions } from "@/lib/auth/auth";
import NextAuth from "next-auth/next";

const handler = NextAuth(authOptions)

export {handler as POST, handler as GET}
import NextAuth from "next-auth/next";

const handler = NextAuth()

export {handler as POST, handler as GET}
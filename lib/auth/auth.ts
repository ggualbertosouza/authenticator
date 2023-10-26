import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import {PrismaAdapter} from '@auth/prisma-adapter'
import { db } from "@/lib/auth/db";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db as any),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "username", type: "text" },
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req): Promise<any > {
        const user = { email: "teste@teste.com", password: "12345678" };

        if (user) {
          return user;
        }
        return null;
      }}),
  ],
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: 'jwt'
  },
  secret: process.env.SECRET,
  debug: process.env.NODE_ENV === 'development',
};

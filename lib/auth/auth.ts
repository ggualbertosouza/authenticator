import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
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
      async authorize(credentials) {
        // const response = await fetch("http:localhost:3000/login", {
        //   method: "POST",
        //   headers: {
        //     "Content-type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     email: credentials?.email,
        //     passsword: credentials?.password,
        //   }),
        // });

        // const user = await response.json();

        //   if (user && response.ok) {
        //     return user;
        //   }
        //   return null;
        // },

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
};

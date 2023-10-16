import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";


export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {label: 'email', type: 'email'},
                password: { label: 'password', type: 'password'}
            },
        async authorize(credentials) {
            const user = {email: 'teste@teste.com', password: '123456'}

            if(user){
                return user
            }
            return null
        }
        }),
    ],
}

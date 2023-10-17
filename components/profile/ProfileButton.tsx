'use client'
import { Button } from "@/components/ui/button"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export const ProfileButton = () => {
    const {data: session, status} = useSession()

    const {push} = useRouter()

   if(status === 'authenticated'){
    return(
        <>
        <Link href='/user'>Profile</Link>
        </>
    )
   }

    return(
        <>
        <Button onClick={() => push('/signup')}>
            Register
        </Button>
        </>
    )
}
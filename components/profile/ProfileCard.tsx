'use client'

import { useSession } from "next-auth/react"

export const ProfileCard = () => {
    const {data: session} = useSession()

    return(
        <section className="flex flex-col justify-center items-center gap-4 ">
            <img src={session?.user?.image} width={100} height={100} className="rounded-full overflow-hidden"/>
            <h2 className="text-xl font-bold">{session?.user?.email}</h2>
        </section>
    )
}
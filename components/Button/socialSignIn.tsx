import Image from "next/image"
import googlelogo from '@/public/google.png'
import { signIn } from "next-auth/react"

export const GoogleSignInButton = () => {
    const handleClick = () => signIn('google', {callbackUrl: 'http://localhost:3000/'})

    return(
        <button
        onClick={handleClick}
        className="flex items-center justify-center p-2 transition-colors duration-300 bg-white border-2 border-black text-black rounded-full focus:shadow-outline hover:bg-slate-400"
        >
            <Image src={googlelogo} alt="Google Logo" width={20} height={20}/>
        </button>
    )
}


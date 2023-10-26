import {db as prisma} from '@/lib/auth/db'

import  {NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest){

    const data = await request.json()
    const { name, email, password } = data
    console.log('router handler', data)

    return NextResponse.json({message: 'teste'})
}


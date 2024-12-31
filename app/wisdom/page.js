import React from 'react'
import Container from '../components/Container'
import { MoveLeft } from 'lucide-react'
import Link from 'next/link'
import NavItems from '../components/NavItems'
import Wisdom from '../components/Wisdom'

const page = () => {
    return (
        <Container className='flex flex-col gap-4 items-start justify-center h-screen'>
            <div className='flex items-center justify-between w-full'>
            <div className='flex gap-5'>
                <Link href="/">
                    <MoveLeft />
                </Link>
                <h1 className='md:text-xl text-lg font-medium text-darkTxt'>Timeless Wisdom</h1>
            </div>
            <NavItems />
            </div>
            <p className='md:text-lg text-md text-lightTxt'>{"What's your mood today? (and please don't overuse it)"}</p>
            <Wisdom />
        </Container>
    )
}

export default page
"use client"
import React, { useRef } from 'react'
import Container from '../components/Container'
import { MoveLeft } from 'lucide-react'
import Link from 'next/link'
import NavItems from '../components/NavItems'
import Wisdom from '../components/Wisdom'

const page = () => {
    const wisdomRef = useRef();
    return (
        <Container className='flex flex-col gap-4 items-start justify-center h-screen'>
            <div className='flex items-center justify-between w-full'>
            <div className='flex gap-5'>
                <Link href="/">
                    <MoveLeft />
                </Link>
                <h1 className='md:text-xl text-lg font-medium text-darkTxt'>Timeless Wisdom</h1>
            </div>
            <NavItems wisdom={false} refresh={true} onRefresh={() => wisdomRef.current?.refresh()} />
            </div>
            <p className='md:text-lg text-md text-lightTxt'>{"(please don't overuse it)"}</p>
            <Wisdom ref={wisdomRef} />
        </Container>
    )
}

export default page
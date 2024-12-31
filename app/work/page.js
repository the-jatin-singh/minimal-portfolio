import React from 'react'
import Container from '../components/Container'
import { MoveLeft } from 'lucide-react'
import Link from 'next/link'
import Work from '../components/Work'
import NavItems from '../components/NavItems'
import SpecialAnchorTag from '../components/SpecialAnchorTag'

const page = () => {
    return (
        <Container className='flex flex-col gap-4 items-start justify-center h-screen'>
            <div className='flex items-center justify-between w-full'>
            <div className='flex gap-5'>
                <Link href="/">
                    <MoveLeft />
                </Link>
                <h1 className='md:text-xl text-lg font-medium text-darkTxt'>Work</h1>
            </div>
            <NavItems />
            </div>
            <p className='md:text-lg text-md text-lightTxt'>Work in progress <SpecialAnchorTag href="https://old-jatin-singh.vercel.app/">Please head to Old website</SpecialAnchorTag></p>
            
        </Container>
    )
}

export default page
import { Sparkle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NavItems = () => {
  return (
    <div className='flex items-center gap-5'>
        <Link href="/wisdom">
          <Sparkle size={17} className='hover:animate-bump' />
        </Link>
    </div>
  )
}

export default NavItems
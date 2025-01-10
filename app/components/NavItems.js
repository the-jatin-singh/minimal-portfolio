import { Radiation, Sparkle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NavItems = ({wisdom=true}) => {
  return (
    <div className='flex items-center gap-5'>
      {wisdom && (
        <Link href="/wisdom">
          <Sparkle size={17} className='hover:animate-bump' />
        </Link>
      )}
        {/* <Link href="/wisdom">
          <Radiation size={17} className='hover:animate-bump' />
        </Link> */}
    </div>
  )
}

export default NavItems
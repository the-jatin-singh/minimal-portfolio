import { PocketKnife, Radiation, RefreshCw, Sparkle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NavItems = ({ wisdom = true, refresh = false, onRefresh = ()=>{} }) => {
  return (
    <div className='flex items-center gap-5'>
      <Link href="https://time-savers.vercel.app/" target='_blank'>
          <PocketKnife size={17} className='hover:animate-bump' />
        </Link>
      {wisdom && (
        <Link href="/wisdom">
          <Sparkle size={17} className='hover:animate-bump' />
        </Link>
      )}
      {refresh && (
        <button onClick={onRefresh}>
          <RefreshCw size={17} className='hover:animate-bump' />
        </button>
      )}
    </div>
  )
}

export default NavItems
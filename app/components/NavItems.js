"use client";
import { Menu, Plus, Radiation, Sparkle, X } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

const NavItems = ({ wisdom = true }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='relative flex flex-row items-center gap-5'>
      {menuOpen ? (
        <X size={17} onClick={toggleMenu} className='cursor-pointer text-lightTxt hover:text-darkTxt' />
      ) : (
        <Menu size={17} onClick={toggleMenu} className='cursor-pointer text-darkTxt' />
      )}
      {menuOpen && (
        <div className='absolute right-2 flex items-center gap-3 animate-slide-left'>
          {wisdom && (
            <Link href="/wisdom">
              <Sparkle size={17} className='hover:animate-bump' />
            </Link>
          )}
          <Link href="/wisdom">
            <Radiation size={17} className='hover:animate-bump' />
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavItems;
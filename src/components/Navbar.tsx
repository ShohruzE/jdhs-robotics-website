'use client';

import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { usePathname } from 'next/navigation';

import logoWithText from '../../public/images/2024-frc-333-logo-with-text.png';

import DropdownMenu from './ui/DropdownMenu';

const Navbar = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const pathname = usePathname();
    console.log(pathname);

  return (
    <div>
      <section className="bg-primary w-full overflow-hidden text-secondary p-4">
        <div className="container mx-auto">
          <nav className="flex justify-between items-center gap-20">
            <div className="logo">
              <Link href="/">
                <Image 
                src={logoWithText} 
                alt="FRC 333"
                width={131}
                height={52} />
              </Link>
            </div>

            <div>
              <ul className="md:flex justify-end items-center flex-1 gap-16 text-xl font-bold">
                <li>
                  <Link href="/" className={`pb-1 hover:text-accent ${pathname === "/" ? "text-tertiary border-b-[3px] border-tertiary" : ""}`}>HOME</Link>
                </li>
                <li>
                  <Link href="/about" className={`pb-1 hover:text-accent ${pathname === "/about" ? "text-tertiary border-b-[3px] border-tertiary" : ""}`}>ABOUT</Link>
                </li>
                <li>
                  <button 
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    /*onMouseLeave={() => setIsDropdownOpen(false)} */
                  >
                    <Link href="/robots" className={`pb-1 hover:text-accent ${pathname === "/robots" ? "text-tertiary border-b-[3px] border-tertiary" : ""}`}>ROBOTS</Link>
                  </button>
                </li>
                <li>
                  <Link href="https://eversharkny.com/" target="_blank" className="hover:text-accent">MERCH</Link>
                </li>
                <li>
                  <button className="bg-secondary text-primary px-6 py-1 rounded-lg hover:bg-accent">
                    <Link href="#">CONTACT</Link>
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
      {isDropdownOpen && <DropdownMenu isDropdownOpen={isDropdownOpen} setIsDropdownOpen={setIsDropdownOpen} />}
    </div>
    
  )
}

export default Navbar
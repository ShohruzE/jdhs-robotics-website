import React from 'react'
import Image from 'next/image';
import Link from 'next/link'

import logoWithText from '../../public/images/2024-frc-333-logo-with-text.png';

const Navbar = () => {
  return (
    <section className="bg-primary text-secondary p-4">
      <nav className="flex justify-around items-center gap-20">
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
          <ul className="flex justify-center items-center gap-16 text-xl font-bold">
            <li>
              <Link href="/" className="text-tertiary border-b-[3px] border-tertiary pb-1 hover:text-accent focus:text-tertiary focus:border-b-[3px] focus:border-tertiary">HOME</Link>
            </li>
            <li>
              <Link href="/about" className="pb-1 hover:text-accent focus:text-tertiary focus:border-b-[3px] focus:border-tertiary">ABOUT</Link>
            </li>
            <li>
              <Link href="/robots" className="pb-1 hover:text-accent focus:text-tertiary focus:border-b-[3px] focus:border-tertiary">ROBOTS</Link>
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
    </section>
  )
}

export default Navbar
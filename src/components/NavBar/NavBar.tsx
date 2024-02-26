import React from 'react'
import Link from 'next/link'


const NavBar = () => {
  return (
    <header className='header'>

        <Link href="/" className="w-10 h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md">
            <p className='blue-gradient_text'>HB</p>
        </Link>

        <nav className='flex text-lg gap-7 font-medium'>
            <Link href="/About" className="text-blue-500">
                About
            </Link>

            <Link href="/Contact" className="text-blue-500">
                Contact
            </Link>

        </nav>

    </header>
  )
}

export default NavBar
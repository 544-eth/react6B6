import Link from 'next/link'
import React from 'react'

export default function Courses() {
  return (
    <nav>
        <ul className='flex justify-between h-10 bg-red-800 text-white text-2xl'>
            
            <Link href='/'>
                <li>HTML</li>
            </Link>
            <Link href='/'>
                <li>FRONTEND</li>
            </Link>
            <Link href='/'>
                <li>BACKEND</li>
            </Link>
            <Link href='/'>
                <li>JAVASCRIPT</li>
            </Link>
            <Link href='/'>
                <li>DJANGO</li>
            </Link>
            
        </ul>
    </nav>
  )
  
}

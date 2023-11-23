import Image from 'next/image'
import React from 'react'
import pic from '../img/to.png'

export default function Main() {
  return (
    <div>
        <h1 className='grid'>peter obi libray</h1>
        <section className='grid grid-cols-3 place-items-center'>
        <Image src='/images/peter Obi.jpg' alt='peter obi' width={300} height={500}/>
        <Image src='https://images.unsplash.com/photo-1682686581580-d99b0230064e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='peter obi' width={300} height={500}/>
        <Image src={pic} alt='tobe' width={200} height={200} />
        </section>
    </div>
  )
  
}

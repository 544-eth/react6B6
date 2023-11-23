import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const chukwunwike = Plus_Jakarta_Sans({
   subsets: ['latin'],
  weight: ['700']
  })

export const metadata = {
  title: 'Beginners React class',
  description: 'Frontend 6B6 class 1 on React',
  keywords: 'React, Next, JavaScript'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={chukwunwike.className}>
        <Navbar />
        <div className='min-h-[80vh]'>
          {children}
        </div>
        <Footer />
        </body>
    </html>
  )
}

import Navbar from '@/components/global/Navbar'
import React from 'react'

export default function layout({children}) {
  return (
    <>
    <Navbar/>
    <main className='py-2 px-2'>
        {children}
    </main>
    </>
  )
}

import Navbar from '@/components/global/Navbar'
import React from 'react'

export default function layout({children}) {
  return (
    <>
    <Navbar/>
    <main className='py-2 px-2 mt-18 lg:px-8'>
        {children}
    </main>
    </>
  )
}

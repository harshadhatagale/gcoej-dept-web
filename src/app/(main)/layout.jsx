import Footer from '@/components/global/Footer'
import Navbar from '@/components/global/Navbar'
import NextTopLoader from 'nextjs-toploader'
import React from 'react'

export default function layout({ children }) {
  return (
    <>
      <NextTopLoader
        color="#2299DD"
        initialPosition={0.08}
        crawlSpeed={500}
        height={3}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={100}
        shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        zIndex={1600}
        showAtBottom={false}
      />
      <Navbar />
      <main className='py-2 px-2 mt-18 lg:px-8'>
        {children}
      </main>
      <Footer />
    </>
  )
}

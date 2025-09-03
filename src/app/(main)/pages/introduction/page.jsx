import Heading from '@/components/global/Heading'
import About from '@/components/pages/introduction/About'
import Hero from '@/components/pages/introduction/Hero'
import WhyChooseCE from '@/components/pages/introduction/WhyChooseCE'
import React from 'react'

export default function page() {
  return (
    <>
    <Heading title={"Introduction"}/>
    <section>
        <Hero/>
        <About/>
        <WhyChooseCE/>
    </section>
    </>
  )
}

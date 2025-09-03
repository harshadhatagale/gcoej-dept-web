import React from 'react'
import { Lilita_One } from 'next/font/google'

const font= Lilita_One({
    subsets:['latin'],
    weight:'400'
})
export default function Heading({title}) {
  return (
    <h2 className={`${font.className} p-1 text-2xl lg:text-4xl font-bold`}>{title}</h2>
  )
}

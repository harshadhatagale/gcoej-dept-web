import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
    return (
        <section className="relative w-full min-h-[calc(100vh-150px)] lg:h-96">
            <Image
                src="/assets/images/introduction/intro-2.jpg"
                alt="AI Chip Technology"
                fill
                className="object-cover my-2 rounded-md"
                priority
            />
            <div className="absolute flex-col inset-0 flex items-center justify-center">
                <h3 className="text-white my-2 py-2 rounded-sm bg-blue-600 text-xl md:text-4xl lg:text-5xl font-bold text-center px-4">
                    Welcome to the World of Computer Engineering
                </h3>
                <p className='text-center text-white px-4 my-2 lg:text-lg'>Shaping the Future with Innovation, Technology & Intelligence</p>
                <Button variant={"outline"} className={"cursor-pointer mt-6"} size={"lg"}>Learn More</Button>
            </div>
        </section>
    )
}
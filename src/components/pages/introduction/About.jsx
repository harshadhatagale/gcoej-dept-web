import Image from "next/image"
import React from "react"

export default function About() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="flex-shrink-0">
          <Image
            src="/assets/images/introduction/intro-3.jpg"
            className="rounded-2xl shadow-lg object-cover"
            width={500}
            height={350}
            alt="Software Integration Banner"
          />
        </div>

        {/* Right Text */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            What is <span className="text-blue-600">Computer Engineering?</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
            Computer Engineering is the fusion of <span className="font-semibold">Computer Science</span> 
            and <span className="font-semibold">Electronics Engineering</span>. It focuses on 
            <span className="text-blue-600"> designing</span>, 
            <span className="text-blue-600"> developing</span>, and 
            <span className="text-blue-600"> optimizing</span> hardware and software systems that 
            drive modern technology — from smartphones to AI-powered machines.
          </p>
        </div>
      </div>
    </section>
  )
}

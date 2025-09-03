"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Laptop, Cpu, Globe, Bot } from "lucide-react"

const features = [
  {
    title: "Software Development",
    icon: Laptop,
    description: "Design and develop applications, systems, and solutions that power the digital world.",
  },
  {
    title: "Hardware Design",
    icon: Cpu,
    description: "Create processors, embedded systems, and innovative hardware to drive technology.",
  },
  {
    title: "Networking & Security",
    icon: Globe,
    description: "Build secure networks and protect data in a connected global environment.",
  },
  {
    title: "AI & Robotics",
    icon: Bot,
    description: "Explore artificial intelligence and robotics to shape the future of automation.",
  },
]

export default function WhyChooseCE() {
  return (
    <section className="py-2">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Why Choose <span className="text-blue-600">Computer Engineering?</span>
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Computer Engineering offers endless possibilities by blending hardware, software,
            and innovation to create tomorrow’s technology.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group bg-card hover:shadow-xl transition-all duration-300 rounded-2xl border border-gray-200"
            >
              <CardHeader className="flex flex-col items-center justify-center space-y-3">
                <div className="p-4 rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                  <feature.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-lg font-semibold text-center">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 text-sm text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

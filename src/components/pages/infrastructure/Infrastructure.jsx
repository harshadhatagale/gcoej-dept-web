"use client"
import React from "react"
import { motion } from "framer-motion"
import { Building, Laptop, BookOpen, Network, FlaskConical } from "lucide-react"

const facilities = [
  {
    title: "State-of-the-Art Classrooms",
    desc: "Spacious, tech-enabled classrooms with smart boards and interactive learning tools.",
    icon: <Building className="w-10 h-10 text-blue-500" />,
  },
  {
    title: "Computer Laboratories",
    desc: "High-performance labs equipped with the latest hardware & licensed software.",
    icon: <Laptop className="w-10 h-10 text-green-500" />,
  },
  {
    title: "Digital Library",
    desc: "A rich collection of e-books, research papers, and access to global academic journals.",
    icon: <BookOpen className="w-10 h-10 text-yellow-500" />,
  },
  {
    title: "Research & Innovation Centers",
    desc: "Dedicated labs for AI, Robotics, Data Science, and Cybersecurity projects.",
    icon: <FlaskConical className="w-10 h-10 text-red-500" />,
  },
  {
    title: "Networking Hub",
    desc: "Advanced networking and security lab enabling students to work on real-world systems.",
    icon: <Network className="w-10 h-10 text-purple-500" />,
  },
]

export default function Infrastructure() {
  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card shadow-lg rounded-2xl p-6 border border-card hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gray-100 rounded-xl">{facility.icon}</div>
                <h3 className="text-lg font-semibold text-accent">
                  {facility.title}
                </h3>
              </div>
              <p className="text-card-foreground leading-relaxed">{facility.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

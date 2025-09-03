"use client"
import React from "react"
import { motion } from "framer-motion"
import { GraduationCap, Cpu, Award, Rocket } from "lucide-react"

const milestones = [
  {
    year: "1999",
    title: "Establishment",
    desc: "Department of Computer Engineering established with a vision to provide quality technical education.",
    icon: <GraduationCap className="w-8 h-8 text-blue-500" />,
  },
  {
    year: "2005",
    title: "Growth & Expansion",
    desc: "Upgraded infrastructure with new labs and increased student intake to meet growing demand.",
    icon: <Cpu className="w-8 h-8 text-green-500" />,
  },
  {
    year: "2015",
    title: "Recognition",
    desc: "Accredited by national bodies for academic excellence and industry collaborations.",
    icon: <Award className="w-8 h-8 text-yellow-500" />,
  },
  {
    year: "2023",
    title: "Innovation Hub",
    desc: "Established centers for AI, Data Science, and hosted international hackathons.",
    icon: <Rocket className="w-8 h-8 text-red-500" />,
  },
]

export default function DepartmentHistory() {
  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative border-l-4 border-accent pl-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-18 relative"
            >
              <div className="absolute -left-16 bg-white border-2 border-accent rounded-full p-3 shadow-md">
                {milestone.icon}
              </div>
              <h3 className="text-xl font-semibold text-accent">
                {milestone.year} — {milestone.title}
              </h3>
              <p className="text-foreground mt-2">{milestone.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

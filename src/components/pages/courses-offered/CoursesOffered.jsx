"use client"
import React from "react"
import { motion } from "framer-motion"
import { GraduationCap, Laptop, Code2, Cpu } from "lucide-react"

const courses = [
  {
    name: "B.E. in Computer Engineering",
    duration: "4 Years (8 Semesters)",
    intake: "120 Students",
    icon: <GraduationCap className="w-10 h-10 text-blue-500" />,
    desc: "Undergraduate program focusing on core computer engineering concepts, programming, and system design.",
  },
  {
    name: "M.E. in Computer Engineering",
    duration: "2 Years (4 Semesters)",
    intake: "24 Students",
    icon: <Laptop className="w-10 h-10 text-green-500" />,
    desc: "Postgraduate program emphasizing research, advanced computing, AI, and emerging technologies.",
  },
  {
    name: "Ph.D. in Computer Engineering",
    duration: "Minimum 3 Years",
    intake: "As per university guidelines",
    icon: <Cpu className="w-10 h-10 text-purple-500" />,
    desc: "Doctoral program for advanced research in Artificial Intelligence, Cybersecurity, Data Science, and Networking.",
  },
  {
    name: "Diploma in Computer Engineering",
    duration: "3 Years",
    intake: "60 Students",
    icon: <Code2 className="w-10 h-10 text-red-500" />,
    desc: "Diploma program designed to provide technical skills and practical knowledge in computer systems.",
  },
]

export default function CoursesOffered() {
  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card shadow-md rounded-2xl p-6 border border-muted hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gray-100 rounded-xl">{course.icon}</div>
                <h3 className="text-lg font-semibold text-accent">
                  {course.name}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-3">{course.desc}</p>
              <div className="text-sm text-card-foreground">
                <p><span className="font-semibold">Duration:</span> {course.duration}</p>
                <p><span className="font-semibold">Intake:</span> {course.intake}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

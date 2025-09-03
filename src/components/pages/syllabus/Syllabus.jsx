"use client"
import React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { FileText } from "lucide-react"

const syllabusData = [
  {
    course: "B.E. Computer Engineering",
    semesters: [
      { name: "Semester 1", file: "/syllabus/be-sem1.pdf" },
      { name: "Semester 2", file: "/syllabus/be-sem2.pdf" },
      { name: "Semester 3", file: "/syllabus/be-sem3.pdf" },
      { name: "Semester 4", file: "/syllabus/be-sem4.pdf" },
      { name: "Semester 5", file: "/syllabus/be-sem5.pdf" },
      { name: "Semester 6", file: "/syllabus/be-sem6.pdf" },
      { name: "Semester 7", file: "/syllabus/be-sem7.pdf" },
      { name: "Semester 8", file: "/syllabus/be-sem8.pdf" },
    ],
  },
  {
    course: "M.E. Computer Engineering",
    semesters: [
      { name: "Semester 1", file: "/syllabus/me-sem1.pdf" },
      { name: "Semester 2", file: "/syllabus/me-sem2.pdf" },
      { name: "Semester 3", file: "/syllabus/me-sem3.pdf" },
      { name: "Semester 4", file: "/syllabus/me-sem4.pdf" },
    ],
  },
  {
    course: "Ph.D. Computer Engineering",
    semesters: [
      { name: "Course Work", file: "/syllabus/phd-coursework.pdf" },
      { name: "Research Methodology", file: "/syllabus/phd-research.pdf" },
    ],
  },
]

export default function Syllabus() {
  return (
    <section className="py-2">
      <div>
        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {syllabusData.map((course, idx) => (
            <AccordionItem key={idx} value={`course-${idx}`}>
              <AccordionTrigger className="text-lg font-semibold text-accent">
                {course.course}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-3">
                  {course.semesters.map((sem, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between bg-card border border-muted rounded-lg p-3 shadow-sm hover:shadow-md transition"
                    >
                      <span className="flex items-center gap-2 text-card-foreground">
                        <FileText className="w-5 h-5 text-blue-500" />
                        {sem.name}
                      </span>
                      <a
                        href={sem.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-accent hover:underline"
                      >
                        Download PDF
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

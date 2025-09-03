"use client"
import React from "react"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

const pyqs = [
  {
    subject: "Data Structures & Algorithms",
    years: [
      { year: "2021", link: "/pyqs/dsa-2021.pdf" },
      { year: "2022", link: "/pyqs/dsa-2022.pdf" },
      { year: "2023", link: "/pyqs/dsa-2023.pdf" },
    ],
  },
  {
    subject: "Database Management Systems",
    years: [
      { year: "2021", link: "/pyqs/dbms-2021.pdf" },
      { year: "2022", link: "/pyqs/dbms-2022.pdf" },
    ],
  },
  {
    subject: "Computer Networks",
    years: [
      { year: "2022", link: "/pyqs/cn-2022.pdf" },
      { year: "2023", link: "/pyqs/cn-2023.pdf" },
    ],
  },
]

export default function Pyqs() {
  return (
    <section className="py-8">
      <div className="max-w-5xl mx-auto px-4">
        {/* Accordion for subjects */}
        <Accordion type="single" collapsible className="w-full">
          {pyqs.map((subject, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-lg font-semibold">
                {subject.subject}
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3">
                  {subject.years.map((paper, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: j * 0.1 }}
                      className="flex items-center justify-between p-3 rounded-lg border shadow-sm hover:shadow-md transition"
                    >
                      <p className="font-medium">Year {paper.year}</p>
                      <Button variant="outline" size="sm" asChild>
                        <a href={paper.link} target="_blank" rel="noopener noreferrer">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </a>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

"use client"
import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"

const events = [
    {
        date: "01 Aug 2025",
        title: "Semester Commencement",
        description: "Classes for the new academic year begin for all students.",
    },
    {
        date: "15 Aug 2025",
        title: "Independence Day Celebration",
        description: "Flag hoisting and cultural events organized by the department.",
    },
    {
        date: "20 Sep 2025",
        title: "Mid-Semester Exams",
        description: "Internal assessment exams for all core subjects.",
    },
    {
        date: "25 Dec 2025",
        title: "Winter Break",
        description: "College will remain closed for holidays.",
    },
    {
        date: "15 Jan 2026",
        title: "Semester End Exams",
        description: "Final exams conducted as per university guidelines.",
    },
]

export default function AcademicCalendar() {
    return (
        <section className="py-8">
            <div className="max-w-5xl mx-auto px-4">
                <div className="relative border-l border-muted-foreground/30 pl-6">
                    {events.map((event, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                            className="mb-10 ml-4"
                        >
                            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-white shadow-md">
                                <Calendar className="w-3 h-3" />
                            </span>

                            <Card className="shadow-md border-l-4 border-accent">
                                <CardHeader>
                                    <CardTitle className="text-lg">{event.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground mb-2">{event.date}</p>
                                    <p className="text-card-foreground">{event.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

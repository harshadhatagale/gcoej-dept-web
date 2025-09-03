"use client"

import React from "react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const announcements = [
  {
    title: "Mid-Semester Exam Timetable Released",
    date: "02 Sep 2025",
    category: "Academics",
    description: "The timetable for mid-semester exams has been published. Students are advised to check the notice board or download the PDF.",
  },
  {
    title: "Campus Placement Drive – Infosys",
    date: "28 Aug 2025",
    category: "Placements",
    description: "Infosys is visiting campus for recruitment. Eligible students must register by 5th September.",
  },
  {
    title: "TechFest 2025 Registration Open",
    date: "25 Aug 2025",
    category: "Events",
    description: "Registrations for TechFest 2025 are now open. Teams can register online before 15th September.",
  },
]

export default function Announcements() {
  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Announcements List */}
        <div className="grid gap-6">
          {announcements.map((item, index) => (
            <Card
              key={index}
              className="border-l-4 border-blue-600 shadow-sm hover:shadow-md transition-all"
            >
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg font-semibold">{item.title}</CardTitle>
                  <span className="text-sm text-gray-500 dark:text-gray-200">{item.date}</span>
                </div>
                <span className="text-xs text-blue-600 font-medium uppercase tracking-wide">
                  {item.category}
                </span>
                <CardDescription className="mt-2 text-card-foreground">
                  {item.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"
import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const faculties = [
  {
    name: "Prof. Kalpana Sarode",
    designation: "Head of Department",
    qualification: "Ph.D. in Computer Engineering",
    image: "/assets/faculty/faculty1.jpg",
  },
  {
    name: "Shri. Shailesh Cheke",
    designation: "Associate Professor",
    qualification: "M.Tech in Artificial Intelligence",
    image: "", // intentionally left blank for fallback demo
  },
  {
    name: "Dr. Tukaram K. Gawali",
    designation: "Associate Professor",
    qualification: "M.E. in Computer Networks",
    image: "/assets/faculty/faculty3.jpg",
  },
  {
    name: "Ms. Shrutika S.Mahajan ",
    designation: "Visiting Faculty",
    qualification: "M.Tech in Data Science",
    image: "", // no image, will show fallback
  },
  {
    name: "Ms. Rashmi R. Chaudhari",
    designation: "Visiting Faculty",
    qualification: "M.Tech in Data Science",
    image: "", // no image, will show fallback
  },
  {
    name: "Ms.Archana Chitte",
    designation: "Visiting Faculty",
    qualification: "M.Tech in Data Science",
    image: "", // no image, will show fallback
  },
  {
    name: "Ms.Diksha R. Gupta",
    designation: "Visiting Faculty",
    qualification: "M.Tech in Data Science",
    image: "", // no image, will show fallback
  },
]

export default function Faculties() {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {faculties.map((faculty, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Card className="shadow-md hover:shadow-xl transition duration-300 rounded-2xl overflow-hidden group">
                <div className="flex justify-center items-center pt-6">
                  <Avatar className="h-32 w-32 border-2 border-accent shadow-md">
                    <AvatarImage src={faculty.image} alt={faculty.name} />
                    <AvatarFallback className="text-xl font-semibold bg-muted text-foreground">
                      {faculty.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <CardHeader className="text-center mt-4">
                  <h3 className="text-xl font-semibold">{faculty.name}</h3>
                  <p className="text-accent font-medium">{faculty.designation}</p>
                </CardHeader>
                <CardContent className="text-center text-sm text-muted-foreground pb-6">
                  <p>{faculty.qualification}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

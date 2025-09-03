"use client"
import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const activities = [
  {
    title: "Hackathon 2025",
    description: "A 36-hour coding challenge where students built innovative tech solutions.",
    image: "/assets/activities/hackathon.jpg",
  },
  {
    title: "Robotics Workshop",
    description: "Hands-on session on building and programming robots with AI integration.",
    image: "/assets/activities/robotics.jpg",
  },
  {
    title: "Cultural Fest",
    description: "Annual event with music, dance, drama, and creativity by engineering students.",
    image: "/assets/activities/cultural.jpg",
  },
  {
    title: "Tech Talk Series",
    description: "Invited industry experts for knowledge sessions on AI, Cybersecurity, and Cloud.",
    image: "/assets/activities/techtalk.jpg",
  },
]

export default function Activities() {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <Card className="group shadow-md hover:shadow-xl transition duration-300 rounded-2xl overflow-hidden">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{activity.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

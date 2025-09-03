"use client"
import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts"

const stats = [
  { year: "2021", placed: 65, highest: "12 LPA", average: "4.5 LPA" },
  { year: "2022", placed: 72, highest: "14 LPA", average: "5 LPA" },
  { year: "2023", placed: 85, highest: "18 LPA", average: "6 LPA" },
  { year: "2024", placed: 90, highest: "22 LPA", average: "7.2 LPA" },
]

const chartData = stats.map((s) => ({ year: s.year, placed: s.placed }))

export default function PlacementStats() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <Card className="shadow-md hover:shadow-lg transition rounded-xl">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-center">
                    {stat.year}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <p className="text-3xl font-bold text-accent">
                    {stat.placed}%
                  </p>
                  <p className="text-muted-foreground">
                    Highest Package: <span className="font-medium">{stat.highest}</span>
                  </p>
                  <p className="text-muted-foreground">
                    Avg Package: <span className="font-medium">{stat.average}</span>
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Placement Graph */}
        <Card className="shadow-md rounded-xl">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              Year-wise Placement Percentage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="placed" fill="#2563eb" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

"use client"
import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Timetable() {
  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-4">
        <Tabs defaultValue="sem1" className="w-full">
          <TabsList className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-6">
            <TabsTrigger value="sem1">Semester 1</TabsTrigger>
            <TabsTrigger value="sem2">Semester 2</TabsTrigger>
            <TabsTrigger value="sem3">Semester 3</TabsTrigger>
            <TabsTrigger value="sem4">Semester 4</TabsTrigger>
          </TabsList>

          {/* Example Semester 1 */}
          <TabsContent value="sem1">
            <Card className="shadow-lg rounded-xl overflow-hidden">
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm md:text-base">
                    <thead>
                      <tr className="bg-muted text-left">
                        <th className="p-3 border">Day</th>
                        <th className="p-3 border">9:00 - 10:00</th>
                        <th className="p-3 border">10:00 - 11:00</th>
                        <th className="p-3 border">11:15 - 12:15</th>
                        <th className="p-3 border">12:15 - 1:15</th>
                        <th className="p-3 border">2:00 - 3:00</th>
                        <th className="p-3 border">3:00 - 4:00</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-muted/40 transition">
                        <td className="p-3 border font-medium">Monday</td>
                        <td className="p-3 border">Maths</td>
                        <td className="p-3 border">Physics</td>
                        <td className="p-3 border">Programming</td>
                        <td className="p-3 border">Electronics</td>
                        <td className="p-3 border">Lab</td>
                        <td className="p-3 border">Lab</td>
                      </tr>
                      <tr className="hover:bg-muted/40 transition">
                        <td className="p-3 border font-medium">Tuesday</td>
                        <td className="p-3 border">Chemistry</td>
                        <td className="p-3 border">Maths</td>
                        <td className="p-3 border">Programming</td>
                        <td className="p-3 border">Workshop</td>
                        <td className="p-3 border">Lab</td>
                        <td className="p-3 border">Lab</td>
                      </tr>
                      {/* Add more rows for other days */}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* More Semesters can follow same structure */}
        </Tabs>
      </div>
    </section>
  )
}

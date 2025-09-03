"use client"

import React from "react"
import { motion } from "framer-motion"

export default function VisionMission() {
  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-4 space-y-10">
        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, boxShadow: "0px 10px 25px rgba(0,0,0,0.1)" }}
          className="bg-card rounded-2xl shadow-md p-8 flex flex-col lg:flex-row items-center gap-6"
        >
          <motion.span
            initial={{ rotate: -20 }}
            whileInView={{ rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="text-6xl"
          >
            🎯
          </motion.span>
          <div>
            <h3 className="text-3xl font-semibold text-accent mb-4">Our Vision</h3>
            <p className="text-card-foreground leading-relaxed">
              Globally Accepted Engineers with Human skills.
            </p>
          </div>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, boxShadow: "0px 10px 25px rgba(0,0,0,0.1)" }}
          className="bg-card rounded-2xl shadow-md p-8 flex flex-col lg:flex-row items-center gap-6"
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="text-6xl"
          >
            🚀
          </motion.span>
          <div>
            <h3 className="text-3xl font-semibold text-accent mb-4">Our Mission</h3>
            <ul className="list-disc">
              <li className="text-card-foreground leading-relaxed">
                Impart quality education to meet the needs of profession and society, and achieve excellence in teaching-learning.
              </li>
              <li className="text-card-foreground leading-relaxed">
                Enhancing technical learning quality to global standards.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import Link from "next/link"
import { NavLinks } from "@/lib/constant"// import your NavLinks array
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground py-12 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Dynamic Nav Sections */}
        {NavLinks.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-lg font-semibold dark:text-white text-black mb-4">{section.name}</h3>
            <ul className="space-y-2">
              {section.subLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.link}
                    className="hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Computer Engineering Department. All rights reserved.
        </p>

        {/* Right: Social Media */}
        <div className="flex space-x-4">
          <Link href="#" className="hover:text-blue-400 transition">
            <Facebook size={20} />
          </Link>
          <Link href="#" className="hover:text-pink-400 transition">
            <Instagram size={20} />
          </Link>
          <Link href="#" className="hover:text-sky-400 transition">
            <Twitter size={20} />
          </Link>
          <Link href="#" className="hover:text-blue-500 transition">
            <Linkedin size={20} />
          </Link>
        </div>
      </div>
    </footer>
  )
}

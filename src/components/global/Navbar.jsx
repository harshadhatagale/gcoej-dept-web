"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import React, { useState } from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon, Menu, Monitor } from "lucide-react"
import { Inter } from "next/font/google"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "./ModeToggle"

const inter = Inter({
    subsets: ['latin']
})

export default function Navbar() {
    const [openNav, setOpenNav] = useState(false)
    const toggleNav = () => {
        setOpenNav(!openNav)
    }
    return (
        // Desktop navbar
        <>
            <NavigationMenu viewport={false} className={"w-[100vw] py-2 fixed top-0 left-0 bg-background border border-b-muted hidden md:block px-2 shadow-md rounded-md transition-all duration-300 ease-in-out"}>
                <NavigationMenuList>
                    <NavigationMenuItem className={'w-24'}>
                        <NavigationMenuLink asChild>
                            <Link href={"/"} className={`${inter.className} flex gap-2 flex-row justify-center items-center text-[14px] font-bold hover:scale-105 transition-transform duration-200`}>Computer Engineering</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="transition-all duration-200 hover:scale-105">Home</NavigationMenuTrigger>
                        <NavigationMenuContent className="animate-in fade-in-80 zoom-in-95 duration-300">
                            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md transition-all duration-300 hover:scale-[1.02]"
                                            href="/"
                                        >
                                            <div className="mt-4 mb-2 text-lg font-medium">
                                                <img src="/assets/gcoej-logo.png" alt="Logo" className="transition-transform duration-300 hover:scale-110" />
                                            </div>
                                            <p className="text-muted-foreground text-md font-bold leading-tight">
                                                Government College Of Engineering Jalgaon
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium transition-all duration-200 hover:translate-x-2 hover:text-primary">Introduction</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium transition-all duration-200 hover:translate-x-2 hover:text-primary">Vision & Mission</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium transition-all duration-200 hover:translate-x-2 hover:text-primary">Announcements</Link>
                                </NavigationMenuLink>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="transition-all duration-200 hover:scale-105">About Us</NavigationMenuTrigger>
                        <NavigationMenuContent className="animate-in fade-in-80 zoom-in-95 duration-300">
                            <ul className="grid w-[200px] gap-2">
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium transition-all duration-200 hover:translate-x-2 hover:text-primary">Vision & Mission</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium transition-all duration-200 hover:translate-x-2 hover:text-primary">Department History</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium transition-all duration-200 hover:translate-x-2 hover:text-primary">Infrastructure</Link>
                                </NavigationMenuLink>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="transition-all duration-200 hover:scale-105">Academics</NavigationMenuTrigger>
                        <NavigationMenuContent className="animate-in fade-in-80 zoom-in-95 duration-300">
                            <ul className="grid w-[200px] gap-2">
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium transition-all duration-200 hover:translate-x-2 hover:text-primary">Cources Offered</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium transition-all duration-200 hover:translate-x-2 hover:text-primary">Syllabus</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium transition-all duration-200 hover:translate-x-2 hover:text-primary">Timetable</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium transition-all duration-200 hover:translate-x-2 hover:text-primary">Academic Calender</Link>
                                </NavigationMenuLink>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="transition-all duration-200 hover:scale-105">Faculty & Staff</NavigationMenuTrigger>
                        <NavigationMenuContent className="animate-in fade-in-80 zoom-in-95 duration-300">
                            <ul className="grid w-[200px] gap-2">
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium transition-all duration-200 hover:translate-x-2 hover:text-primary">Faculties</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium transition-all duration-200 hover:translate-x-2 hover:text-primary">Staff</Link>
                                </NavigationMenuLink>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="transition-all duration-200 hover:scale-105">Students</NavigationMenuTrigger>
                        <NavigationMenuContent className="animate-in fade-in-80 zoom-in-95 duration-300">
                            <ul className="grid w-[200px] gap-2">
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium transition-all duration-200 hover:translate-x-2 hover:text-primary">Activities</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium transition-all duration-200 hover:translate-x-2 hover:text-primary">Achievements</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium transition-all duration-200 hover:translate-x-2 hover:text-primary">Projects</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium transition-all duration-200 hover:translate-x-2 hover:text-primary">Placements</Link>
                                </NavigationMenuLink>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="transition-all duration-200 hover:scale-105">Placements</NavigationMenuTrigger>
                        <NavigationMenuContent className="animate-in fade-in-80 zoom-in-95 duration-300">
                            <ul className="grid w-[200px] gap-2">
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium transition-all duration-200 hover:translate-x-2 hover:text-primary">Placement Stats</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium transition-all duration-200 hover:translate-x-2 hover:text-primary">Recruiters</Link>
                                </NavigationMenuLink>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="transition-all duration-200 hover:scale-105">Events</NavigationMenuTrigger>
                        <NavigationMenuContent className="animate-in fade-in-80 zoom-in-95 duration-300">
                            <ul className="grid w-[200px] gap-2">
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium transition-all duration-200 hover:translate-x-2 hover:text-primary">Deparment Events</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium transition-all duration-200 hover:translate-x-2 hover:text-primary">Gallery</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium transition-all duration-200 hover:translate-x-2 hover:text-primary">Event Calender</Link>
                                </NavigationMenuLink>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="transition-all duration-200 hover:scale-105">Downloads</NavigationMenuTrigger>
                        <NavigationMenuContent className="animate-in fade-in-80 zoom-in-95 duration-300">
                            <ul className="grid w-[200px] gap-2">
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium transition-all duration-200 hover:translate-x-2 hover:text-primary">Syllabus</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium transition-all duration-200 hover:translate-x-2 hover:text-primary">Lab Manuals</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium transition-all duration-200 hover:translate-x-2 hover:text-primary">PYQ's</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium transition-all duration-200 hover:translate-x-2 hover:text-primary">E-Books</Link>
                                </NavigationMenuLink>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <ModeToggle />
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <nav className={`${openNav ? "h-screen animate-in slide-in-from-top duration-500" : "py-2 animate-out slide-out-to-top duration-300"} transition-all w-full bg-background border border-b-muted fixed top-0 left-0 flex flex-col lg:hidden py-4 px-2 z-50`}>
                <div className="flex justify-between items-center">
                    <Link href={"/"} className="hover:scale-105 transition-transform duration-200 font-bold">Computer Engineering</Link>
                    <Menu size={25} onClick={() => toggleNav()} className="cursor-pointer hover:rotate-90 transition-transform duration-300" />
                </div>
                <div className={`${openNav ? "block animate-in fade-in-50 duration-500" : "hidden animate-out fade-out-50 duration-300"}`}>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="link-1" className="border-b transition-colors duration-200 hover:bg-muted/50">
                            <AccordionTrigger className="hover:text-primary transition-colors duration-200">Home</AccordionTrigger>
                            <AccordionContent className="animate-in fade-in-50 slide-in-from-top-5 duration-300">
                                <ul className="grid gap-2">
                                    <li>
                                        <div>
                                            <a
                                                className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md transition-all duration-300 hover:scale-[1.02]"
                                                href="/"
                                            >
                                                <div className="mt-4 mb-2 text-lg font-medium">
                                                    <img src="/assets/gcoej-logo.png" alt="Logo" className="transition-transform duration-300 hover:scale-110" />
                                                </div>
                                                <p className="text-muted-foreground text-md font-bold leading-tight">
                                                    Government College Of Engineering Jalgaon
                                                </p>
                                            </a>
                                        </div>
                                    </li>
                                    <div className="py-1">
                                        <Link href={"/"} className="text-sm leading-none font-medium transition-all duration-200 hover:translate-x-2 hover:text-primary block py-2">Introduction</Link>
                                    </div>
                                    <div className="py-1">
                                        <Link href={"/"} className="text-sm leading-none font-medium transition-all duration-200 hover:translate-x-2 hover:text-primary block py-2">Vision & Mission</Link>
                                    </div>
                                    <div className="py-1">
                                        <Link href={"/"} className="text-sm leading-none font-medium transition-all duration-200 hover:translate-x-2 hover:text-primary block py-2">Announcements</Link>
                                    </div>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="link-2" className="border-b transition-colors duration-200 hover:bg-muted/50">
                            <AccordionTrigger className="hover:text-primary transition-colors duration-200">About Us</AccordionTrigger>
                            <AccordionContent className="animate-in fade-in-50 slide-in-from-top-5 duration-300">
                                <ul className="grid gap-2">
                                    <div className="py-1">
                                        <Link href={"/"} className="text-sm leading-none transition-all duration-200 hover:translate-x-2 hover:text-primary block py-2">Vision & Mission</Link>
                                    </div>
                                    <div className="py-1">
                                        <Link href={"/"} className="text-sm leading-none transition-all duration-200 hover:translate-x-2 hover:text-primary block py-2">Department History</Link>
                                    </div>
                                    <div className="py-1">
                                        <Link href={"/"} className="text-sm leading-none transition-all duration-200 hover:translate-x-2 hover:text-primary block py-2">Infrastructure</Link>
                                    </div>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="link-3" className="border-b transition-colors duration-200 hover:bg-muted/50">
                            <AccordionTrigger className="hover:text-primary transition-colors duration-200">Academics</AccordionTrigger>
                            <AccordionContent className="animate-in fade-in-50 slide-in-from-top-5 duration-300">
                                <ul className="grid gap-2">
                                    <div className="py-1">
                                        <Link href={"/"} className="text-sm leading-none transition-all duration-200 hover:translate-x-2 hover:text-primary block py-2">Cources Offered</Link>
                                    </div>
                                    <div className="py-1">
                                        <Link href={"/"} className="text-sm leading-none transition-all duration-200 hover:translate-x-2 hover:text-primary block py-2">Syllabus</Link>
                                    </div>
                                    <div className="py-1">
                                        <Link href={"/"} className="text-sm leading-none transition-all duration-200 hover:translate-x-2 hover:text-primary block py-2">Timetable</Link>
                                    </div>
                                    <div className="py-1">
                                        <Link href={"/"} className="text-sm leading-none transition-all duration-200 hover:translate-x-2 hover:text-primary block py-2">Academic Calender</Link>
                                    </div>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="link-4" className="border-b transition-colors duration-200 hover:bg-muted/50">
                            <AccordionTrigger className="hover:text-primary transition-colors duration-200">Faculty & Staff</AccordionTrigger>
                            <AccordionContent className="animate-in fade-in-50 slide-in-from-top-5 duration-300">
                                <ul className="grid gap-2">
                                    <div className="py-1">
                                        <Link href={"/"} className="text-sm leading-none transition-all duration-200 hover:translate-x-2 hover:text-primary block py-2">Faculties</Link>
                                    </div>
                                    <div className="py-1">
                                        <Link href={"/"} className="text-sm leading-none transition-all duration-200 hover:translate-x-2 hover:text-primary block py-2">Staff</Link>
                                    </div>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="link-5" className="border-b transition-colors duration-200 hover:bg-muted/50">
                            <AccordionTrigger className="hover:text-primary transition-colors duration-200">Students</AccordionTrigger>
                            <AccordionContent className="animate-in fade-in-50 slide-in-from-top-5 duration-300">
                                <ul className="grid gap-2">
                                    <div className="py-1">
                                        <Link href={"/"} className="text-sm leading-none transition-all duration-200 hover:translate-x-2 hover:text-primary block py-2">Activities</Link>
                                    </div>
                                    <div className="py-1">
                                        <Link href={"/"} className="text-sm leading-none transition-all duration-200 hover:translate-x-2 hover:text-primary block py-2">Achievements</Link>
                                    </div>
                                    <div className="py-1">
                                        <Link href={"/"} className="text-sm leading-none transition-all duration-200 hover:translate-x-2 hover:text-primary block py-2">Projects</Link>
                                    </div>
                                    <div className="py-1">
                                        <Link href={"/"} className="text-sm leading-none transition-all duration-200 hover:translate-x-2 hover:text-primary block py-2">Placements</Link>
                                    </div>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="link-6" className="border-b transition-colors duration-200 hover:bg-muted/50">
                            <AccordionTrigger className="hover:text-primary transition-colors duration-200">Placements</AccordionTrigger>
                            <AccordionContent className="animate-in fade-in-50 slide-in-from-top-5 duration-300">
                                <ul className="grid gap-2">
                                    <div className="py-1">
                                        <Link href={"/"} className="text-sm leading-none transition-all duration-200 hover:translate-x-2 hover:text-primary block py-2">Placement Stats</Link>
                                    </div>
                                    <div className="py-1">
                                        <Link href={"/"} className="text-sm leading-none transition-all duration-200 hover:translate-x-2 hover:text-primary block py-2">Recruiters</Link>
                                    </div>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="link-8" className="border-b transition-colors duration-200 hover:bg-muted/50">
                            <AccordionTrigger className="hover:text-primary transition-colors duration-200">Events</AccordionTrigger>
                            <AccordionContent className="animate-in fade-in-50 slide-in-from-top-5 duration-300">
                                <ul className="grid gap-2">
                                    <div className="py-1">
                                        <Link href={"/"} className="text-sm leading-none transition-all duration-200 hover:translate-x-2 hover:text-primary block py-2">Deparment Events</Link>
                                    </div>
                                    <div className="py-1">
                                        <Link href={"/"} className="text-sm leading-none transition-all duration-200 hover:translate-x-2 hover:text-primary block py-2">Gallery</Link>
                                    </div>
                                    <div className="py-1">
                                        <Link href={"/"} className="text-sm leading-none transition-all duration-200 hover:translate-x-2 hover:text-primary block py-2">Event Calender</Link>
                                    </div>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="link-9" className="border-b transition-colors duration-200 hover:bg-muted/50">
                            <AccordionTrigger className="hover:text-primary transition-colors duration-200">Downloads</AccordionTrigger>
                            <AccordionContent className="animate-in fade-in-50 slide-in-from-top-5 duration-300">
                                <ul className="grid gap-2">
                                    <div className="py-1">
                                        <Link href={"/"} className="text-sm leading-none transition-all duration-200 hover:translate-x-2 hover:text-primary block py-2">Syllabus</Link>
                                    </div>
                                    <div className="py-1">
                                        <Link href={"/"} className="text-sm leading-none transition-all duration-200 hover:translate-x-2 hover:text-primary block py-2">Lab Manuals</Link>
                                    </div>
                                    <div className="py-1">
                                        <Link href={"/"} className="text-sm leading-none transition-all duration-200 hover:translate-x-2 hover:text-primary block py-2">PYQ's</Link>
                                    </div>
                                    <div className="py-1">
                                        <Link href={"/"} className="text-sm leading-none transition-all duration-200 hover:translate-x-2 hover:text-primary block py-2">E-Books</Link>
                                    </div>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </nav >
        </>
    )
}

function ListItem({ title, children, href, ...props }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href} className="transition-all duration-200 hover:translate-x-2">
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}
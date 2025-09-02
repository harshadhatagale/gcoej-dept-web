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
            <NavigationMenu viewport={false} className={"py-2 w-full h-16 fixed top-0 left-0 bg-background border border-b-muted hidden md:block px-2 shadow-md rounded-md"}>
                <NavigationMenuList>
                    <NavigationMenuItem className={'w-24'}>
                        <NavigationMenuLink asChild>
                            <Link href={"/"} className={`${inter.className} flex gap-2 flex-row justify-center items-center text-[14px] font-bold`}>Computer Engineering</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                                            href="/"
                                        >
                                            <div className="mt-4 mb-2 text-lg font-medium">
                                                <img src="/assets/gcoej-logo.png" alt="Logo" />
                                            </div>
                                            <p className="text-muted-foreground text-md font-bold leading-tight">
                                                Government College Of Engineering Jalgaon
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium">Introduction</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium">Vision & Mission</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium">Announcements</Link>
                                </NavigationMenuLink>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[200px] gap-2">
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium">Vision & Mission</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium">Department History</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium">Infrastructure</Link>
                                </NavigationMenuLink>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Academics</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[200px] gap-2">
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium">Cources Offered</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium">Syllabus</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium">Timetable</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium">Academic Calender</Link>
                                </NavigationMenuLink>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Faculty & Staff</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[200px] gap-2">
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium">Faculties</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium">Staff</Link>
                                </NavigationMenuLink>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Students</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[200px] gap-2">
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium">Activities</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium">Achievements</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium">Projects</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium">Placements</Link>
                                </NavigationMenuLink>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Placements</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[200px] gap-2">
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium">Placement Stats</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium">Recruiters</Link>
                                </NavigationMenuLink>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Students</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[200px] gap-2">
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium">Activities</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium">Achievements</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium">Projects</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium">Placements</Link>
                                </NavigationMenuLink>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Events</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[200px] gap-2">
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium">Deparment Events</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium">Gallery</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium">Event Calender</Link>
                                </NavigationMenuLink>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Downloads</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[200px] gap-2">
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium">Syllabus</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium">Lab Manuals</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium">PYQ's</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href={"/"} className="text-sm leading-none font-medium">E-Books</Link>
                                </NavigationMenuLink>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <ModeToggle />
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <nav className={`${openNav ? "h-full" : "h-16"} w-full bg-background border border-b-muted fixed top-0 left-0 flex flex-col lg:hidden py-4 px-2`}>
                <div className="flex justify-between items-center">
                    <Link href={"/"}>Computer Engineering</Link>
                    <Menu size={25} onClick={() => toggleNav()} />
                </div>
                <div className={`${openNav ? "block" : "hidden"}`}>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="link-1">
                            <AccordionTrigger>Home</AccordionTrigger>
                            <AccordionContent>
                                <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <div>
                                            <a
                                                className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                                                href="/"
                                            >
                                                <div className="mt-4 mb-2 text-lg font-medium">
                                                    <img src="/assets/gcoej-logo.png" alt="Logo" />
                                                </div>
                                                <p className="text-muted-foreground text-md font-bold leading-tight">
                                                    Government College Of Engineering Jalgaon
                                                </p>
                                            </a>
                                        </div>
                                    </li>
                                    <div>
                                        <Link href={"/"} className="text-sm leading-none font-medium">Introduction</Link>
                                    </div>
                                    <div>
                                        <Link href={"/"} className="text-sm leading-none font-medium">Vision & Mission</Link>
                                    </div>
                                    <div>
                                        <Link href={"/"} className="text-sm leading-none font-medium">Announcements</Link>
                                    </div>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="link-2">
                            <AccordionTrigger>About Us</AccordionTrigger>
                            <AccordionContent>
                                <ul className="grid w-[200px] gap-2">
                                    <div>
                                        <Link href={"/"} className="text-sm leading-none">Vision & Mission</Link>
                                    </div>
                                    <div>
                                        <Link href={"/"} className="text-sm leading-none">Department History</Link>
                                    </div>
                                    <div>
                                        <Link href={"/"} className="text-sm leading-none">Infrastructure</Link>
                                    </div>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="link-3">
                            <AccordionTrigger>Academics</AccordionTrigger>
                            <AccordionContent>
                                <ul className="grid w-[200px] gap-2">
                                    <div>
                                        <Link href={"/"} className="text-sm leading-none">Cources Offered</Link>
                                    </div>
                                    <div>
                                        <Link href={"/"} className="text-sm leading-none">Syllabus</Link>
                                    </div>
                                    <div>
                                        <Link href={"/"} className="text-sm leading-none">Timetable</Link>
                                    </div>
                                    <div>
                                        <Link href={"/"} className="text-sm leading-none">Academic Calender</Link>
                                    </div>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="link-4">
                            <AccordionTrigger>Faculty & Staff</AccordionTrigger>
                            <AccordionContent>
                                <ul className="grid w-[200px] gap-2">
                                    <div>
                                        <Link href={"/"} className="text-sm leading-none">Faculties</Link>
                                    </div>
                                    <div>
                                        <Link href={"/"} className="text-sm leading-none">Staff</Link>
                                    </div>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="link-5">
                            <AccordionTrigger>Students</AccordionTrigger>
                            <AccordionContent>
                                <ul className="grid w-[200px] gap-2">
                                    <div>
                                        <Link href={"/"} className="text-sm leading-none">Activities</Link>
                                    </div>
                                    <div>
                                        <Link href={"/"} className="text-sm leading-none">Achievements</Link>
                                    </div>
                                    <div>
                                        <Link href={"/"} className="text-sm leading-none">Projects</Link>
                                    </div>
                                    <div>
                                        <Link href={"/"} className="text-sm leading-none">Placements</Link>
                                    </div>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="link-6">
                            <AccordionTrigger>Placements</AccordionTrigger>
                            <AccordionContent>
                                <ul className="grid w-[200px] gap-2">
                                    <div>
                                        <Link href={"/"} className="text-sm leading-none">Placement Stats</Link>
                                    </div>
                                    <div>
                                        <Link href={"/"} className="text-sm leading-none">Recruiters</Link>
                                    </div>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="link-7">
                            <AccordionTrigger>Students</AccordionTrigger>
                            <AccordionContent>
                                <ul className="grid w-[200px] gap-2">
                                    <div>
                                        <Link href={"/"} className="text-sm leading-none">Activities</Link>
                                    </div>
                                    <div>
                                        <Link href={"/"} className="text-sm leading-none">Achievements</Link>
                                    </div>
                                    <div>
                                        <Link href={"/"} className="text-sm leading-none">Projects</Link>
                                    </div>
                                    <div>
                                        <Link href={"/"} className="text-sm leading-none">Placements</Link>
                                    </div>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="link-8">
                            <AccordionTrigger>Events</AccordionTrigger>
                            <AccordionContent>
                                <ul className="grid w-[200px] gap-2">
                                    <div>
                                        <Link href={"/"} className="text-sm leading-none">Deparment Events</Link>
                                    </div>
                                    <div>
                                        <Link href={"/"} className="text-sm leading-none">Gallery</Link>
                                    </div>
                                    <div>
                                        <Link href={"/"} className="text-sm leading-none">Event Calender</Link>
                                    </div>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="link-9">
                            <AccordionTrigger>Downloads</AccordionTrigger>
                            <AccordionContent>
                                <ul className="grid w-[200px] gap-2">
                                    <div>
                                        <Link href={"/"} className="text-sm leading-none">Syllabus</Link>
                                    </div>
                                    <div>
                                        <Link href={"/"} className="text-sm leading-none">Lab Manuals</Link>
                                    </div>
                                    <div>
                                        <Link href={"/"} className="text-sm leading-none">PYQ's</Link>
                                    </div>
                                    <div>
                                        <Link href={"/"} className="text-sm leading-none">E-Books</Link>
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
                <Link href={href}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}

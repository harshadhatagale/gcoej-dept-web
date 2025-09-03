"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import React, { useState } from "react"
import Link from "next/link"
import { Code, Menu, Terminal } from "lucide-react"
import { Inter, Dela_Gothic_One } from "next/font/google"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "./ModeToggle"
import { NavLinks } from "@/lib/constant" // Adjust the import path as needed

const inter = Inter({
    subsets: ['latin']
})
const logo_font = Dela_Gothic_One({
    subsets: ['latin'],
    weight: '400'
})

export default function Navbar() {
    const [openNav, setOpenNav] = useState(false)
    const toggleNav = () => {
        setOpenNav(!openNav)
    }
    return (
        // Desktop navbar
        <>
            <NavigationMenu viewport={false} className={"w-full z-50 justify-between py-2 fixed top-0 left-0 bg-background border border-b-muted hidden md:block px-2 shadow-md rounded-md transition-all duration-300 ease-in-out"}>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link
                                href={"/"}
                                className={`${logo_font.className} flex items-center gap-1 hover:scale-105 transition-transform duration-200 text-sm font-bold`}
                            >
                                <Terminal className="w-4 h-4 text-foreground font-bold" />
                                <span className="text-xs">Computer Engineering</span>
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    {/* Home menu with special layout */}
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
                                {NavLinks[0].subLinks.map((subLink) => (
                                    <NavigationMenuLink key={subLink.name} asChild>
                                        <Link href={subLink.link} className="text-sm leading-none font-medium transition-all duration-200 hover:translate-x-2 hover:text-primary">
                                            {subLink.name}
                                        </Link>
                                    </NavigationMenuLink>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Other navigation items */}
                    {NavLinks.slice(1).map((navItem) => (
                        <NavigationMenuItem key={navItem.name}>
                            <NavigationMenuTrigger className="transition-all duration-200 hover:scale-105">
                                {navItem.name}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="animate-in fade-in-80 zoom-in-95 duration-300">
                                <ul className="grid w-[200px] gap-2 p-2">
                                    {navItem.subLinks.map((subLink) => (
                                        <NavigationMenuLink key={subLink.name} asChild>
                                            <Link href={subLink.link} className="text-sm leading-none font-medium transition-all duration-200 hover:translate-x-2 hover:text-primary">
                                                {subLink.name}
                                            </Link>
                                        </NavigationMenuLink>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    ))}

                    <NavigationMenuItem>
                        <ModeToggle />
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile navbar */}
            <nav className={`z-50 ${openNav ? "h-screen animate-in slide-in-from-top duration-500" : "py-2 animate-out slide-out-to-top duration-300"} transition-all w-full bg-background border border-b-muted fixed top-0 left-0 flex flex-col lg:hidden py-4 px-2 z-50`}>
                <div className="flex justify-between items-center">
                    <Link
                        href={"/"}
                        className={`${logo_font.className} flex items-center gap-1 hover:scale-105 transition-transform duration-200 text-sm font-bold`}
                    >
                        <Terminal className="w-4 h-4 text-foreground font-bold" />
                        <span className="text-xs">Computer Engineering</span>
                    </Link>
                    <div className="flex gap-2">
                        <ModeToggle/>
                        <Menu size={25} onClick={() => toggleNav()} className="cursor-pointer hover:rotate-90 transition-transform duration-300" />
                    </div>
                </div>
                <div className={`${openNav ? "block animate-in fade-in-50 duration-500" : "hidden animate-out fade-out-50 duration-300"}`}>
                    <Accordion type="single" collapsible>
                        {/* Home accordion item with special layout */}
                        <AccordionItem value="home" className="border-b transition-colors duration-200 hover:bg-muted/50">
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
                                    {NavLinks[0].subLinks.map((subLink) => (
                                        <div key={subLink.name} className="py-1">
                                            <Link href={subLink.link} className="text-sm leading-none font-medium transition-all duration-200 hover:translate-x-2 hover:text-primary block py-2">
                                                {subLink.name}
                                            </Link>
                                        </div>
                                    ))}
                                </ul>
                            </AccordionContent>
                        </AccordionItem>

                        {/* Other accordion items */}
                        {NavLinks.slice(1).map((navItem, index) => (
                            <AccordionItem key={navItem.name} value={`link-${index + 1}`} className="border-b transition-colors duration-200 hover:bg-muted/50">
                                <AccordionTrigger className="hover:text-primary transition-colors duration-200">
                                    {navItem.name}
                                </AccordionTrigger>
                                <AccordionContent className="animate-in fade-in-50 slide-in-from-top-5 duration-300">
                                    <ul className="grid gap-2">
                                        {navItem.subLinks.map((subLink) => (
                                            <div key={subLink.name} className="py-1">
                                                <Link href={subLink.link} className="text-sm leading-none transition-all duration-200 hover:translate-x-2 hover:text-primary block py-2">
                                                    {subLink.name}
                                                </Link>
                                            </div>
                                        ))}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </nav>
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
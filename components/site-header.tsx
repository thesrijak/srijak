"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { Menu, Tag, HelpCircle, FileText, Info } from "lucide-react"
import { ImageIcon } from "lucide-react"

export function SiteHeader() {
  const links = [
    { href: "/services", label: "Services", icon: Tag },
    { href: "/showcase", label: "Showcase", icon: ImageIcon },
    { href: "/faq", label: "FAQ", icon: HelpCircle },
    { href: "/blog", label: "Blog", icon: FileText },
    { href: "/About", label: "About", icon: Info },
  ]

  return (
    <header className="sticky top-0 z-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex h-14 items-center justify-between px-6 bg-gray-900/80 backdrop-blur-xl border border-gray-700/60 rounded-full shadow-2xl">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-1.5">
            <Image src="/logo.svg" alt="Srijak logo" width={24} height={24} className="h-6 w-6" />
            <span className="font-semibold tracking-wide text-[#ffe66d] drop-shadow-sm">Srijak</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 text-sm text-gray-100 md:flex">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-[#ffe66d] transition-colors font-medium">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button
              asChild
              className="bg-[#ffe66d] text-black font-medium rounded-lg px-6 py-2.5
                         hover:bg-[#ffd93d] hover:shadow-md hover:scale-[1.02]
                         transition-all"
            >
              <Link href="#contact">Chat With Us</Link>
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-600 bg-gray-800/80 text-gray-200 hover:bg-gray-700"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-gray-900/95 backdrop-blur-xl border-gray-700 p-0 w-64 flex flex-col"
              >
                {/* Brand Header */}
                <div className="flex items-center gap-1.5 px-4 py-4 border-b border-gray-700">
                  <Image src="/logo.svg" alt="Srijak logo" width={24} height={24} className="h-6 w-6" />
                  <span className="font-semibold tracking-wide text-white text-lg">Srijak</span>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-1 mt-2 text-gray-200">
                  {links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-800 hover:text-[#ffe66d] transition-colors"
                    >
                      <span className="inline-flex items-center justify-center w-5 h-5 text-gray-400">
                        <l.icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm">{l.label}</span>
                    </Link>
                  ))}
                </nav>

                {/* CTA Button at Bottom */}
                <div className="mt-auto border-t border-gray-700 p-4">
                  <Button
                    asChild
                    className="w-full bg-[#ffe66d] text-black font-medium rounded-lg px-6 py-2.5
                               hover:bg-[#ffd93d] hover:shadow-md hover:scale-[1.02]
                               transition-all"
                  >
                    <Link href="https://wa.link/65mf3i">Get a Quote</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-white">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="border-slate-800 bg-slate-950 px-0">
          <div className="flex flex-col gap-4 py-4">
            <div className="px-7">
              <h2 className="text-lg font-bold text-white">
                <span className="text-yellow-400">ARCADE</span> | Google Cloud
              </h2>
            </div>
            <div className="border-t border-slate-800 px-7 py-4">
              <nav className="flex flex-col gap-4">
                <Link href="#" className="text-base font-medium text-white" onClick={() => setOpen(false)}>
                  Home
                </Link>
                <Link href="#" className="text-base font-medium text-slate-400" onClick={() => setOpen(false)}>
                  Quests
                </Link>
                <Link href="#" className="text-base font-medium text-slate-400" onClick={() => setOpen(false)}>
                  Badges
                </Link>
                <Link href="#" className="text-base font-medium text-slate-400" onClick={() => setOpen(false)}>
                  Leaderboard
                </Link>
                <Link href="#" className="text-base font-medium text-slate-400" onClick={() => setOpen(false)}>
                  Community
                </Link>
              </nav>
            </div>
            <div className="border-t border-slate-800 px-7 py-4">
              <Button className="w-full bg-yellow-500 text-slate-900 hover:bg-yellow-400">Play Now</Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

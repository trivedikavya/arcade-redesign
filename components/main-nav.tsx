"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Search, Menu, Gamepad, Trophy, Award, Users, HelpCircle } from "lucide-react"

interface MainNavProps {
  onNavigate: {
    quests: () => void
    badges: () => void
    leaderboard: () => void
    howToPlay: () => void
    prizes: () => void
  }
}

export function MainNav({ onNavigate }: MainNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-black/20 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="h-10 w-10 bg-[#FFD700] rounded-md flex items-center justify-center"
              >
                <span className="text-black font-bold text-xl">A</span>
              </motion.div>
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-white">
                  <span className="text-[#FFD700] font-mono">ARCADE</span> | Google Cloud Skills Boost
                </h1>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm font-medium text-white hover:text-[#FFD700] transition-colors relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFD700] transition-all group-hover:w-full"></span>
            </button>
            <button
              onClick={onNavigate.quests}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
            >
              Quests
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFD700] transition-all group-hover:w-full"></span>
            </button>
            <button
              onClick={onNavigate.badges}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
            >
              Badges
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFD700] transition-all group-hover:w-full"></span>
            </button>
            <button
              onClick={onNavigate.leaderboard}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
            >
              Leaderboard
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFD700] transition-all group-hover:w-full"></span>
            </button>
            <button
              onClick={onNavigate.howToPlay}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
            >
              How To Play
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFD700] transition-all group-hover:w-full"></span>
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              className="h-8 gap-1 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
            >
              <Search className="h-3.5 w-3.5" />
              <span>Search</span>
            </Button>
            <Button
              size="sm"
              className="h-8 gap-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black hover:opacity-90"
            >
              <Gamepad className="h-3.5 w-3.5" />
              <span>Play Now</span>
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="border-white/10 bg-[#050520] p-0">
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 bg-[#FFD700] rounded-md flex items-center justify-center">
                        <span className="text-black font-bold text-lg">A</span>
                      </div>
                      <h2 className="text-lg font-bold text-white">
                        <span className="text-[#FFD700] font-mono">ARCADE</span>
                      </h2>
                    </div>
                  </div>

                  <nav className="flex-1 p-6 space-y-6">
                    <button
                      className="flex items-center gap-3 text-white hover:text-[#FFD700] transition-colors w-full text-left"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" })
                        setIsOpen(false)
                      }}
                    >
                      <Gamepad className="h-5 w-5" />
                      <span className="font-medium">Home</span>
                    </button>
                    <button
                      className="flex items-center gap-3 text-white/70 hover:text-white transition-colors w-full text-left"
                      onClick={() => {
                        onNavigate.quests()
                        setIsOpen(false)
                      }}
                    >
                      <Award className="h-5 w-5" />
                      <span className="font-medium">Quests</span>
                    </button>
                    <button
                      className="flex items-center gap-3 text-white/70 hover:text-white transition-colors w-full text-left"
                      onClick={() => {
                        onNavigate.badges()
                        setIsOpen(false)
                      }}
                    >
                      <Award className="h-5 w-5" />
                      <span className="font-medium">Badges</span>
                    </button>
                    <button
                      className="flex items-center gap-3 text-white/70 hover:text-white transition-colors w-full text-left"
                      onClick={() => {
                        onNavigate.leaderboard()
                        setIsOpen(false)
                      }}
                    >
                      <Trophy className="h-5 w-5" />
                      <span className="font-medium">Leaderboard</span>
                    </button>
                    <button
                      className="flex items-center gap-3 text-white/70 hover:text-white transition-colors w-full text-left"
                      onClick={() => {
                        onNavigate.howToPlay()
                        setIsOpen(false)
                      }}
                    >
                      <HelpCircle className="h-5 w-5" />
                      <span className="font-medium">How To Play</span>
                    </button>
                    <button
                      className="flex items-center gap-3 text-white/70 hover:text-white transition-colors w-full text-left"
                      onClick={() => {
                        onNavigate.prizes()
                        setIsOpen(false)
                      }}
                    >
                      <Users className="h-5 w-5" />
                      <span className="font-medium">Prizes</span>
                    </button>
                  </nav>

                  <div className="p-6 border-t border-white/10">
                    <Button className="w-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black hover:opacity-90">
                      <Gamepad className="mr-2 h-4 w-4" />
                      <span>Play Now</span>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

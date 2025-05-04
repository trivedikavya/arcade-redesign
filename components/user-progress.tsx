"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"
import { Award, Clock, Flame, Star } from "lucide-react"

export function UserProgress() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Card className="border-slate-800 bg-slate-900/50">
        <CardContent className="p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-yellow-500">
                <Image src="/placeholder-user.jpg" alt="User Avatar" fill className="object-cover" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Cloud Adventurer</h2>
                <p className="text-sm text-slate-400">Level 3 • 1,240 XP</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="border-slate-800 bg-slate-900/50">
        <CardContent className="p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-yellow-500">
                <Image src="/placeholder-user.jpg" alt="User Avatar" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-yellow-500 py-0.5 text-center text-xs font-bold text-slate-900">
                  Lv.3
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Cloud Adventurer</h2>
                <div className="mt-1">
                  <div className="flex items-center gap-1 text-sm text-slate-400">
                    <span>1,240 XP</span>
                    <span className="text-slate-600">•</span>
                    <span>Next level: 2,000 XP</span>
                  </div>
                  <Progress value={62} className="mt-1 h-1.5" />
                </div>
              </div>
            </div>

            <div className="flex flex-1 flex-wrap gap-4 md:justify-end">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 text-blue-500">
                  <Award className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">12</div>
                  <div className="text-xs text-slate-400">Badges</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                  <Star className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">26</div>
                  <div className="text-xs text-slate-400">Quests</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500/20 text-yellow-500">
                  <Flame className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">5</div>
                  <div className="text-xs text-slate-400">Day Streak</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/20 text-purple-500">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">18h</div>
                  <div className="text-xs text-slate-400">Time Spent</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

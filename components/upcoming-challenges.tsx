"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function UpcomingChallenges() {
  const [hoveredChallenge, setHoveredChallenge] = useState<number | null>(null)

  const challenges = [
    {
      id: 1,
      name: "Cloud Hero Challenge",
      date: "May 15, 2025",
      time: "10:00 AM PST",
      participants: 245,
    },
    {
      id: 2,
      name: "ML Hackathon",
      date: "May 22, 2025",
      time: "9:00 AM PST",
      participants: 178,
    },
    {
      id: 3,
      name: "DevOps Speedrun",
      date: "June 5, 2025",
      time: "11:00 AM PST",
      participants: 132,
    },
  ]

  return (
    <div className="mt-4 space-y-3">
      {challenges.map((challenge) => (
        <motion.div
          key={challenge.id}
          className="rounded-lg border border-slate-800 bg-slate-900/50 p-3"
          onHoverStart={() => setHoveredChallenge(challenge.id)}
          onHoverEnd={() => setHoveredChallenge(null)}
          whileHover={{ y: -2 }}
        >
          <h4 className="font-medium text-white">{challenge.name}</h4>
          <div className="mt-2 flex items-center gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{challenge.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{challenge.time}</span>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-xs text-slate-500">{challenge.participants} participants</span>
            <Button
              size="sm"
              variant="outline"
              className="h-7 border-slate-700 bg-slate-800 text-xs text-slate-300 hover:bg-slate-700 hover:text-white"
            >
              Remind Me
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

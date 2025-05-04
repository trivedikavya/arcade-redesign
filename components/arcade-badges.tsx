"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export function ArcadeBadges() {
  const [hoveredBadge, setHoveredBadge] = useState<number | null>(null)

  const badges = [
    {
      id: 1,
      name: "Arcade Base Camp",
      image: "/images/badge-base-camp.png",
      date: "January 2025",
      points: 1,
      completed: true,
    },
    {
      id: 2,
      name: "Arcade Skills Resolve",
      image: "/images/badge-skills-resolve.png",
      date: "January 2025",
      points: 2,
      completed: true,
    },
    {
      id: 3,
      name: "Arcade Certification Zone",
      image: "/images/badge-certification.png",
      date: "January 2025",
      points: 1,
      completed: false,
    },
    {
      id: 4,
      name: "Level 1: January 2025",
      image: "/images/badge-level-1.png",
      date: "January 2025",
      points: 1,
      completed: true,
    },
    {
      id: 5,
      name: "Level 2: January 2025",
      image: "/images/badge-level-2.png",
      date: "January 2025",
      points: 1,
      completed: false,
    },
    {
      id: 6,
      name: "Level 3: January 2025",
      image: "/images/badge-level-3.png",
      date: "January 2025",
      points: 1,
      completed: false,
    },
  ]

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-white">Your Arcade Badges</h3>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
        {badges.map((badge) => (
          <motion.div
            key={badge.id}
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setHoveredBadge(badge.id)}
            onHoverEnd={() => setHoveredBadge(null)}
            className="relative"
          >
            <div
              className={`relative aspect-square overflow-hidden rounded-full border-2 ${badge.completed ? "border-yellow-500" : "border-slate-700"}`}
            >
              <div className="absolute inset-0 bg-slate-900/50 rounded-full"></div>
              <Image
                src={badge.image || "/placeholder.svg"}
                alt={badge.name}
                width={120}
                height={120}
                className="object-contain p-2"
              />

              {!badge.completed && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-full">
                  <div className="text-xs font-medium text-white">Locked</div>
                </div>
              )}

              <AnimatePresence>
                {hoveredBadge === badge.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 rounded-full p-2"
                  >
                    <div className="text-xs font-medium text-white text-center">{badge.name}</div>
                    <Badge className="mt-1 bg-yellow-500/20 text-yellow-500 text-xs hover:bg-yellow-500/20">
                      {badge.points} {badge.points === 1 ? "point" : "points"}
                    </Badge>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

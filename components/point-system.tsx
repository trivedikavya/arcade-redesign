"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function PointSystem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const pointItems = [
    {
      id: 1,
      level: "LEVEL 1",
      icon: "🎮",
      description: "x1 game badge = 1 point",
    },
    {
      id: 2,
      level: "LEVEL 2",
      icon: "🎮",
      description: "x1 game badge = 1 point",
    },
    {
      id: 3,
      level: "LEVEL 3",
      icon: "🎮",
      description: "x1 game badge = 1 point",
    },
    {
      id: 4,
      level: "TRIVIA",
      icon: "💡",
      description: "x1 game badge = 1 point",
    },
    {
      id: 5,
      level: "SKILL BADGE",
      icon: "🏆",
      description: "x2 badges = 1 point",
    },
  ]

  return (
    <Card ref={ref} className="border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-white mb-6">Point System</h3>

        <div className="space-y-4">
          {pointItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-white/10 bg-white/10">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#FFD700]/10 text-xl">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-white font-mono">{item.level}</h4>
                        <span className="text-sm text-[#FFD700]">{item.description}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: pointItems.length * 0.1 }}
            className="mt-8"
          >
            <Card className="border-white/10 bg-white/10">
              <CardContent className="p-4">
                <h4 className="font-bold text-white text-center font-mono">EXAMPLE</h4>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center text-xl">🏆</div>
                  <div className="flex h-10 w-10 items-center justify-center text-xl">🏆</div>
                  <div className="flex h-10 w-10 items-center justify-center text-xl">💡</div>
                  <div className="flex h-10 w-10 items-center justify-center text-xl">🎮</div>
                  <span className="text-xl font-bold text-white">=</span>
                  <span className="text-xl font-bold text-[#FFD700] font-mono">3 points</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </CardContent>
    </Card>
  )
}

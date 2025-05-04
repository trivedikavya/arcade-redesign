"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function PrizeTiers() {
  const [selectedTier, setSelectedTier] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const tiers = [
    {
      id: 1,
      name: "Arcade Novice",
      points: 20,
      stars: 1,
      description: "Just getting started on your cloud journey",
    },
    {
      id: 2,
      name: "Arcade Trooper",
      points: 40,
      stars: 2,
      description: "Building your cloud skills foundation",
    },
    {
      id: 3,
      name: "Arcade Ranger",
      points: 65,
      stars: 3,
      description: "Becoming proficient in cloud technologies",
    },
    {
      id: 4,
      name: "Arcade Champion",
      points: 75,
      stars: 4,
      description: "Mastering advanced cloud concepts",
    },
    {
      id: 5,
      name: "Arcade Legend",
      points: 85,
      stars: 5,
      description: "Achieved legendary status in cloud expertise",
    },
  ]

  return (
    <Card ref={ref} className="border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
      <CardContent className="p-6">
        <h2 className="mb-6 text-center text-2xl font-bold text-white">
          <span className="text-[#FFD700] font-mono">ARCADE</span> PRIZE TIERS
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedTier(selectedTier === tier.id ? null : tier.id)}
              className="cursor-pointer"
            >
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex justify-center">
                  {Array.from({ length: tier.stars }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ rotate: 0 }}
                      animate={{ rotate: selectedTier === tier.id ? 360 : 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <Star className="h-5 w-5 text-[#FFD700]" />
                    </motion.div>
                  ))}
                </div>

                <h4 className="text-sm font-bold text-white font-mono">{tier.name}</h4>

                <div className="relative h-24 w-24 overflow-hidden rounded-lg bg-gradient-to-br from-[#0a0a2a] to-[#1a1a4a] flex items-center justify-center">
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                    className="text-4xl font-bold text-white/20"
                  >
                    {tier.id}
                  </motion.div>
                </div>

                <div className="text-lg font-bold text-[#FFD700] font-mono">{tier.points} Points</div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedTier && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 overflow-hidden"
            >
              <Card className="border-white/20 bg-white/10">
                <CardContent className="p-4">
                  {tiers
                    .filter((t) => t.id === selectedTier)
                    .map((tier) => (
                      <div key={tier.id} className="text-center">
                        <h4 className="text-lg font-bold text-white">{tier.name}</h4>
                        <p className="mt-2 text-white/70">{tier.description}</p>
                        <div className="mt-4 text-sm text-white/50">
                          Unlock this tier by earning {tier.points} arcade points through completing quests and
                          challenges.
                        </div>
                      </div>
                    ))}
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  )
}

"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Award, Clock, Flame, Star, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

export function UserDashboard() {
  const [mounted, setMounted] = useState(false)
  const [progress, setProgress] = useState(62)
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (showConfetti && typeof window !== "undefined") {
      const createConfetti = async () => {
        const confetti = (await import("canvas-confetti")).default
        const duration = 3 * 1000
        const end = Date.now() + duration

        const frame = () => {
          confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ["#FFD700", "#FFA500", "#FF4500"],
          })

          confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ["#FFD700", "#FFA500", "#FF4500"],
          })

          if (Date.now() < end) {
            requestAnimationFrame(frame)
          }
        }

        frame()

        setTimeout(() => {
          setShowConfetti(false)
        }, duration)
      }

      createConfetti()
    }
  }, [showConfetti])

  const incrementProgress = () => {
    if (progress < 100) {
      setProgress((prev) => Math.min(prev + 5, 100))
      if (progress + 5 >= 100) {
        setShowConfetti(true)
      }
    }
  }

  if (!mounted) {
    return <div className="h-[180px] rounded-xl bg-white/5 animate-pulse"></div>
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="overflow-hidden border-white/10 bg-white/5 backdrop-blur-lg">
        <CardContent className="p-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="relative h-20 w-20 overflow-hidden rounded-xl border-2 border-[#FFD700] bg-gradient-to-br from-[#050520] to-[#0a0a2a]">
                  <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white">
                    CA
                  </div>
                </div>
                <div
                  className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#FFD700] text-xs font-bold text-black cursor-pointer"
                  onClick={incrementProgress}
                >
                  Lv.3
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">Cloud Explorer</h2>
                <div className="mt-1">
                  <div className="flex items-center gap-1 text-sm text-white/70">
                    <span>1,240 XP</span>
                    <span className="text-white/30">•</span>
                    <span>Next level: 2,000 XP</span>
                  </div>
                  <div className="mt-1.5 relative">
                    <Progress
                      value={progress}
                      className="h-2 bg-white/10"
                      indicatorClassName="bg-gradient-to-r from-[#FFD700] to-[#FFA500]"
                    />
                    {progress === 100 && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute -right-1 -top-1 text-[#FFD700]"
                      >
                        <Zap className="h-4 w-4" />
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-1 flex-wrap gap-4 md:justify-end">
              <StatCard icon={<Award className="h-4 w-4" />} value="12" label="Badges" color="blue" />
              <StatCard icon={<Star className="h-4 w-4" />} value="26" label="Quests" color="green" />
              <StatCard icon={<Flame className="h-4 w-4" />} value="5" label="Day Streak" color="yellow" />
              <StatCard icon={<Clock className="h-4 w-4" />} value="18h" label="Time Spent" color="purple" />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function StatCard({ icon, value, label, color }) {
  const colorMap = {
    blue: "bg-blue-500/20 text-blue-400",
    green: "bg-green-500/20 text-green-400",
    yellow: "bg-[#FFD700]/20 text-[#FFD700]",
    purple: "bg-purple-500/20 text-purple-400",
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
      <div className={cn("flex h-8 w-8 items-center justify-center rounded-lg", colorMap[color])}>{icon}</div>
      <div>
        <div className="text-sm font-medium text-white">{value}</div>
        <div className="text-xs text-white/50">{label}</div>
      </div>
    </motion.div>
  )
}

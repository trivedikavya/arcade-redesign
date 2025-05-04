"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock } from "lucide-react"

export function TriviaBadge() {
  const [mounted, setMounted] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-[300px] rounded-lg bg-slate-800/50 animate-pulse"></div>
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="overflow-hidden border-slate-800 bg-slate-900/50">
        <CardContent className="p-0">
          <div className="relative">
            <div className="relative aspect-square overflow-hidden">
              <motion.div
                animate={{
                  rotate: isHovered ? 5 : 0,
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Image
                  src="/images/trivia-badge.png"
                  alt="Trivia Badge"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 p-6 text-center"
              >
                <h3 className="text-xl font-bold text-white">Cloud Trivia Challenge</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Test your Google Cloud knowledge with weekly trivia challenges and earn special badges!
                </p>

                <div className="mt-4 flex items-center gap-4 text-xs text-slate-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>April 2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>Week 1</span>
                  </div>
                </div>

                <Button className="mt-4 bg-yellow-500 text-slate-900 hover:bg-yellow-400">Join Challenge</Button>
              </motion.div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

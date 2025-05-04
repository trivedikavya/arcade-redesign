"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Star } from "lucide-react"
import { motion } from "framer-motion"

interface QuestCardProps {
  title: string
  description: string
  image: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  duration: string
  xp: number
}

export function QuestCard({ title, description, image, difficulty, duration, xp }: QuestCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const difficultyColor = {
    Beginner: "bg-green-500/20 text-green-500 hover:bg-green-500/20",
    Intermediate: "bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/20",
    Advanced: "bg-red-500/20 text-red-500 hover:bg-red-500/20",
  }

  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="overflow-hidden border-slate-800 bg-slate-900/50 transition-colors hover:border-slate-700">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500"
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
          <Badge className={`absolute right-2 top-2 ${difficultyColor[difficulty]}`}>{difficulty}</Badge>
        </div>

        <CardContent className="p-4">
          <h3 className="font-bold text-white">{title}</h3>
          <p className="mt-1 text-sm text-slate-400 line-clamp-2">{description}</p>
        </CardContent>

        <CardFooter className="flex items-center justify-between border-t border-slate-800 p-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-xs text-slate-400">
              <Clock className="h-3 w-3" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-yellow-500">
              <Star className="h-3 w-3" />
              <span>{xp} XP</span>
            </div>
          </div>

          <Button size="sm" className="h-7 bg-yellow-500 text-xs text-slate-900 hover:bg-yellow-400">
            Start
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

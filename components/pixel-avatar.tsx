"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function PixelAvatar() {
  const [currentAvatar, setCurrentAvatar] = useState(0)

  const avatars = [
    {
      id: 1,
      name: "Cloud Explorer",
      image: "/images/pixel-avatar-1.png",
    },
    {
      id: 2,
      name: "Data Wizard",
      image: "/images/pixel-avatar-2.png",
    },
    {
      id: 3,
      name: "Security Guardian",
      image: "/images/pixel-avatar-3.png",
    },
  ]

  const nextAvatar = () => {
    setCurrentAvatar((prev) => (prev + 1) % avatars.length)
  }

  const prevAvatar = () => {
    setCurrentAvatar((prev) => (prev - 1 + avatars.length) % avatars.length)
  }

  return (
    <Card className="border-slate-800 bg-slate-900/50 overflow-hidden">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-white text-center mb-4">Choose Your Avatar</h3>

        <div className="flex items-center justify-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevAvatar}
            className="text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <div className="relative h-32 w-32">
            <motion.div
              key={currentAvatar}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <div className="relative h-full w-full">
                <Image
                  src={avatars[currentAvatar].image || "/placeholder.svg"}
                  alt={avatars[currentAvatar].name}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={nextAvatar}
            className="text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        <motion.div
          key={currentAvatar}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mt-4"
        >
          <h4 className="text-white font-medium">{avatars[currentAvatar].name}</h4>
        </motion.div>

        <div className="flex justify-center mt-4">
          <Button className="bg-yellow-500 text-slate-900 hover:bg-yellow-400">Select Avatar</Button>
        </div>
      </CardContent>
    </Card>
  )
}

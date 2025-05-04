"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Trophy } from "lucide-react"

export function Leaderboard() {
  const [hoveredUser, setHoveredUser] = useState<number | null>(null)

  const users = [
    {
      id: 1,
      name: "CloudNinja",
      avatar: "/placeholder-user.jpg",
      points: 1240,
      position: 1,
    },
    {
      id: 2,
      name: "DataWizard",
      avatar: "/placeholder-user.jpg",
      points: 980,
      position: 2,
    },
    {
      id: 3,
      name: "KubernetesKing",
      avatar: "/placeholder-user.jpg",
      points: 875,
      position: 3,
    },
    {
      id: 4,
      name: "CloudArchitect",
      avatar: "/placeholder-user.jpg",
      points: 720,
      position: 4,
    },
    {
      id: 5,
      name: "MLExplorer",
      avatar: "/placeholder-user.jpg",
      points: 650,
      position: 5,
    },
  ]

  return (
    <div className="mt-4 space-y-2">
      {users.map((user) => (
        <motion.div
          key={user.id}
          className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-slate-800"
          onHoverStart={() => setHoveredUser(user.id)}
          onHoverEnd={() => setHoveredUser(null)}
          whileHover={{ x: 5 }}
        >
          <div className="flex h-6 w-6 items-center justify-center">
            {user.position === 1 ? (
              <Trophy className="h-5 w-5 text-yellow-500" />
            ) : user.position === 2 ? (
              <Trophy className="h-5 w-5 text-slate-400" />
            ) : user.position === 3 ? (
              <Trophy className="h-5 w-5 text-amber-700" />
            ) : (
              <span className="text-sm font-medium text-slate-500">{user.position}</span>
            )}
          </div>

          <div className="relative h-8 w-8 overflow-hidden rounded-full">
            <Image src={user.avatar || "/placeholder.svg"} alt={user.name} fill className="object-cover" />
          </div>

          <div className="flex-1 truncate">
            <span className="font-medium text-white">{user.name}</span>
          </div>

          <div>
            <span className="text-sm font-medium text-yellow-500">{user.points} pts</span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

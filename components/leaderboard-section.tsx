"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Medal, ChevronUp } from "lucide-react"

export function LeaderboardSection() {
  const [period, setPeriod] = useState("weekly")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const leaderboards = {
    daily: [
      { id: 1, name: "CloudNinja", points: 120, position: 1, change: 2 },
      { id: 2, name: "DataWizard", points: 115, position: 2, change: -1 },
      { id: 3, name: "KubernetesKing", points: 95, position: 3, change: 1 },
      { id: 4, name: "CloudArchitect", points: 80, position: 4, change: 0 },
      { id: 5, name: "MLExplorer", points: 75, position: 5, change: 3 },
      { id: 6, name: "DevOpsGuru", points: 70, position: 6, change: -2 },
      { id: 7, name: "SecurityWizard", points: 65, position: 7, change: 0 },
      { id: 8, name: "BigQueryMaster", points: 60, position: 8, change: -3 },
      { id: 9, name: "CloudEngineer", points: 55, position: 9, change: 1 },
      { id: 10, name: "AIResearcher", points: 50, position: 10, change: 2 },
    ],
    weekly: [
      { id: 1, name: "CloudNinja", points: 1240, position: 1, change: 0 },
      { id: 2, name: "DataWizard", points: 980, position: 2, change: 1 },
      { id: 3, name: "KubernetesKing", points: 875, position: 3, change: -1 },
      { id: 4, name: "CloudArchitect", points: 720, position: 4, change: 2 },
      { id: 5, name: "MLExplorer", points: 650, position: 5, change: 0 },
      { id: 6, name: "DevOpsGuru", points: 620, position: 6, change: 3 },
      { id: 7, name: "SecurityWizard", points: 590, position: 7, change: -2 },
      { id: 8, name: "BigQueryMaster", points: 540, position: 8, change: 0 },
      { id: 9, name: "CloudEngineer", points: 510, position: 9, change: -3 },
      { id: 10, name: "AIResearcher", points: 480, position: 10, change: 1 },
    ],
    monthly: [
      { id: 1, name: "CloudNinja", points: 5240, position: 1, change: 0 },
      { id: 2, name: "DataWizard", points: 4980, position: 2, change: 0 },
      { id: 3, name: "KubernetesKing", points: 4875, position: 3, change: 2 },
      { id: 4, name: "CloudArchitect", points: 4720, position: 4, change: -1 },
      { id: 5, name: "MLExplorer", points: 4650, position: 5, change: -1 },
      { id: 6, name: "DevOpsGuru", points: 4620, position: 6, change: 0 },
      { id: 7, name: "SecurityWizard", points: 4590, position: 7, change: 0 },
      { id: 8, name: "BigQueryMaster", points: 4540, position: 8, change: 1 },
      { id: 9, name: "CloudEngineer", points: 4510, position: 9, change: -1 },
      { id: 10, name: "AIResearcher", points: 4480, position: 10, change: 0 },
    ],
  }

  return (
    <Card ref={ref} className="border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Leaderboard</h2>
          <div className="flex bg-white/5 border border-white/10 rounded-md overflow-hidden">
            <button
              onClick={() => setPeriod("daily")}
              className={`px-3 py-1.5 text-sm ${period === "daily" ? "bg-white/10 text-white" : "text-white/70"}`}
            >
              Daily
            </button>
            <button
              onClick={() => setPeriod("weekly")}
              className={`px-3 py-1.5 text-sm ${period === "weekly" ? "bg-white/10 text-white" : "text-white/70"}`}
            >
              Weekly
            </button>
            <button
              onClick={() => setPeriod("monthly")}
              className={`px-3 py-1.5 text-sm ${period === "monthly" ? "bg-white/10 text-white" : "text-white/70"}`}
            >
              Monthly
            </button>
          </div>
        </div>

        <div className="space-y-2">
          {leaderboards[period].map((user, index) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`flex items-center gap-3 rounded-lg p-3 ${index < 3 ? "bg-white/5" : ""}`}
            >
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center">
                {user.position === 1 ? (
                  <Trophy className="h-6 w-6 text-[#FFD700]" />
                ) : user.position === 2 ? (
                  <Trophy className="h-6 w-6 text-[#C0C0C0]" />
                ) : user.position === 3 ? (
                  <Trophy className="h-6 w-6 text-[#CD7F32]" />
                ) : (
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs font-medium text-white">
                    {user.position}
                  </div>
                )}
              </div>

              <div className="flex-1">
                <div className="flex items-center">
                  <span className="font-medium text-white">{user.name}</span>
                  {user.change !== 0 && (
                    <div
                      className={`ml-2 flex items-center text-xs ${
                        user.change > 0 ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {user.change > 0 ? (
                        <>
                          <ChevronUp className="h-3 w-3" />
                          <span>{user.change}</span>
                        </>
                      ) : (
                        <>
                          <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M6 9l6 6 6-6"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span>{Math.abs(user.change)}</span>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-1">
                <Medal className="h-4 w-4 text-[#FFD700]" />
                <span className="font-medium text-white">{user.points}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

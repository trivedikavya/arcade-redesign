"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Info, Lock } from "lucide-react"

export function BadgeShowcase() {
  const [selectedBadge, setSelectedBadge] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("earned")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const badges = {
    circular: [
      {
        id: "trivia-apr",
        name: "Trivia Master: April 2025",
        type: "circular",
        description: "Completed all trivia challenges in April 2025",
        earned: "2 weeks ago",
        rarity: "Uncommon",
        image: "/images/smallcircle.png",
        completed: true,
      },
      {
        id: "skills-boost",
        name: "Skills Boost: March 2025",
        type: "circular",
        description: "Completed the March 2025 skills challenge",
        earned: "1 month ago",
        rarity: "Rare",
        image: "/images/smallcircle.png",
        completed: true,
      },
      {
        id: "cloud-master",
        name: "Cloud Master: February 2025",
        type: "circular",
        description: "Achieved mastery in cloud fundamentals",
        earned: "2 months ago",
        rarity: "Epic",
        image: "/images/smallcircle.png",
        completed: true,
      },
      {
        id: "arcade-champion",
        name: "Arcade Champion: May 2025",
        type: "circular",
        description: "Upcoming champion badge for May 2025",
        rarity: "Legendary",
        image: "/images/smallcircle.png",
        completed: false,
      },
      {
        id: "cloud-innovator",
        name: "Cloud Innovator: June 2025",
        type: "circular",
        description: "For innovative cloud solutions",
        rarity: "Epic",
        image: "/images/smallcircle.png",
        completed: false,
      },
    ],
    square: [
      {
        id: "kubernetes-expert",
        name: "Kubernetes Expert",
        type: "square",
        description: "Mastered Kubernetes orchestration",
        earned: "3 weeks ago",
        rarity: "Rare",
        image: "/images/squarearcadeimg.png",
        completed: false,
        comingSoon: true,
      },
      {
        id: "ml-specialist",
        name: "ML Specialist",
        type: "square",
        description: "Completed advanced machine learning courses",
        earned: "1 month ago",
        rarity: "Epic",
        image: "/images/squarearcadeimg.png",
        completed: true,
      },
      {
        id: "security-guardian",
        name: "Security Guardian",
        type: "square",
        description: "Mastered cloud security principles",
        earned: "Coming soon",
        rarity: "Legendary",
        image: "/images/squarearcadeimg.png",
        completed: false,
        comingSoon: true,
      },
    ],
  }

  return (
    <div ref={ref} className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Badge Collection</h2>

      <div className="flex bg-white/5 border border-white/10 rounded-md overflow-hidden w-fit">
        <button
          onClick={() => setActiveTab("earned")}
          className={`px-3 py-1.5 text-sm ${activeTab === "earned" ? "bg-white/10 text-white" : "text-white/70"}`}
        >
          Earned
        </button>
        <button
          onClick={() => setActiveTab("available")}
          className={`px-3 py-1.5 text-sm ${activeTab === "available" ? "bg-white/10 text-white" : "text-white/70"}`}
        >
          Available
        </button>
      </div>

      {activeTab === "earned" && (
        <div className="mt-6 space-y-8">
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Circular Badges</h3>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-5">
              {badges.circular.map((badge, index) => (
                <motion.div
                  key={badge.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedBadge(badge.id === selectedBadge ? null : badge.id)}
                  className="cursor-pointer"
                >
                  <div className="relative aspect-square overflow-hidden rounded-full">
                    <Image src={badge.image || "/placeholder.svg"} alt={badge.name} fill className="object-cover" />

                    {!badge.completed && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/70 rounded-full">
                        <Lock className="h-6 w-6 text-white/70" />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-white mb-4">Square Badges</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {badges.square.map((badge, index) => (
                <motion.div
                  key={badge.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedBadge(badge.id === selectedBadge ? null : badge.id)}
                  className="cursor-pointer"
                >
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <Image src={badge.image || "/placeholder.svg"} alt={badge.name} fill className="object-cover" />

                    {badge.comingSoon && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                        <div className="text-xs font-medium text-white">Coming Soon</div>
                      </div>
                    )}

                    {!badge.completed && !badge.comingSoon && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                        <Lock className="h-6 w-6 text-white/70" />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <AnimatePresence>
            {selectedBadge && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
                  <CardContent className="p-4">
                    {[...badges.circular, ...badges.square]
                      .filter((b) => b.id === selectedBadge)
                      .map((badge) => (
                        <div key={badge.id} className="flex gap-4">
                          <div
                            className={`relative h-16 w-16 overflow-hidden ${badge.type === "circular" ? "rounded-full" : "rounded-lg"}`}
                          >
                            <Image
                              src={badge.image || "/placeholder.svg"}
                              alt={badge.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold text-white">{badge.name}</h4>
                            <p className="text-sm text-white/70">{badge.description}</p>
                            <div className="mt-2 flex items-center gap-3">
                              {badge.completed ? (
                                <span className="text-xs text-white/50">Earned {badge.earned}</span>
                              ) : (
                                <span className="text-xs text-white/50">Not yet earned</span>
                              )}
                              <span className="text-xs text-white/30">•</span>
                              <Badge className="bg-[#FFD700]/20 text-[#FFD700] hover:bg-[#FFD700]/20 text-xs">
                                {badge.rarity}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      ))}
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {activeTab === "available" && (
        <div className="mt-6">
          <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
            <CardContent className="p-6 flex flex-col items-center justify-center text-center">
              <Info className="h-10 w-10 text-white/30 mb-4" />
              <h3 className="text-lg font-medium text-white">More Badges Available</h3>
              <p className="mt-2 text-sm text-white/70 max-w-md">
                Complete quests and challenges to unlock additional badges. New badges are added every month!
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

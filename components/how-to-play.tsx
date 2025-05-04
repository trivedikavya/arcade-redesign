"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function HowToPlay() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const steps = [
    {
      number: "01",
      title: "Create a Google Cloud account",
      description: "Sign up for a free Google Cloud account if you don't already have one",
    },
    {
      number: "02",
      title: "Subscribe to Arcade emails",
      description: "Get updates about new challenges, prizes, and special events",
    },
    {
      number: "03",
      title: "Join Google Cloud Skills Boost",
      description: "You don't need a new account if you're already registered",
    },
    {
      number: "04",
      title: "Start with free no-credit games",
      description: "Begin with games that don't require Google Cloud credits",
    },
    {
      number: "05",
      title: "Play games to learn skills",
      description: "Complete quests to earn badges and arcade points",
    },
    {
      number: "06",
      title: "Enroll in Skill Badges",
      description: "Skill badges help you complete game tasks and earn more points",
    },
    {
      number: "07",
      title: "Participate in special events",
      description: "Join hackathons and challenges for bonus points and exclusive badges",
    },
    {
      number: "08",
      title: "Redeem points for prizes",
      description: "Use your accumulated points to claim exclusive rewards",
    },
  ]

  return (
    <Card ref={ref} className="border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-white mb-6">How To Play</h3>

        <div className="space-y-4 max-h-[600px] overflow-y-auto pr-1">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#FFD700]/20 to-[#FFA500]/20">
                <span className="text-lg font-bold text-[#FFD700] font-mono">{step.number}</span>
              </div>
              <div>
                <h4 className="font-bold text-white">{step.title}</h4>
                <p className="mt-1 text-sm text-white/70">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const steps = [
    {
      number: "01",
      title: "Subscribe to active Arcade emails",
      description: "Subscribe to active Arcade emails for your account including prizes and codes",
    },
    {
      number: "02",
      title: "Join Google Cloud Skills Boost",
      description: "You don't need a new account if you're already registered.",
    },
    {
      number: "03",
      title: "Play games to learn skills",
      description:
        "Play games to learn skills, earn badges and get arcade points. We suggest starting at level 1 if you're new to cloud!",
    },
    {
      number: "04",
      title: "Enroll in Skill Badges",
      description: "Enroll in Skill Badges to help you complete game tasks and get more Arcade points.",
    },
    {
      number: "05",
      title: "REDEEM points at the prize counter",
      description: "Use your accumulated points to claim exclusive rewards and prizes.",
    },
  ]

  return (
    <div ref={ref} className="relative overflow-hidden rounded-lg border border-slate-800 bg-slate-900/50 p-6">
      <div className="absolute inset-0 bg-grid-small-white/[0.02] bg-[size:20px_20px]"></div>

      <h3 className="relative mb-8 text-center text-xl font-bold text-white">How It Works</h3>

      <div className="relative space-y-6">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="border-slate-800 bg-slate-800/30 overflow-hidden">
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-yellow-500/20">
                    <span className="text-lg font-bold text-yellow-500 font-mono">{step.number}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{step.title}</h4>
                    <p className="mt-1 text-sm text-slate-400">{step.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

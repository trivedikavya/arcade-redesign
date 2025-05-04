"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users, Award, Gamepad } from "lucide-react"

export function UpcomingEvents() {
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const events = [
    {
      id: 1,
      name: "Cloud Hero Challenge",
      date: "May 15, 2025",
      time: "10:00 AM PST",
      participants: 245,
      icon: <Award className="h-4 w-4 text-blue-400" />,
    },
    {
      id: 2,
      name: "ML Hackathon",
      date: "May 22, 2025",
      time: "9:00 AM PST",
      participants: 178,
      icon: <Award className="h-4 w-4 text-green-400" />,
    },
    {
      id: 3,
      name: "DevOps Speedrun",
      date: "June 5, 2025",
      time: "11:00 AM PST",
      participants: 132,
      icon: <Award className="h-4 w-4 text-yellow-400" />,
    },
    {
      id: 4,
      name: "Cloud Gaming Tournament",
      date: "June 12, 2025",
      time: "2:00 PM PST",
      participants: 210,
      icon: <Gamepad className="h-4 w-4 text-purple-400" />,
    },
    {
      id: 5,
      name: "Security Challenge",
      date: "June 20, 2025",
      time: "10:30 AM PST",
      participants: 156,
      icon: <Award className="h-4 w-4 text-red-400" />,
    },
  ]

  return (
    <Card ref={ref} className="border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-white mb-4">Upcoming Events</h3>

        <div className="space-y-3 max-h-[400px] overflow-y-auto pr-1 scrollbar-thin">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg border border-white/10 bg-white/5 p-3"
              onHoverStart={() => setHoveredEvent(event.id)}
              onHoverEnd={() => setHoveredEvent(null)}
              whileHover={{ y: -2 }}
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/10">
                  {event.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-white">{event.name}</h4>
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-white/70">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      <span>{event.participants} participants</span>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-end">
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-7 border-white/10 bg-white/5 text-xs text-white hover:bg-white/10"
                    >
                      Remind Me
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

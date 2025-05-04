"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Star, ChevronRight } from "lucide-react"

export function QuestGallery() {
  const [activeTab, setActiveTab] = useState("trending")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const quests = {
    trending: [
      {
        id: 1,
        title: "Kubernetes Engine: Qwik Start",
        description: "Learn the basics of Kubernetes and deploy your first container.",
        difficulty: "Beginner",
        duration: "30 min",
        xp: 20,
      },
      {
        id: 2,
        title: "Getting Started with BigQuery ML",
        description: "Create and execute machine learning models in BigQuery using SQL.",
        difficulty: "Intermediate",
        duration: "45 min",
        xp: 35,
      },
      {
        id: 3,
        title: "Deploy a Hugo Website with Cloud Build",
        description: "Use Cloud Build to deploy a static website built with Hugo.",
        difficulty: "Beginner",
        duration: "25 min",
        xp: 15,
      },
      {
        id: 4,
        title: "Vertex AI: Qwik Start",
        description: "Get started with Google's unified AI platform for ML development.",
        difficulty: "Advanced",
        duration: "60 min",
        xp: 50,
      },
    ],
    new: [
      {
        id: 5,
        title: "Cloud Run: Zero to Hero",
        description: "Master serverless container deployment with Cloud Run.",
        difficulty: "Intermediate",
        duration: "40 min",
        xp: 30,
      },
      {
        id: 6,
        title: "Firebase Authentication",
        description: "Implement secure user authentication with Firebase.",
        difficulty: "Beginner",
        duration: "35 min",
        xp: 25,
      },
      {
        id: 7,
        title: "Cloud Functions Essentials",
        description: "Learn to build serverless event-driven applications.",
        difficulty: "Intermediate",
        duration: "45 min",
        xp: 35,
      },
      {
        id: 8,
        title: "AI Platform: Deep Learning",
        description: "Build and train neural networks on Google Cloud.",
        difficulty: "Advanced",
        duration: "60 min",
        xp: 50,
      },
    ],
    popular: [
      {
        id: 9,
        title: "Machine Learning APIs",
        description: "Explore Google Cloud's pre-trained machine learning APIs.",
        difficulty: "Intermediate",
        duration: "50 min",
        xp: 40,
      },
      {
        id: 10,
        title: "Cloud Security Scanner",
        description: "Learn to identify security vulnerabilities in your applications.",
        difficulty: "Advanced",
        duration: "55 min",
        xp: 45,
      },
      {
        id: 11,
        title: "BigQuery for Data Analysts",
        description: "Master data analysis with Google's serverless data warehouse.",
        difficulty: "Intermediate",
        duration: "40 min",
        xp: 35,
      },
      {
        id: 12,
        title: "Kubernetes Best Practices",
        description: "Learn production-ready techniques for container orchestration.",
        difficulty: "Advanced",
        duration: "65 min",
        xp: 55,
      },
    ],
  }

  return (
    <section ref={ref} className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Quests & Challenges</h2>

        <div className="hidden sm:flex items-center space-x-4">
          <div className="flex bg-white/5 border border-white/10 rounded-md overflow-hidden">
            <button
              onClick={() => setActiveTab("trending")}
              className={`px-3 py-1.5 text-sm ${activeTab === "trending" ? "bg-white/10 text-white" : "text-white/70"}`}
            >
              Trending
            </button>
            <button
              onClick={() => setActiveTab("new")}
              className={`px-3 py-1.5 text-sm ${activeTab === "new" ? "bg-white/10 text-white" : "text-white/70"}`}
            >
              New
            </button>
            <button
              onClick={() => setActiveTab("popular")}
              className={`px-3 py-1.5 text-sm ${activeTab === "popular" ? "bg-white/10 text-white" : "text-white/70"}`}
            >
              Popular
            </button>
          </div>
        </div>

        <Button variant="link" className="gap-1 text-[#FFD700] hover:text-[#FFA500]">
          <span>View all</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="sm:hidden">
        <div className="flex w-full bg-white/5 border border-white/10 rounded-md overflow-hidden">
          <button
            onClick={() => setActiveTab("trending")}
            className={`flex-1 px-3 py-1.5 text-sm ${activeTab === "trending" ? "bg-white/10 text-white" : "text-white/70"}`}
          >
            Trending
          </button>
          <button
            onClick={() => setActiveTab("new")}
            className={`flex-1 px-3 py-1.5 text-sm ${activeTab === "new" ? "bg-white/10 text-white" : "text-white/70"}`}
          >
            New
          </button>
          <button
            onClick={() => setActiveTab("popular")}
            className={`flex-1 px-3 py-1.5 text-sm ${activeTab === "popular" ? "bg-white/10 text-white" : "text-white/70"}`}
          >
            Popular
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {quests[activeTab].map((quest, index) => (
          <QuestCard key={quest.id} quest={quest} index={index} isInView={isInView} />
        ))}
      </div>
    </section>
  )
}

function QuestCard({ quest, index, isInView }) {
  const [isHovered, setIsHovered] = useState(false)

  const difficultyColor = {
    Beginner: "bg-green-500/20 text-green-400 border-green-500/30",
    Intermediate: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    Advanced: "bg-red-500/20 text-red-400 border-red-500/30",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="h-full"
    >
      <Card className="overflow-hidden border-white/10 bg-white/5 backdrop-blur-sm transition-colors hover:bg-white/10 h-full flex flex-col">
        <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-[#0a0a2a] to-[#1a1a4a]">
          {/* Challenge Arcade Image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/images/challengearcade.png"
                alt="Challenge"
                fill
                className="object-cover"
                style={{
                  objectFit: "contain",
                  padding: "10px",
                }}
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
          <Badge className={`absolute right-2 top-2 border ${difficultyColor[quest.difficulty]}`}>
            {quest.difficulty}
          </Badge>
        </div>

        <CardContent className="p-4 flex-grow">
          <h3 className="font-bold text-white">{quest.title}</h3>
          <p className="mt-1 text-sm text-white/70 line-clamp-2">{quest.description}</p>
        </CardContent>

        <CardFooter className="flex items-center justify-between border-t border-white/10 p-4 mt-auto">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-xs text-white/50">
              <Clock className="h-3 w-3" />
              <span>{quest.duration}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-[#FFD700]">
              <Star className="h-3 w-3" />
              <span>{quest.xp} XP</span>
            </div>
          </div>

          <Button
            size="sm"
            className="h-7 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-xs text-black hover:opacity-90"
          >
            Start
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

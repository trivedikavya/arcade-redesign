"use client"

import type React from "react"

import { useRef } from "react"
import { MainNav } from "@/components/main-nav"
import { HeroSection } from "@/components/hero-section"
import { UserDashboard } from "@/components/user-dashboard"
import { QuestGallery } from "@/components/quest-gallery"
import { BadgeShowcase } from "@/components/badge-showcase"
import { LeaderboardSection } from "@/components/leaderboard-section"
import { UpcomingEvents } from "@/components/upcoming-events"
import { PrizeTiers } from "@/components/prize-tiers"
import { HowToPlay } from "@/components/how-to-play"
import { Footer } from "@/components/footer"
import { PointSystem } from "@/components/point-system"

export default function HomePage() {
  const questsRef = useRef<HTMLDivElement>(null)
  const badgesRef = useRef<HTMLDivElement>(null)
  const leaderboardRef = useRef<HTMLDivElement>(null)
  const howToPlayRef = useRef<HTMLDivElement>(null)
  const prizesRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#050520]">
      <MainNav
        onNavigate={{
          quests: () => scrollToSection(questsRef),
          badges: () => scrollToSection(badgesRef),
          leaderboard: () => scrollToSection(leaderboardRef),
          howToPlay: () => scrollToSection(howToPlayRef),
          prizes: () => scrollToSection(prizesRef),
        }}
      />

      <main className="flex-1">
        <HeroSection />

        <section className="container mx-auto px-4 py-16">
          <UserDashboard />

          <div ref={questsRef} className="mt-16">
            <QuestGallery />
          </div>

          <div ref={badgesRef} className="mt-16">
            <BadgeShowcase />
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div ref={leaderboardRef} className="md:col-span-2">
              <LeaderboardSection />
            </div>
            <div>
              <UpcomingEvents />
            </div>
          </div>

          <div ref={prizesRef} className="mt-16">
            <PrizeTiers />
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div ref={howToPlayRef}>
              <HowToPlay />
            </div>
            <div>
              <PointSystem />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

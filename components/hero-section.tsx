"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Gamepad2, Search, ChevronDown } from "lucide-react"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100])

  // Particle animation
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])

  interface Particle {
    x: number
    y: number
    size: number
    speedX: number
    speedY: number
    color: string
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      if (canvas && canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth
        canvas.height = canvas.parentElement.offsetHeight

        // Recreate particles when canvas is resized
        createParticles()
      }
    }

    // Create particles
    const createParticles = () => {
      const newParticles: Particle[] = []
      const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 10000))

      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: `rgba(255, 215, 0, ${Math.random() * 0.5 + 0.2})`, // Gold with varying opacity
        })
      }

      particlesRef.current = newParticles
    }

    // Animation loop
    let animationFrameId: number

    const animate = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particlesRef.current = particlesRef.current.map((particle) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        return particle
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    // Initialize
    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, []) // Empty dependency array - only run once on mount

  // Arcade machine animation
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Calculate rotation based on mouse position relative to center
    const rotateY = ((e.clientX - centerX) / rect.width) * 10
    const rotateX = ((e.clientY - centerY) / rect.height) * 10

    setRotation({ x: -rotateX, y: rotateY })
  }

  return (
    <motion.section
      ref={containerRef}
      style={{ opacity, scale, y }}
      className="relative h-screen w-full overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Particle background */}
      <div className="absolute inset-0 z-0 bg-[#050520]">
        <canvas ref={canvasRef} className="absolute inset-0" />
      </div>

      {/* Arcade machine */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <motion.div
          animate={{
            rotateX: rotation.x,
            rotateY: rotation.y,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
          className="relative w-64 h-96 md:w-80 md:h-[30rem]"
          style={{ perspective: "1000px" }}
        >
          {/* Cabinet */}
          <div className="absolute inset-0 bg-[#1a1a2e] rounded-t-lg rounded-b-md shadow-2xl transform-gpu">
            {/* Screen */}
            <div className="absolute top-[15%] left-[10%] right-[10%] h-[40%] bg-black rounded-md overflow-hidden border-4 border-[#0f0f1a]">
              <div className="absolute inset-0 bg-[#000033] opacity-70">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="text-[#FFD700] font-bold text-xl md:text-3xl font-mono"
                  >
                    ARCADE
                  </motion.div>
                </div>

                {/* Screen scan lines */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, rgba(255,255,255,0.1), rgba(255,255,255,0.1) 1px, transparent 1px, transparent 2px)",
                  }}
                ></div>
              </div>
            </div>

            {/* Control panel */}
            <div className="absolute top-[60%] left-[5%] right-[5%] h-[25%] bg-[#0f0f1a] rounded-md transform-gpu -rotate-x-[20deg] origin-top">
              {/* Joystick */}
              <div className="absolute left-[25%] top-[30%]">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-red-600 shadow-lg"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 md:w-3 h-8 md:h-10 bg-red-700 rounded-full -translate-y-3/4"></div>
              </div>

              {/* Buttons */}
              <div className="absolute right-[15%] top-[30%] flex gap-2 md:gap-3">
                <div className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-[#FFD700] shadow-lg"></div>
                <div className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-[#4169E1] shadow-lg"></div>
                <div className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-[#32CD32] shadow-lg"></div>
              </div>
            </div>

            {/* Cabinet top */}
            <div className="absolute top-[5%] left-[10%] right-[10%] h-[8%] bg-[#FFD700] rounded-md flex items-center justify-center">
              <span className="text-black font-bold text-xs md:text-sm">GOOGLE CLOUD</span>
            </div>

            {/* Cabinet sides */}
            <div className="absolute top-0 left-0 bottom-0 w-[5%] bg-[#151525]"></div>
            <div className="absolute top-0 right-0 bottom-0 w-[5%] bg-[#151525]"></div>
          </div>
        </motion.div>
      </div>

      {/* Content overlay */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
        <div className="mt-[30vh] space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl font-bold text-white md:text-6xl lg:text-7xl"
          >
            Level Up Your <span className="text-[#FFD700]">Cloud Skills</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mx-auto max-w-2xl text-lg text-white/70 md:text-xl"
          >
            Master Google Cloud through interactive quests, earn badges, and compete with cloud enthusiasts worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row"
          >
            <Button size="lg" className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black hover:opacity-90">
              <Gamepad2 className="mr-2 h-5 w-5" />
              Start Playing Now
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10">
              <Search className="mr-2 h-5 w-5" />
              Explore Quests
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <ChevronDown className="h-8 w-8 text-white/50" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

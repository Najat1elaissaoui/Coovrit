"use client"

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  opacity: number
}

export default function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Particle[]>([])
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    updateCanvasSize()

    // Create particles
    const createParticles = () => {
      particles.current = []
      const colors = [
        'rgba(59, 130, 246, 0.6)', // blue
        'rgba(147, 51, 234, 0.6)', // purple
        'rgba(34, 197, 94, 0.6)',  // green
        'rgba(239, 68, 68, 0.6)',  // red
        'rgba(245, 158, 11, 0.6)', // orange
      ]

      for (let i = 0; i < 30; i++) {
        particles.current.push({
          id: i,
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.5 + 0.2
        })
      }
    }

    // Animate particles
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.current.forEach((particle) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1
        }

        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        particle.y = Math.max(0, Math.min(canvas.height, particle.y))

        // Draw particle with glow effect
        ctx.save()
        ctx.globalAlpha = particle.opacity
        ctx.shadowBlur = 20
        ctx.shadowColor = particle.color
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      // Draw connections between nearby particles
      particles.current.forEach((particleA, indexA) => {
        particles.current.slice(indexA + 1).forEach((particleB) => {
          const dx = particleA.x - particleB.x
          const dy = particleA.y - particleB.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.save()
            ctx.globalAlpha = (150 - distance) / 150 * 0.2
            ctx.strokeStyle = 'rgba(59, 130, 246, 0.3)'
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particleA.x, particleA.y)
            ctx.lineTo(particleB.x, particleB.y)
            ctx.stroke()
            ctx.restore()
          }
        })
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    createParticles()
    animate()

    // Handle resize
    const handleResize = () => {
      updateCanvasSize()
      createParticles()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'transparent' }}
      />
      
      {/* Floating 3D Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 rounded-full opacity-30"
            style={{
              background: `linear-gradient(135deg, 
                rgba(59, 130, 246, 0.3) 0%, 
                rgba(147, 51, 234, 0.2) 100%)`,
              filter: 'blur(10px)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
        
        {/* Morphing shapes */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`morph-${i}`}
            className="absolute w-16 h-16 opacity-20"
            style={{
              background: `radial-gradient(circle, 
                rgba(${i % 2 === 0 ? '59, 130, 246' : '147, 51, 234'}, 0.4) 0%, 
                transparent 70%)`,
              left: `${20 + i * 25}%`,
              top: `${30 + i * 15}%`,
            }}
            animate={{
              borderRadius: [
                "60% 40% 30% 70% / 60% 30% 70% 40%",
                "30% 60% 70% 40% / 50% 60% 30% 60%",
                "20% 80% 60% 40% / 30% 50% 80% 60%",
                "40% 60% 40% 80% / 70% 40% 50% 60%",
                "60% 40% 30% 70% / 60% 30% 70% 40%"
              ],
              rotate: [0, 90, 180, 270, 360],
              scale: [1, 1.2, 0.8, 1.1, 1],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          />
        ))}

        {/* Glowing orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-32 h-32 rounded-full"
            style={{
              background: `radial-gradient(circle, 
                rgba(${i === 0 ? '34, 197, 94' : i === 1 ? '239, 68, 68' : '245, 158, 11'}, 0.3) 0%, 
                rgba(${i === 0 ? '34, 197, 94' : i === 1 ? '239, 68, 68' : '245, 158, 11'}, 0.1) 40%,
                transparent 70%)`,
              filter: 'blur(20px)',
              right: `${10 + i * 30}%`,
              bottom: `${20 + i * 20}%`,
            }}
            animate={{
              scale: [1, 1.3, 0.9, 1.1, 1],
              opacity: [0.3, 0.6, 0.2, 0.5, 0.3],
              y: [0, -40, 20, -20, 0],
            }}
            transition={{
              duration: 10 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}
      </div>
    </>
  )
}

"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card"
import { Badge } from "@/components/badge"
import FloatingParticles from "@/components/floating-particles"
import {
  Play,
  Monitor,
  Shield,
  Star,
  Check,
  Zap,
  Globe,
  Headphones,
  ChevronUp,
  MessageCircle,
  Clock,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import Image from "next/image"
import Link from "next/link"

export default function CoovritLanding() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [navbarOpacity, setNavbarOpacity] = useState(0.95)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const whatsappNumber = "0752881504"

  useEffect(() => {
    setIsLoaded(true)

    const handleScroll = () => {
      const scrollY = window.scrollY
      setShowScrollTop(scrollY > 400)
      
      // Ajuster l'opacité de la navbar en fonction du scroll
      const newOpacity = Math.min(0.95 + (scrollY / 1000) * 0.05, 1)
      setNavbarOpacity(newOpacity)
    }

    // Auto slide rotation for hero section
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4)
    }, 5000)

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearInterval(slideInterval)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const openWhatsApp = (productName: string) => {
    const message = `Bonjour, je suis intéressé par le produit ${productName} et j'aimerais avoir plus d'informations.`
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  const openWhatsAppGeneral = () => {
    const message = "Bonjour, j'aimerais en savoir plus sur vos caches climatisation."
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  const slideContent = [
    {
      badge: "✨ L'appel à l'esthétique",
      title: "Ne cachez plus votre clim,",
      subtitle: "sublimez-la.",
      description: "Transformez un élément technique en un objet de décoration, à l'image de votre style.",
      cta: "Découvrez comment votre extérieur peut faire la différence"
    },
    {
      badge: "🎨 La discrétion élégante", 
      title: "La clim devient invisible,",
      subtitle: "le style devient essentiel.",
      description: "Quand la fonctionnalité disparaît au profit de la beauté de l'espace.",
      cta: "Laissez parler votre sens du détail"
    },
    {
      badge: "💡 Le déclic émotionnel",
      title: "Vous avez pris soin de tout…",
      subtitle: "sauf de ça.",
      description: "Votre cache clim mérite autant d'attention que votre mobilier ou vos murs.",
      cta: "Et si c'était le moment d'y remédier ?"
    },
    {
      badge: "🏡 Le style maîtrisé",
      title: "L'harmonie entre technique et design",
      subtitle: "commence ici.",
      description: "Des solutions pensées pour s'intégrer parfaitement à vos espaces, dedans comme dehors.",
      cta: "Donnez une nouvelle cohérence à votre aménagement"
    }
  ]

  return (
    <div className="min-h-screen bg-white overflow-x-hidden perspective-container">
      {/* Floating Particles Background */}
      <FloatingParticles />
      
      {/* Enhanced Header with Professional Design */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          y: { duration: 0.6, ease: "easeOut" },
          opacity: { duration: 0.3 }
        }}
        className="header-fixed backdrop-blur-xl border-b border-white/10 flex flex-col md:flex-row md:items-center md:justify-between px-2 md:px-6"
        style={{
          background: `linear-gradient(135deg, rgba(255,255,255,${0.95 + navbarOpacity * 0.05}) 0%, rgba(248,250,252,${0.97 + navbarOpacity * 0.03}) 100%)`,
          boxShadow: `0 8px 32px rgba(0,0,0,${0.1 + navbarOpacity * 0.1})`,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 99999,
          width: "100%",
          transform: "translateZ(0)", // Force hardware acceleration
          willChange: "transform", // Optimize for animations
          backfaceVisibility: "hidden" // Prevent flickering
        }}
      >
        {/* Professional Background with Organic Curves */}
        <div className="absolute inset-0 overflow-hidden">
          <svg 
            viewBox="0 0 1200 100" 
            className="absolute top-0 left-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="headerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.05)" />
                <stop offset="50%" stopColor="rgba(16, 185, 129, 0.03)" />
                <stop offset="100%" stopColor="rgba(147, 51, 234, 0.05)" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0,20 C300,5 600,35 900,15 C1050,5 1150,25 1200,20 L1200,100 L0,100 Z"
              fill="url(#headerGradient)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
            
            {/* Logo Section with Professional Contact Image */}
            <motion.div 
              className="flex items-center space-x-3 sm:space-x-4 md:space-x-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Professional Contact Image */}
              {/* <motion.div
                className="relative w-12 h-12 rounded-full overflow-hidden shadow-lg"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  boxShadow: "0 10px 25px rgba(34, 197, 94, 0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-blue-500/20 rounded-full" />
                <Image
                  src="/contact.png"
                  alt="COOVRIT Professional Contact"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover rounded-full border-2 border-white/50"
                />
                <div className="absolute inset-0 rounded-full border border-emerald-200/30" />
              </motion.div> */}

              {/* Logo with Enhanced Design */}
              <motion.div 
                className="flex items-center space-x-2 sm:space-x-3"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative"
                >
                  <Image
                    src="/logo.png"
                    alt="COOVRIT Logo"
                    width={32}
                    height={32}
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 object-contain"
                  />
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-emerald-400/30 to-blue-500/30 rounded-full blur-sm"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
                
                <div className="flex flex-col">
                  <motion.h1 
                    className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-800 via-emerald-700 to-blue-700 bg-clip-text text-transparent"
                    whileHover={{ 
                      scale: 1.05,
                      textShadow: "0 2px 8px rgba(34, 197, 94, 0.3)"
                    }}
                  >
                    COOVRIT
                  </motion.h1>
                  <motion.p 
                    className="text-xs sm:text-xs text-gray-600 font-medium tracking-wide hidden sm:block"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Excellence & Innovation
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { name: "Accueil", id: "accueil" },
                { name: "Produits", id: "produits" },
                { name: "À Propos", id: "pourquoi-nous" },
                { name: "Contact", id: "contact" }
              ].map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => {
                    const element = document.getElementById(item.id);
                    if (element) {
                      const headerHeight = 80; // hauteur du header fixe
                      const offsetTop = element.offsetTop - headerHeight;
                      window.scrollTo({
                        top: offsetTop,
                        behavior: "smooth"
                      });
                    }
                  }}
                  className="relative text-gray-700 hover:text-emerald-600 font-semibold text-sm transition-colors duration-300 py-2 px-3 rounded-lg group"
                  whileHover={{ 
                    scale: 1.05,
                    y: -2
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.1 * index,
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                >
                  {item.name}
                  
                  {/* Floating indicator */}
                  <motion.div
                    className="absolute -bottom-2 left-1/2 w-1 h-1 bg-emerald-500 rounded-full"
                    initial={{ scale: 0, x: "-50%" }}
                    whileHover={{ 
                      scale: 1,
                      boxShadow: "0 0 8px rgba(34, 197, 94, 0.6)"
                    }}
                    transition={{ duration: 0.2 }}
                  />
                  
                  {/* Hover background */}
                  <motion.div
                    className="absolute inset-0 bg-emerald-50/50 rounded-lg -z-10"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              ))}
            </nav>

            {/* Enhanced CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={() => openWhatsAppGeneral()}
                className="relative bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 hover:from-emerald-700 hover:via-green-700 hover:to-teal-700 text-white font-bold px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 rounded-xl shadow-lg overflow-hidden group border-0 text-xs sm:text-sm"
                style={{
                  boxShadow: "0 8px 20px rgba(34, 197, 94, 0.3)"
                }}
              >
                {/* Background animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Glowing effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
                
                <motion.div
                  className="flex items-center space-x-1 sm:space-x-2 relative z-10"
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    <FaWhatsapp className="h-3 w-3 sm:h-4 sm:w-4" />
                  </motion.div>
                  <span className="text-xs sm:text-sm">Devis Gratuit</span>
                </motion.div>
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center rounded-lg hover:bg-gray-100/50 transition-colors duration-200"
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.span
                className="block w-6 h-0.5 bg-gray-700 rounded"
                animate={{ 
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 6 : 0
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-gray-700 rounded mt-1"
                animate={{ 
                  opacity: isMobileMenuOpen ? 0 : 1
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-gray-700 rounded mt-1"
                animate={{ 
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -6 : 0
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>
        </div>

        {/* Professional bottom border effect */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
        />
      </motion.header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            />
            
            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed top-16 sm:top-18 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-xl"
            >
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-4">
                <motion.a
                  href="#accueil"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="text-gray-700 hover:text-emerald-600 font-medium py-2 px-4 rounded-lg hover:bg-emerald-50/50 transition-all duration-200"
                  whileHover={{ x: 5 }}
                >
                  Accueil
                </motion.a>
                <motion.a
                  href="#produits"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    const element = document.getElementById("produits");
                    if (element) {
                      const headerHeight = 80;
                      const offsetTop = element.offsetTop - headerHeight;
                      window.scrollTo({ top: offsetTop, behavior: "smooth" });
                    }
                  }}
                  className="text-gray-700 hover:text-emerald-600 font-medium py-2 px-4 rounded-lg hover:bg-emerald-50/50 transition-all duration-200"
                  whileHover={{ x: 5 }}
                >
                  Produits
                </motion.a>
                <motion.a
                  href="#pourquoi-nous"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    const element = document.getElementById("pourquoi-nous");
                    if (element) {
                      const headerHeight = 80;
                      const offsetTop = element.offsetTop - headerHeight;
                      window.scrollTo({ top: offsetTop, behavior: "smooth" });
                    }
                  }}
                  className="text-gray-700 hover:text-emerald-600 font-medium py-2 px-4 rounded-lg hover:bg-emerald-50/50 transition-all duration-200"
                  whileHover={{ x: 5 }}
                >
                  À propos
                </motion.a>
                <motion.a
                  href="#contact"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    const element = document.getElementById("contact");
                    if (element) {
                      const headerHeight = 80;
                      const offsetTop = element.offsetTop - headerHeight;
                      window.scrollTo({ top: offsetTop, behavior: "smooth" });
                    }
                  }}
                  className="text-gray-700 hover:text-emerald-600 font-medium py-2 px-4 rounded-lg hover:bg-emerald-50/50 transition-all duration-200"
                  whileHover={{ x: 5 }}
                >
                  Contact
                </motion.a>
                <motion.div
                  className="pt-4 border-t border-gray-200"
                  whileHover={{ scale: 1.02 }}
                >
                  <Button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      openWhatsAppGeneral();
                    }}
                    className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg"
                  >
                    <FaWhatsapp className="mr-2 h-4 w-4" />
                    Devis Gratuit
                  </Button>
                </motion.div>
              </nav>
            </div>
          </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Professional Background with Organic Shapes */}
        <div className="absolute inset-0">
          {/* Base gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/20" />
          
          {/* Large organic shape - main background */}
          <div className="absolute top-0 right-0 w-2/3 h-full">
            <svg 
              viewBox="0 0 800 800" 
              className="w-full h-full object-cover"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <linearGradient id="heroGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(16, 185, 129, 0.8)" />
                  <stop offset="50%" stopColor="rgba(59, 130, 246, 0.6)" />
                  <stop offset="100%" stopColor="rgba(147, 51, 234, 0.4)" />
                </linearGradient>
                <linearGradient id="heroGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(34, 197, 94, 0.3)" />
                  <stop offset="100%" stopColor="rgba(59, 130, 246, 0.2)" />
                </linearGradient>
              </defs>
              
              {/* Main organic background shape */}
              <motion.path
                d="M200,0 C400,0 600,100 800,0 L800,400 C700,500 500,600 400,500 C300,400 200,300 100,400 C50,450 0,350 0,200 Z"
                fill="url(#heroGradient1)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              
              {/* Secondary organic shape */}
              <motion.path
                d="M600,200 C700,150 800,250 800,400 L800,800 L400,800 C350,700 400,600 500,550 C600,500 650,400 600,200 Z"
                fill="url(#heroGradient2)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut" }}
              />
            </svg>
          </div>

          {/* Floating decorative elements */}
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-20"
            style={{ 
              background: "radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, transparent 70%)",
              filter: "blur(20px)"
            }}
            animate={{ 
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute bottom-32 left-20 w-24 h-24 rounded-full opacity-15"
            style={{ 
              background: "radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, transparent 70%)",
              filter: "blur(15px)"
            }}
            animate={{ 
              x: [0, 40, 0],
              y: [0, -20, 0],
              scale: [1, 0.8, 1]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 pt-20 sm:pt-24 md:pt-32">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-40 items-center">
            
            {/* Left Column - Content */}
            <motion.div 
              className="space-y-4 sm:space-y-6 md:space-y-8 text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentSlide}
                  initial={{ 
                    opacity: 0, 
                    y: 50,
                    scale: 0.95
                  }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    scale: 1
                  }}
                  exit={{ 
                    opacity: 0, 
                    y: -50,
                    scale: 0.95
                  }}
                  transition={{ 
                    duration: 0.8, 
                    ease: "easeOut"
                  }}
                  className="space-y-4 sm:space-y-5 md:space-y-6"
                >
                  {/* Professional Badge */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      delay: 0.2, 
                      duration: 0.6,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge className="inline-flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm text-gray-800 border border-emerald-200/50 shadow-xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold rounded-full">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      >
                        <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-600" />
                      </motion.div>
                      <span className="text-emerald-700">{slideContent[currentSlide].badge}</span>
                    </Badge>
                  </motion.div>
                  
                  {/* Main Headline */}
                  <motion.h1 
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    <motion.span 
                      className="block text-gray-900 mb-2"
                      whileHover={{ 
                        scale: 1.02,
                        textShadow: "0 0 30px rgba(0,0,0,0.1)"
                      }}
                    >
                      {slideContent[currentSlide].title}
                    </motion.span>
                    <motion.span 
                      className="block bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent"
                      whileHover={{ 
                        scale: 1.02,
                        filter: "drop-shadow(0 0 20px rgba(34, 197, 94, 0.3))"
                      }}
                      style={{
                        textShadow: "0 4px 8px rgba(0,0,0,0.1)"
                      }}
                    >
                      {slideContent[currentSlide].subtitle}
                    </motion.span>
                  </motion.h1>

                  {/* Description */}
                  <motion.p 
                    className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    whileHover={{ 
                      scale: 1.02,
                      textShadow: "0 2px 4px rgba(0,0,0,0.1)"
                    }}
                  >
                    {slideContent[currentSlide].description}
                  </motion.p>

                  {/* CTA Buttons */}
                  <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-3 sm:pt-4 w-full"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        size="lg"
                        onClick={() => {
                          const element = document.getElementById("produits");
                          if (element) {
                            const headerHeight = 80;
                            const offsetTop = element.offsetTop - headerHeight;
                            window.scrollTo({
                              top: offsetTop,
                              behavior: "smooth"
                            });
                          }
                        }}
                        className="relative bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 hover:from-emerald-700 hover:via-green-700 hover:to-teal-700 text-white shadow-2xl font-bold px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-2xl overflow-hidden group border-0 text-sm sm:text-base md:text-lg w-full sm:w-auto"
                        style={{
                          boxShadow: "0 15px 35px rgba(34, 197, 94, 0.4), 0 0 0 1px rgba(255,255,255,0.1) inset"
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute -inset-3 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300 -z-10" />
                        
                        <motion.div
                          className="flex items-center justify-center space-x-2 sm:space-x-3 relative z-10"
                          whileHover={{ x: 3 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <span className="text-center whitespace-normal break-words leading-tight">{slideContent[currentSlide].cta}</span>
                          <motion.div
                            whileHover={{ rotate: 90, scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                            className="flex-shrink-0"
                          >
                            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                          </motion.div>
                        </motion.div>
                      </Button>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                     
                    </motion.div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Slide Indicators */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="flex justify-center space-x-3 pt-6"
              >
                {[0, 1, 2, 3].map((index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    whileHover={{ scale: 1.3, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`relative w-3 h-3 rounded-full transition-all duration-500 ${
                      currentSlide === index 
                        ? 'bg-gradient-to-r from-emerald-500 to-blue-600 shadow-lg' 
                        : 'bg-gray-400/50 hover:bg-gray-500/70'
                    }`}
                    style={{
                      boxShadow: currentSlide === index 
                        ? "0 6px 20px rgba(34, 197, 94, 0.5)"
                        : "0 2px 4px rgba(0,0,0,0.1)"
                    }}
                  >
                    {currentSlide === index && (
                      <motion.div
                        className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full blur-sm opacity-60"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Professional Image */}
            <motion.div 
              className="relative mt-8 lg:mt-0 order-first lg:order-last"
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            >
              <div className="relative">
                {/* Background decorative elements */}
                <div className="absolute -inset-4 sm:-inset-6 md:-inset-8">
                  <motion.div
                    className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full opacity-20"
                    style={{ 
                      background: "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)",
                      filter: "blur(25px)"
                    }}
                    animate={{ 
                      scale: [1, 1.3, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 10, 
                      repeat: Infinity, 
                      ease: "easeInOut"
                    }}
                  />
                  
                  <motion.div
                    className="absolute bottom-0 left-0 w-24 h-24 rounded-full opacity-15"
                    style={{ 
                      background: "radial-gradient(circle, rgba(147, 51, 234, 0.5) 0%, transparent 70%)",
                      filter: "blur(20px)"
                    }}
                    animate={{ 
                      scale: [1, 0.8, 1],
                      rotate: [360, 180, 0]
                    }}
                    transition={{ 
                      duration: 8, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                </div>

                {/* Main professional image */}
                <motion.div
                  className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto"
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: 5,
                    rotateX: 2
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl">
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10 z-10" />
                    
                    {/* Professional image */}
                    <Image
                      src="/contact.png"
                      alt="Professional COOVRIT Service"
                      width={600}
                      height={600}
                      className="w-full h-auto object-cover"
                      priority
                    />
                    
                    {/* Floating elements on the image */}
                    <motion.div
                      className="absolute top-6 right-6 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl"
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        ease: "easeInOut"
                      }}
                    >
                      <Shield className="w-8 h-8 text-emerald-600" />
                    </motion.div>
                    
                    <motion.div
                      className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-xl"
                      animate={{ 
                        x: [0, 5, -5, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        duration: 6, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                    >
                      <div className="flex items-center space-x-2">
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        <span className="text-sm font-semibold text-gray-800">Excellence Garantie</span>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Floating glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Additional floating elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            delay: 2,
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 w-6 h-6 bg-emerald-400/30 rounded-full blur-sm hidden lg:block"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: [0, 15, 0],
            x: [0, -8, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{
            delay: 2.5,
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-blue-400/40 rounded-full blur-sm hidden lg:block"
        />
      </section>

      {/* Products Section */}
      <section id="produits" className="relative section-padding overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30" />
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-float-3d" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-levitate" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className="text-center mb-20"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent"
              whileHover={{ 
                scale: 1.02,
                filter: "drop-shadow(0 0 30px rgba(59, 130, 246, 0.4))"
              }}
              style={{
                textShadow: "0 10px 30px rgba(0,0,0,0.1)",
                filter: "drop-shadow(0 4px 8px rgba(59, 130, 246, 0.2))"
              }}
            >
              Nos Produits
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              whileHover={{ 
                scale: 1.02,
                textShadow: "0 4px 8px rgba(0,0,0,0.15)"
              }}
            >
              Découvrez nos modèles de caches climatisation, conçus pour l'intérieur comme pour l'extérieur, en version standard ou sur-mesure.
            </motion.p>
          </motion.div>

          {/* Enhanced Product Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 mb-16"
          >
            {[
              { text: "Made in Morocco", color: "from-blue-500 to-blue-600", icon: "🇲🇦" },
              { text: "Livraison offerte >2000 DH", color: "from-green-500 to-emerald-600", icon: "🚚" },
              { text: "Remboursement sous 15 jours", color: "from-purple-500 to-purple-600", icon: "💰" },
              { text: "Support 24/7", color: "from-orange-500 to-red-500", icon: "🛠️" }
            ].map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateY: -45 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ 
                  delay: 0.3 + index * 0.1, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  rotateY: 10,
                  rotateX: 5
                }}
                className="relative"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Badge 
                  className={`bg-gradient-to-r ${badge.color} text-white px-6 py-3 text-base font-semibold shadow-2xl border-0 relative overflow-hidden`}
                  style={{
                    boxShadow: "0 10px 25px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.1) inset"
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="mr-2 text-lg">{badge.icon}</span>
                  {badge.text}
                </Badge>
                <div className="absolute -inset-2 bg-gradient-to-r from-white/20 to-transparent rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
              </motion.div>
            ))}
          </motion.div>

          {/* 3D Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000">
            {[
              {
                name: "COOVRIT INTÉRIEUR – CADENCE",
                description: "Design moderne et épuré pour s'intégrer parfaitement dans votre salon",
                image: "/home.png",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                name: "COOVRIT INTÉRIEUR – PIETRA",
                description: "Effet pierre naturelle pour un style authentique et chaleureux",
                image: "/home.png",
                gradient: "from-emerald-500 to-teal-500"
              },
              {
                name: "COOVRIT INTÉRIEUR – Zellijik",
                description: "Inspiration marocaine traditionnelle avec des motifs zellige élégants",
                image: "/home.png",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                name: "Cache Clim Intérieur Split 4",
                description: "Solution classique et fonctionnelle pour tout type d'intérieur",
                image: "/home.png",
                gradient: "from-orange-500 to-red-500"
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ 
                  opacity: 0, 
                  y: 60,
                  rotateX: -20,
                  rotateY: -20,
                  scale: 0.9
                }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  rotateX: 0,
                  rotateY: 0,
                  scale: 1
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  y: -20,
                  rotateX: 10,
                  rotateY: 5,
                  scale: 1.05,
                  z: 50
                }}
                className="group relative"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Floating glow effect */}
                <div className={`absolute -inset-4 bg-gradient-to-r ${product.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10`} />
                
                <Card className="glass-effect h-full border-0 overflow-hidden relative bg-white/80 backdrop-blur-lg">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out wave-3d" />
                  
                  <CardHeader className="p-0 relative overflow-hidden">
                    <motion.div 
                      className="relative h-56 w-full"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Floating icon */}
                      <motion.div
                        className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r ${product.gradient} rounded-full flex items-center justify-center text-white shadow-2xl`}
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        whileHover={{ scale: 1.2, rotate: 45 }}
                      >
                        <Sparkles className="w-6 h-6" />
                      </motion.div>
                    </motion.div>
                  </CardHeader>
                  
                  <CardContent className="p-6 relative">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <CardTitle className="text-lg mb-3 text-gray-900 font-bold group-hover:text-blue-600 transition-colors duration-300">
                        {product.name}
                      </CardTitle>
                      <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                        {product.description}
                      </CardDescription>
                      
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          onClick={() => openWhatsApp(product.name)}
                          className={`w-full bg-gradient-to-r ${product.gradient} hover:shadow-2xl text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 border-0 relative overflow-hidden group`}
                          style={{
                            boxShadow: "0 8px 25px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.1) inset"
                          }}
                        >
                          
                            Demander un devis
                          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <motion.div
                            className="flex items-center justify-center relative z-10"
                            whileHover={{ x: 2 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <motion.div
                              animate={{ rotate: [0, 360] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                              className="mr-2"
                            >
                              <FaWhatsapp className="h-5 w-5" />
                            </motion.div>
                          </motion.div>
                        </Button>
                      </motion.div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section id="avantages" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">
              Pourquoi choisir Coovrit ?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12 text-blue-500" />,
                title: "Garantie 10 ans*",
                description: "Nos caches climatisation, 100% aluminium, sont conçus pour durer. Robustes et fiables, ils bénéficient d'une garantie de 10 ans* (*hors peinture)."
              },
              {
                icon: <Clock className="w-12 h-12 text-green-500" />,
                title: "Assemblage simple et rapide",
                description: "Chaque modèle est pensé pour être installé facilement, en moins de 15 minutes. Suivez notre guide vidéo et profitez d'un cache clim prêt-à-poser."
              },
              {
                icon: <Check className="w-12 h-12 text-purple-500" />,
                title: "Sans entretien, facile à démonter",
                description: "L'accès à votre climatisation reste simple : nos caches se démontent rapidement pour faciliter l'entretien du moteur, sans effort."
              },
              {
                icon: <Shield className="w-12 h-12 text-orange-500" />,
                title: "Sécurité pour enfants et animaux",
                description: "Nos caches clim assurent une protection optimale contre les risques d'accident, en maintenant enfants et animaux à l'écart des parties techniques."
              },
              {
                icon: <Star className="w-12 h-12 text-red-500" />,
                title: "Réduction visuelle et sonore",
                description: "En plus de dissimuler élégamment votre installation, nos modèles orientent et atténuent le bruit du moteur, pour un confort acoustique au quotidien."
              },
              {
                icon: <Shield className="w-12 h-12 text-indigo-500" />,
                title: "Résistance aux chocs et intempéries",
                description: "Nos caches clim résistent au vent, à la pluie et aux chocs. Le système d'évacuation intégré limite l'encrassement et prolonge la durée de vie."
              }
            ].map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-card card-hover-effect h-full text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      {advantage.icon}
                    </div>
                    <CardTitle className="text-xl text-gray-900">{advantage.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {advantage.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Product Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            <Badge className="bg-blue-500 text-white px-4 py-2">Made in Morocco</Badge>
            <Badge className="bg-green-500 text-white px-4 py-2">Livraison offerte &gt;2000 DH</Badge>
            <Badge className="bg-purple-500 text-white px-4 py-2">Remboursement sous 15 jours</Badge>
            <Badge className="bg-orange-500 text-white px-4 py-2">Support WhatsApp</Badge>
          </motion.div>
        </div>
      </section>

      {/* Témoignages Section */}
      <section id="temoignages" className="section-padding section-gradient">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">
              Suivez-nous
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les Photos d'Instagram
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="aspect-square relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="/home.png"
                  alt={`Instagram photo ${index}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 hover:opacity-100 transition-opacity">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-8"
          >
            <Button
              onClick={() => window.open("https://www.instagram.com/coovrit/", "_blank")}
              className="btn-outline-coovrit"
            >
              Voir plus sur Instagram
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">
              Contactez-nous
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une question ? Un projet ? N'hésitez pas à nous contacter !
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="glass-card h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900">Informations de contact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <FaWhatsapp className="w-6 h-6 text-green-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">WhatsApp</p>
                        <p className="text-gray-600">0752881504</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Instagram</p>
                        <p className="text-gray-600">@coovrit</p>
                      </div>
                    </div>

                    <div className="mt-8">
                      <Button
                        onClick={() => openWhatsAppGeneral()}
                        className="btn-coovrit w-full"
                      >
                        <FaWhatsapp className="mr-2 h-5 w-5" />
                        Commencer la conversation
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative h-96 rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src="contact.png"
                  alt="Showroom COOVRIT"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Notre Showroom</h3>
                    <p className="text-gray-200">Venez découvrir nos produits dans notre showroom au Maroc</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <span className="text-2xl font-bold">COOVRIT</span>
              </div>
              <p className="text-gray-400">
                Leader marocain des caches climatisation design et fonctionnels.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Produits</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Cache Clim Intérieur</li>
                <li>Cache Clim Extérieur</li>
                <li>Sur mesure</li>
                <li>Accessoires</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>WhatsApp: 0752881504</li>
                <li>Instagram: @coovrit</li>
                <li>Made in Morocco</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Suivez-nous</h4>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  onClick={() => window.open("https://www.instagram.com/coovrit/", "_blank")}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                >
                  Instagram
                </Button>
                <Button
                  size="sm"
                  onClick={() => openWhatsAppGeneral()}
                  className="bg-green-500 hover:bg-green-600"
                >
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 COOVRIT. Tous droits réservés. Made in Morocco 🇲🇦</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          onClick={() => openWhatsAppGeneral()}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-xl whatsapp-pulse relative"
        >
          <FaWhatsapp className="h-7 w-7 text-white" />
          {showTooltip && (
            <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg whitespace-nowrap">
              Contactez-nous
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
            </div>
          )}
        </Button>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <div className="fixed bottom-6 left-6 z-50">
          <Button
            size="lg"
            onClick={scrollToTop}
            className="bg-gray-800/80 hover:bg-gray-700 text-blue-500 rounded-full w-12 h-12 shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <ChevronUp className="h-5 w-5" />
          </Button>
        </div>
      )}
    </div>
  )
}

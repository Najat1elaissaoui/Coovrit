"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
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
} from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import Image from "next/image"
import Link from "next/link"

export default function IPTVEnglishLanding() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  const whatsappNumber = "+16475586488"

  useEffect(() => {
    setIsLoaded(true)

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const openWhatsApp = (planName: string) => {
    const message = `Hello, I'm interested in the ${planName} IPTV plan and would like more information.`
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  const openWhatsAppGeneral = () => {
    const message = "Hello, I would like to know more about your IPTV services."
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src="/felx-tv-logo.png" alt="FELX TV" width={40} height={40} className="rounded-lg" />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              FELX TV
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-slate-300 hover:text-cyan-400 transition-all duration-300">
              Features
            </Link>
            <Link href="#pricing" className="text-slate-300 hover:text-cyan-400 transition-all duration-300">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-slate-300 hover:text-cyan-400 transition-all duration-300">
              Reviews
            </Link>
            <Link href="#faq" className="text-slate-300 hover:text-cyan-400 transition-all duration-300">
              FAQ
            </Link>
          </nav>
          <Button
            onClick={() => openWhatsAppGeneral()}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg transform hover:scale-110 transition-all duration-300 focus:ring-2 focus:ring-green-400 focus:outline-none"
            asChild
          >
            <a href="#" tabIndex={-1} rel="noopener noreferrer" style={{ boxShadow: '0 4px 24px 0 rgba(34,197,94,0.18)' }}>
              <FaWhatsapp className="mr-2 h-4 w-4 text-white" />
              Contact Us
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/hero-background.webp"
            alt="IPTV Streaming Setup" 
            fill
            className={`object-cover transition-transform duration-1500 ${isLoaded ? "scale-100" : "scale-110"}`}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/30 to-slate-900/65"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div
            className={`transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <Badge className="mb-6 bg-white from-cyan-500/20 to-blue-500/20 text-black border-cyan-500/30 animate-pulse">
              🔥 Premium IPTV Experience
            </Badge>
          </div>

          <div
            className={`transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
                Stream Without
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Limits</span>
            </h1>
          </div>

          <div
            className={`transition-all duration-1000 delay-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Access over 120,000 HD/4K channels, live sports, movies, and series with crystal-clear quality and zero
              buffering.
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-900 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <Button
              size="lg"
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-2xl text-lg px-12 py-6 transform hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none focus:ring-2 focus:ring-pink-400 focus:outline-none"
              style={{ boxShadow: '0 4px 24px 0 rgba(236,72,153,0.18)' }}
            >
              <Play className="mr-3 h-6 w-6" />
              Explore Our Plans
            </Button>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full animate-bounce delay-1000 hidden lg:block"></div>
          <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full animate-bounce delay-1500 hidden lg:block"></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-800/30 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Why Choose FELX TV?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Experience the future of television with cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Ultra-fast streaming with zero buffering and instant channel switching",
                delay: "delay-100",
              },
              {
                icon: Shield,
                title: "99.9% Uptime",
                description: "Reliable service with high-performance servers and 24/7 monitoring",
                delay: "delay-200",
              },
              {
                icon: Globe,
                title: "Global Content",
                description: "Access international channels and content from around the world",
                delay: "delay-300",
              },
              {
                icon: Headphones,
                title: "24/7 Support",
                description: "Round-the-clock customer support for any questions or issues",
                delay: "delay-400",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className={`bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 group hover:transform hover:scale-105 animate-fade-up ${feature.delay}`}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-cyan-100 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300 text-center group-hover:text-slate-200 transition-colors">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
  id="pricing"
  className="py-20 relative min-h-[650px] flex items-center justify-center overflow-hidden"
  style={{ background: 'none' }}
>
  {/* Background image and overlay */}
  <div className="absolute inset-0 w-full h-full z-0">
    <img
      src="/streaming-tv-iptv.jpg"
      alt="IPTV Pricing Background"
      className="w-full h-full object-cover object-center"
      style={{ filter: 'brightness(0.45) blur(0px)' }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="text-center mb-16 animate-fade-up">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Choose Your Plan
      </h2>
      <p className="text-xl text-slate-300 max-w-2xl mx-auto">
        Flexible pricing options designed for every entertainment need
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">

            {[
              {
                name: "1 Month Plan",
                price: "$29",
                description: "Access to all IPTV channels for 1 month",
                cta: "Choose 1 Month",
                whatsapp: "https://wa.me/16475586488?text=Hello%2C%20I%20am%20interested%20in%20the%201%20Month%20IPTV%20plan",
                delay: "delay-100",
              },
              {
                name: "3 Months Plan",
                price: "$39",
                description: "Enjoy premium IPTV access for 3 months",
                cta: "Choose 3 Months",
                whatsapp: "https://wa.me/16475586488?text=Hello%2C%20I%20am%20interested%20in%20the%203%20Months%20IPTV%20plan",
                delay: "delay-200",
              },
              {
                name: "6 Months Plan",
                price: "$59",
                description: "Get 6 months of uninterrupted IPTV service",
                cta: "Choose 6 Months",
                whatsapp: "https://wa.me/16475586488?text=Hello%2C%20I%20am%20interested%20in%20the%206%20Months%20IPTV%20plan",
                delay: "delay-300",
              },
              {
                name: "1 Year Plan",
                price: "$69",
                description: "Best value – full year IPTV subscription",
                cta: "Choose 1 Year",
                whatsapp: "https://wa.me/16475586488?text=Hello%2C%20I%20am%20interested%20in%20the%201%20Year%20IPTV%20plan",
                delay: "delay-400",
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`relative card-hover bg-white/10 backdrop-blur-lg border border-slate-100/10 hover:border-cyan-400/40 transition-all duration-500 hover:scale-105 animate-fade-up shadow-2xl px-4 py-6 md:px-6 md:py-8 ${plan.delay}`}
                style={{ boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25)', borderRadius: '1.25rem', minHeight: '340px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white mb-2 drop-shadow-lg">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
                      {plan.price}
                    </span>
                  </div>
                  <CardDescription className="text-slate-200 mb-4 min-h-[48px] drop-shadow-md" style={{textShadow: '0 1px 8px rgba(0,0,0,0.30)'}}>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 justify-end">
                  <Button
                    asChild
                    className="w-full mt-2 transition-all duration-300 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white transform hover:scale-110 shadow-lg hover:shadow-green-500/25 focus:ring-2 focus:ring-green-400 focus:outline-none animate-button-pulse"
                  >
                    <a
                      href={plan.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ boxShadow: '0 4px 24px 0 rgba(34,197,94,0.18)' }}
                    >
                      <FaWhatsapp className="mr-2 h-4 w-4 text-white group-hover:animate-bounce" />
                      {plan.cta}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              What Our Customers Say
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">Join thousands of satisfied customers worldwide</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Sarah Johnson",
                location: "New York, USA",
                rating: 5,
                comment:
                  "Amazing service! Crystal clear quality and never any buffering. The channel selection is incredible and customer support is top-notch.",
                avatar: "/placeholder.svg?height=60&width=60",
                delay: "delay-100",
              },
              {
                name: "Mike Chen",
                location: "Toronto, Canada",
                rating: 5,
                comment:
                  "Best IPTV service I've used. Great customer support and the setup was super easy. Works perfectly on all my devices.",
                avatar: "/placeholder.svg?height=60&width=60",
                delay: "delay-200",
              },
              {
                name: "Emma Wilson",
                location: "London, UK",
                rating: 5,
                comment:
                  "Fantastic value for money. The 4K quality is stunning and I love having access to international content. Highly recommended!",
                avatar: "/placeholder.svg?height=60&width=60",
                delay: "delay-300",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className={`bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 animate-fade-up ${testimonial.delay}`}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full border-2 border-cyan-500/30"
                    />
                    <div>
                      <CardTitle className="text-lg text-white">{testimonial.name}</CardTitle>
                      <CardDescription className="text-cyan-400">{testimonial.location}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 italic">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Get answers to common questions about our IPTV service
            </p>
          </div>

          <div className="max-w-3xl mx-auto animate-fade-up delay-200">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "What devices are compatible with FELX TV?",
                  answer:
                    "FELX TV works on all major devices including Smart TVs, Android/iOS devices, Fire TV, Apple TV, Windows/Mac computers, and web browsers. We provide easy setup guides for each platform.",
                },
                {
                  question: "How quickly can I start watching after purchase?",
                  answer:
                    "Your service is activated instantly after payment. You'll receive your login credentials within minutes via WhatsApp and can start watching immediately on any supported device.",
                },
                {
                  question: "Do you offer a free trial?",
                  answer:
                    "Yes! We offer a 24-hour free trial so you can test our service quality, channel selection, and streaming performance before committing to a subscription.",
                },
                {
                  question: "What internet speed do I need?",
                  answer:
                    "For HD streaming, we recommend at least 10 Mbps. For 4K content, 25 Mbps or higher is recommended. For 8K content (Premium plan), 50 Mbps is ideal for the best experience.",
                },
                {
                  question: "Is customer support available 24/7?",
                  answer:
                    "Yes, our customer support team is available 24/7 via WhatsApp, live chat, and email to help you with any questions, technical issues, or setup assistance.",
                },
              ].map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-slate-800/50 border-slate-700/50 rounded-lg px-6 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <AccordionTrigger className="text-white hover:text-cyan-400 text-left transition-colors duration-300">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="animate-fade-up">
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/felx-tv-logo.png" alt="FELX TV" width={32} height={32} className="rounded" />
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  FELX TV
                </span>
              </div>
              <p className="text-slate-400 text-sm mb-4">
                Premium IPTV service providing unlimited entertainment with crystal-clear quality and uninterrupted
                streaming.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                  <Globe className="h-4 w-4 text-cyan-400" />
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-4 w-4 text-green-400" />
                </div>
              </div>
            </div>

            <div className="animate-fade-up delay-100">
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { name: "Features", href: "#features" },
                  { name: "Pricing", href: "#pricing" },
                  { name: "Testimonials", href: "#testimonials" },
                  { name: "FAQ", href: "#faq" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-fade-up delay-200">
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center">
                  <Clock className="h-3 w-3 mr-2 text-cyan-400" /> 24/7 Live Chat
                </li>
                <li className="flex items-center">
                  <MessageCircle className="h-3 w-3 mr-2 text-green-400" /> WhatsApp Support
                </li>
                <li className="flex items-center">
                  <Monitor className="h-3 w-3 mr-2 text-cyan-400" /> Setup Guide
                </li>
                <li className="flex items-center">
                  <Shield className="h-3 w-3 mr-2 text-cyan-400" /> Troubleshooting
                </li>
              </ul>
            </div>

            <div className="animate-fade-up delay-300">
              <h3 className="text-white font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>WhatsApp: {whatsappNumber}</li>
                <li>Email: support@felxtv.com</li>
                <li>Available 24/7</li>
              </ul>
              <Button
                onClick={() => openWhatsAppGeneral()}
                className="mt-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white w-full shadow-lg transform hover:scale-110 transition-all duration-300 focus:ring-2 focus:ring-green-400 focus:outline-none"
                asChild
              >
                <a href="#" tabIndex={-1} rel="noopener noreferrer" style={{ boxShadow: '0 4px 24px 0 rgba(34,197,94,0.18)' }}>
                  <FaWhatsapp className="mr-2 h-4 w-4 text-white" />
                  Contact Now
                </a>
              </Button>
            </div>
          </div>

          <div className="border-t border-slate-700/50 mt-8 pt-8 text-center animate-fade-up delay-400">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} FELX TV. All rights reserved. | Premium IPTV Streaming Service
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          <Button
            size="lg"
            onClick={() => openWhatsAppGeneral()}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-2xl transform hover:scale-125 transition-all duration-300 animate-bounce focus:ring-2 focus:ring-green-400 focus:outline-none"
            asChild
          >
            <a href="#" tabIndex={-1} rel="noopener noreferrer" style={{ boxShadow: '0 4px 24px 0 rgba(34,197,94,0.18)' }}>
              <FaWhatsapp className="h-7 w-7 text-white" />
            </a>
          </Button>
          {showTooltip && (
            <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg shadow-lg whitespace-nowrap animate-fade-up">
              Contact Us
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
            </div>
          )}
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <div className="fixed bottom-6 left-6 z-50">
          <Button
            size="lg"
            onClick={scrollToTop}
            className="bg-slate-800/80 hover:bg-slate-700 text-cyan-400 rounded-full w-12 h-12 shadow-xl transform hover:scale-125 transition-all duration-300 backdrop-blur-sm focus:ring-2 focus:ring-cyan-400 focus:outline-none"
          >
            <ChevronUp className="h-5 w-5" />
          </Button>
        </div>
      )}
    </div>
  )
}

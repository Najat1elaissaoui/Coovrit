import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // FELX TV Brand Colors extracted from logo
        "felx-cyan": "#00BFFF",
        "felx-blue": "#1E90FF",
        "felx-deep-blue": "#4169E1",
        "felx-pink": "#FF1493",
        "felx-purple": "#8A2BE2",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-in": {
          "0%": {
            opacity: "0",
            transform: "translateX(-100%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "zoom-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)",
          },
          "50%": {
            boxShadow: "0 0 30px rgba(34, 197, 94, 0.6)",
          },
        },
        "gradient-shift": {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
        "button-pulse": {
          "0%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.05)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        // Nouvelles animations 3D
        "rotate-3d": {
          "0%": {
            transform: "rotateY(0deg) rotateX(0deg)",
          },
          "25%": {
            transform: "rotateY(90deg) rotateX(15deg)",
          },
          "50%": {
            transform: "rotateY(180deg) rotateX(0deg)",
          },
          "75%": {
            transform: "rotateY(270deg) rotateX(-15deg)",
          },
          "100%": {
            transform: "rotateY(360deg) rotateX(0deg)",
          },
        },
        "float-3d": {
          "0%, 100%": {
            transform: "translateY(0px) rotateX(0deg) rotateZ(0deg)",
          },
          "33%": {
            transform: "translateY(-20px) rotateX(10deg) rotateZ(5deg)",
          },
          "66%": {
            transform: "translateY(-10px) rotateX(-5deg) rotateZ(-3deg)",
          },
        },
        "morph-3d": {
          "0%, 100%": {
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            transform: "rotate(0deg) scale(1)",
          },
          "25%": {
            borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%",
            transform: "rotate(90deg) scale(1.1)",
          },
          "50%": {
            borderRadius: "20% 80% 60% 40% / 30% 50% 80% 60%",
            transform: "rotate(180deg) scale(0.9)",
          },
          "75%": {
            borderRadius: "40% 60% 40% 80% / 70% 40% 50% 60%",
            transform: "rotate(270deg) scale(1.05)",
          },
        },
        "glow-pulse": {
          "0%, 100%": {
            filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.6))",
          },
          "50%": {
            filter: "drop-shadow(0 0 40px rgba(147, 51, 234, 0.8))",
          },
        },
        "levitate": {
          "0%, 100%": {
            transform: "translateY(0px) rotateY(0deg)",
          },
          "25%": {
            transform: "translateY(-15px) rotateY(90deg)",
          },
          "50%": {
            transform: "translateY(-30px) rotateY(180deg)",
          },
          "75%": {
            transform: "translateY(-15px) rotateY(270deg)",
          },
        },
        "slide-in-3d": {
          "0%": {
            opacity: "0",
            transform: "translateX(-100px) rotateY(-90deg)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0) rotateY(0deg)",
          },
        },
        "bounce-3d": {
          "0%, 20%, 53%, 80%, 100%": {
            transform: "translateY(0px) rotateX(0deg)",
          },
          "40%, 43%": {
            transform: "translateY(-30px) rotateX(10deg)",
          },
          "70%": {
            transform: "translateY(-15px) rotateX(5deg)",
          },
          "90%": {
            transform: "translateY(-4px) rotateX(2deg)",
          },
        },
        "wave-3d": {
          "0%": {
            transform: "translateX(-100%) skewX(-15deg)",
          },
          "50%": {
            transform: "translateX(0%) skewX(-15deg)",
          },
          "100%": {
            transform: "translateX(100%) skewX(-15deg)",
          },
        },
        "cube-rotate": {
          "0%": {
            transform: "rotateX(0deg) rotateY(0deg) rotateZ(0deg)",
          },
          "25%": {
            transform: "rotateX(90deg) rotateY(0deg) rotateZ(0deg)",
          },
          "50%": {
            transform: "rotateX(90deg) rotateY(90deg) rotateZ(0deg)",
          },
          "75%": {
            transform: "rotateX(90deg) rotateY(90deg) rotateZ(90deg)",
          },
          "100%": {
            transform: "rotateX(0deg) rotateY(0deg) rotateZ(0deg)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.8s ease-out",
        "slide-in": "slide-in 0.6s ease-out",
        "zoom-in": "zoom-in 0.5s ease-out",
        float: "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "gradient-shift": "gradient-shift 3s ease infinite",
        "button-pulse": "button-pulse 2s ease-in-out infinite",
        // Nouvelles animations 3D
        "rotate-3d": "rotate-3d 10s linear infinite",
        "float-3d": "float-3d 6s ease-in-out infinite",
        "morph-3d": "morph-3d 8s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "levitate": "levitate 8s ease-in-out infinite",
        "slide-in-3d": "slide-in-3d 1s ease-out",
        "bounce-3d": "bounce-3d 2s infinite",
        "wave-3d": "wave-3d 3s linear infinite",
        "cube-rotate": "cube-rotate 12s linear infinite",
      },
      perspective: {
        '500': '500px',
        '1000': '1000px',
        '1500': '1500px',
        '2000': '2000px',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
        'visible': 'visible',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

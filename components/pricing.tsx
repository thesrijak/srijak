"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { CheckCircle2, Palette, Code, Bot } from "lucide-react"

type Feature = { text: string; muted?: boolean }

const ACCENT = "#ffe66d"

const services = [
  {
    id: "uiux",
    name: "UI UX DESIGN",
    icon: Palette,
    description: "Beautiful, user-centered designs that convert",
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Visual Design & Branding",
      "Responsive Design Systems",
      "Usability Testing",
      "Design Handoff & Documentation",
    ],
    highlight: "Most Popular",
  },
  {
    id: "development",
    name: "DEVELOPMENT",
    icon: Code,
    description: "Modern, scalable web applications",
    features: [
      "Frontend Development (React, Next.js)",
      "Backend Development (Node.js, APIs)",
      "Database Design & Integration",
      "Performance Optimization",
      "Testing & Quality Assurance",
      "Deployment & Maintenance",
    ],
  },
  {
    id: "ai-agents",
    name: "AI AGENTS",
    icon: Bot,
    description: "Intelligent automation for your business",
    features: [
      "Custom AI Chatbots",
      "Process Automation",
      "Data Analysis & Insights",
      "Natural Language Processing",
      "Machine Learning Integration",
      "AI Strategy Consulting",
    ],
    highlight: "New Service",
  },
]

function FeatureItem({ text, muted = false }: Feature) {
  return (
    <li className="flex items-start gap-2">
      <CheckCircle2 className="mt-0.5 h-4 w-4" style={{ color: ACCENT }} />
      <span className={`text-sm ${muted ? "text-neutral-500" : "text-neutral-200"}`}>{text}</span>
    </li>
  )
}

export function Pricing() {
  return (
    <section id="pricing" className="text-white">
      <div className="container mx-auto px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="mx-auto mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
            style={{ backgroundColor: "rgba(255,230,109,0.12)", color: ACCENT }}
          >
            Our Services & Expertise
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Our Services.</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-neutral-400">
            Comprehensive digital solutions tailored to your business needs.
          </p>
          <div className="mt-6">
            <Button
              asChild
              className="rounded-full px-5 text-neutral-900 hover:brightness-95"
              style={{ backgroundColor: "#f2f2f2" }}
            >
              <Link href=" " target="_blank">
                Get Started
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.id}
              className="relative overflow-hidden rounded-2xl liquid-glass shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300 hover:shadow-[0_16px_50px_rgba(0,0,0,0.4)]"
            >
              {service.highlight && (
                <div
                  className="absolute right-4 top-4 rounded-full px-2 py-0.5 text-[10px] font-medium"
                  style={{ backgroundColor: ACCENT, color: "#000" }}
                >
                  {service.highlight}
                </div>
              )}

              <CardHeader className="space-y-4 pb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{ backgroundColor: "rgba(255,230,109,0.15)" }}
                  >
                    <service.icon className="h-5 w-5" style={{ color: ACCENT }} />
                  </div>
                  <div className="text-lg font-bold text-white">{service.name}</div>
                </div>
                <p className="text-sm text-neutral-400">{service.description}</p>
                <div className="flex gap-2">
                  <Button
                    asChild
                    className="flex-1 rounded-full px-4 py-2 text-sm font-medium text-black shadow transition-[box-shadow,transform,filter] hover:scale-[1.02] active:translate-y-[1px]"
                    style={{ backgroundColor: ACCENT }}
                  >
                    <Link href={`#contact?service=${service.id}`}>Get Quote</Link>
                  </Button>
                  <Button
                    asChild
                    className="flex-1 rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-800"
                    style={{
                      backgroundColor: "#0a0a0a",
                      color: "#ffffff",
                      border: "1px solid #333",
                    }}
                  >
                    <Link href={`#contact?service=${service.id}`}>Learn More</Link>
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="grid gap-2">
                  {service.features.map((feature, i) => (
                    <FeatureItem key={i} text={feature} />
                  ))}
                </ul>
              </CardContent>
              <CardFooter />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

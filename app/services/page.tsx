import { SiteHeader } from "@/components/site-header"
import AppverseFooter from "@/components/appverse-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { CheckCircle2, Palette, Code, Bot, Sparkles, Users, Zap, Target, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { DM_Serif_Text } from "next/font/google"

const dmSerif = DM_Serif_Text({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
})

const ACCENT = "#ffe66d"

const services = [
  {
    id: "uiux",
    name: "UI/UX DESIGN",
    icon: Palette,
    tagline: "Where Beauty Meets Function",
    description:
      "Transform your ideas into stunning, user-centered designs that captivate and convert. We craft digital experiences that users love and businesses profit from.",
    features: [
      "User Research & Persona Development",
      "Information Architecture & User Flows",
      "Wireframing & Interactive Prototyping",
      "Visual Design & Brand Integration",
      "Responsive Design Systems",
      "Usability Testing & Optimization",
      "Design Handoff & Developer Collaboration",
      "Accessibility & Inclusive Design",
    ],
    benefits: [
      "Increase user engagement by 40%",
      "Reduce development time by 30%",
      "Improve conversion rates significantly",
    ],
    highlight: "Most Popular",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: "development",
    name: "DEVELOPMENT",
    icon: Code,
    tagline: "Code That Powers Success",
    description:
      "Build lightning-fast, scalable web applications with modern technologies. From concept to deployment, we deliver robust solutions that grow with your business.",
    features: [
      "Frontend Development (React, Next.js, TypeScript)",
      "Backend Development (Node.js, Python, APIs)",
      "Database Design & Optimization",
      "Cloud Infrastructure & DevOps",
      "Performance Optimization & SEO",
      "Testing & Quality Assurance",
      "Security Implementation",
      "Maintenance & Support",
    ],
    benefits: ["99.9% uptime guarantee", "Lightning-fast load times", "Scalable architecture"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: "ai-agents",
    name: "AI AGENTS",
    icon: Bot,
    tagline: "Intelligence That Works 24/7",
    description:
      "Harness the power of artificial intelligence to automate processes, enhance customer experiences, and unlock new business opportunities with custom AI solutions.",
    features: [
      "Custom AI Chatbots & Virtual Assistants",
      "Process Automation & Workflow Optimization",
      "Natural Language Processing",
      "Machine Learning Model Development",
      "Data Analysis & Predictive Insights",
      "AI Integration & API Development",
      "Training & Fine-tuning Models",
      "AI Strategy & Consulting",
    ],
    benefits: ["Reduce operational costs by 50%", "24/7 automated customer support", "Data-driven decision making"],
    highlight: "Future-Ready",
    color: "from-green-500/20 to-emerald-500/20",
  },
]

const processSteps = [
  {
    icon: Users,
    title: "Discovery & Strategy",
    description:
      "We dive deep into your business goals, target audience, and technical requirements to create a tailored strategy.",
  },
  {
    icon: Sparkles,
    title: "Design & Development",
    description: "Our expert team brings your vision to life with cutting-edge design and development practices.",
  },
  {
    icon: Target,
    title: "Testing & Optimization",
    description: "Rigorous testing ensures your solution performs flawlessly across all devices and scenarios.",
  },
  {
    icon: Zap,
    title: "Launch & Support",
    description: "We handle the launch and provide ongoing support to ensure your continued success.",
  },
]

const stats = [
  { number: "150+", label: "Projects Delivered" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "24/7", label: "Support Available" },
  { number: "5+", label: "Years Experience" },
]

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 sm:py-32">
          <div className="container relative mx-auto px-4 z-10">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-5 flex items-center justify-center gap-2">
                <Image src="/logo.svg" alt="Srijak logo" width={32} height={32} className="h-8 w-8" />
                <p className="text-sm uppercase tracking-[0.25em] text-[#ffe66d]/90 font-medium">SERVICES SRIJAK</p>
              </div>

              <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
                SERVICES THAT
                <br />
                <span
                  className={`${dmSerif.className} italic drop-shadow-[0_0_20px_oklch(0.55_0.18_260_/_0.35)]`}
                  style={{ color: ACCENT }}
                >
                  Drive Results
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">
                From stunning UI/UX designs to powerful web applications and intelligent AI solutions, we deliver
                comprehensive digital services that transform businesses and exceed expectations.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button
                  asChild
                  className="rounded-full px-8 py-3 text-black font-semibold hover:brightness-95 transition-all"
                  style={{ backgroundColor: ACCENT }}
                >
                  <Link href="#contact">Start Your Project</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full px-8 py-3 border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  <Link href="#services">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 border-y border-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold" style={{ color: ACCENT }}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                Our{" "}
                <span className={`${dmSerif.className} italic`} style={{ color: ACCENT }}>
                  Expertise
                </span>
              </h2>
              <p className="text-gray-400 text-lg">
                Three core services that cover every aspect of your digital transformation journey.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {services.map((service, index) => (
                <Card
                  key={service.id}
                  className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${service.color} backdrop-blur-sm border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 hover:scale-[1.02] group`}
                >
                  {service.highlight && (
                    <div
                      className="absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold"
                      style={{ backgroundColor: ACCENT, color: "#000" }}
                    >
                      {service.highlight}
                    </div>
                  )}

                  <CardHeader className="p-8 pb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-xl"
                        style={{ backgroundColor: "rgba(255,230,109,0.15)" }}
                      >
                        <service.icon className="h-6 w-6" style={{ color: ACCENT }} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{service.name}</h3>
                        <p className="text-sm" style={{ color: ACCENT }}>
                          {service.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>

                    <div className="flex gap-3 mb-6">
                      <Button
                        asChild
                        className="flex-1 rounded-full px-4 py-2 text-sm font-semibold text-black transition-all hover:scale-[1.02]"
                        style={{ backgroundColor: ACCENT }}
                      >
                        <Link href={`#contact?service=${service.id}`}>Get Quote</Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="flex-1 rounded-full px-4 py-2 text-sm border-gray-600 hover:bg-gray-800 bg-transparent"
                      >
                        <Link href={`#contact?service=${service.id}`}>Learn More</Link>
                      </Button>
                    </div>

                    <div className="space-y-3 mb-6">
                      <h4 className="text-sm font-semibold text-white">Key Benefits:</h4>
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 flex-shrink-0" style={{ color: ACCENT }} />
                          <span className="text-sm text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardHeader>

                  <CardContent className="px-8 pb-8">
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-white">What's Included:</h4>
                      <div className="grid gap-2">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-3 w-3 flex-shrink-0" style={{ color: ACCENT }} />
                            <span className="text-xs text-gray-400">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                Our{" "}
                <span className={`${dmSerif.className} italic`} style={{ color: ACCENT }}>
                  Process
                </span>
              </h2>
              <p className="text-gray-400 text-lg">A proven methodology that ensures exceptional results every time.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div
                      className="mx-auto flex h-16 w-16 items-center justify-center rounded-full transition-all group-hover:scale-110"
                      style={{ backgroundColor: "rgba(255,230,109,0.15)" }}
                    >
                      <step.icon className="h-8 w-8" style={{ color: ACCENT }} />
                    </div>
                    <div
                      className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-black"
                      style={{ backgroundColor: ACCENT }}
                    >
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <div className="rounded-3xl bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-purple-900/30 p-12 backdrop-blur-sm border border-gray-800/50">
                <Clock className="mx-auto h-12 w-12 mb-6" style={{ color: ACCENT }} />
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                  Ready to Transform Your
                  <span className={`${dmSerif.className} italic`} style={{ color: ACCENT }}>
                    {" "}
                    Digital Presence?
                  </span>
                </h2>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Let's discuss your project and create something extraordinary together. Get a free consultation and
                  detailed project proposal.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Button
                    asChild
                    className="rounded-full px-8 py-3 text-black font-semibold hover:brightness-95 transition-all"
                    style={{ backgroundColor: ACCENT }}
                  >
                    <Link href=" " target="_blank">
                      Start Your Project Today
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full px-8 py-3 border-gray-600 text-white hover:bg-gray-800 bg-transparent"
                  >
                    <Link href="/About">Learn About Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <AppverseFooter />
    </>
  )
}

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import AppverseFooter from "@/components/appverse-footer"
import Image from "next/image"
import { Users, ArrowRight, Star, Award, TrendingUp } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "TechFlow SaaS Platform",
    category: "SaaS Development",
    description:
      "A comprehensive project management platform with AI-powered insights, real-time collaboration, and advanced analytics dashboard.",
    image: "/techflow-saas-dashboard.jpg",
    technologies: ["Next.js", "TypeScript", "Supabase", "Stripe", "AI SDK"],
    results: {
      users: "10K+",
      revenue: "$2M+",
      growth: "300%",
    },
    features: [
      "AI-powered project insights",
      "Real-time collaboration tools",
      "Advanced analytics dashboard",
      "Stripe payment integration",
      "Multi-tenant architecture",
    ],
    timeline: "3 months",
    client: "TechFlow Inc.",
    year: "2024",
    url: "#",
    testimonial:
      "Srijak transformed our vision into a world-class platform. The attention to detail and technical expertise exceeded our expectations.",
    clientRole: "CEO, TechFlow Inc.",
  },
  {
    id: 2,
    title: "EcoMarket E-commerce",
    category: "E-commerce",
    description:
      "Sustainable marketplace connecting eco-conscious consumers with green brands, featuring advanced filtering and AI recommendations.",
    image: "/ecomarket-ecommerce-store.jpg",
    technologies: ["Next.js", "Shopify", "Tailwind CSS", "Framer Motion", "Vercel"],
    results: {
      users: "25K+",
      revenue: "$5M+",
      growth: "450%",
    },
    features: [
      "AI product recommendations",
      "Sustainability scoring system",
      "Advanced product filtering",
      "Mobile-first design",
      "Payment gateway integration",
    ],
    timeline: "4 months",
    client: "EcoMarket Ltd.",
    year: "2024",
    url: "#",
    testimonial:
      "The platform perfectly captures our brand values while delivering exceptional user experience. Sales increased by 450% within 6 months.",
    clientRole: "Founder, EcoMarket",
  },
  {
    id: 3,
    title: "MindfulAI Wellness App",
    category: "AI Application",
    description:
      "AI-powered mental wellness platform with personalized meditation guides, mood tracking, and therapeutic chatbot assistance.",
    image: "/mindfulai-wellness-app.jpg",
    technologies: ["React Native", "AI SDK", "Supabase", "OpenAI", "Stripe"],
    results: {
      users: "50K+",
      revenue: "$1.5M+",
      growth: "250%",
    },
    features: [
      "AI therapeutic chatbot",
      "Personalized meditation plans",
      "Mood tracking & analytics",
      "Progress visualization",
      "Community features",
    ],
    timeline: "5 months",
    client: "MindfulAI Corp.",
    year: "2024",
    url: "#",
    testimonial:
      "The AI integration is seamless and truly helpful. Our users love the personalized experience and the app has become an essential part of their daily routine.",
    clientRole: "Product Director, MindfulAI",
  },
  {
    id: 4,
    title: "FinanceFlow Dashboard",
    category: "Fintech",
    description:
      "Advanced financial analytics dashboard for investment firms with real-time market data, portfolio management, and risk assessment tools.",
    image: "/financeflow-dashboard.jpg",
    technologies: ["Next.js", "D3.js", "WebSocket", "PostgreSQL", "Redis"],
    results: {
      users: "5K+",
      revenue: "$8M+",
      growth: "180%",
    },
    features: [
      "Real-time market data",
      "Advanced charting tools",
      "Risk assessment algorithms",
      "Portfolio optimization",
      "Automated reporting",
    ],
    timeline: "6 months",
    client: "FinanceFlow Partners",
    year: "2023",
    url: "#",
    testimonial:
      "The dashboard revolutionized how we analyze market data. The real-time insights and intuitive interface have significantly improved our decision-making process.",
    clientRole: "CTO, FinanceFlow Partners",
  },
  {
    id: 5,
    title: "EduTech Learning Platform",
    category: "Education",
    description:
      "Interactive online learning platform with AI-powered course recommendations, progress tracking, and virtual classroom features.",
    image: "/edutech-learning-platform.jpg",
    technologies: ["Next.js", "WebRTC", "AI SDK", "Supabase", "Zoom SDK"],
    results: {
      users: "100K+",
      revenue: "$3M+",
      growth: "400%",
    },
    features: [
      "AI course recommendations",
      "Virtual classroom integration",
      "Progress tracking system",
      "Interactive assignments",
      "Certification management",
    ],
    timeline: "4 months",
    client: "EduTech Solutions",
    year: "2024",
    url: "#",
    testimonial:
      "The platform has transformed online education for our students. The AI recommendations and interactive features have increased engagement by 400%.",
    clientRole: "Head of Product, EduTech Solutions",
  },
  {
    id: 6,
    title: "HealthSync Medical Portal",
    category: "Healthcare",
    description:
      "Comprehensive healthcare management system with patient records, appointment scheduling, telemedicine, and AI diagnostic assistance.",
    image: "/healthsync-medical-portal.jpg",
    technologies: ["Next.js", "HIPAA Compliance", "WebRTC", "AI SDK", "PostgreSQL"],
    results: {
      users: "15K+",
      revenue: "$4M+",
      growth: "220%",
    },
    features: [
      "HIPAA-compliant architecture",
      "Telemedicine integration",
      "AI diagnostic assistance",
      "Electronic health records",
      "Appointment management",
    ],
    timeline: "7 months",
    client: "HealthSync Medical",
    year: "2023",
    url: "#",
    testimonial:
      "The portal streamlined our entire practice. Patient satisfaction increased dramatically, and our efficiency improved by over 200%.",
    clientRole: "Medical Director, HealthSync",
  },
]

const stats = [
  { label: "Projects Delivered", value: "150+", icon: Award },
  { label: "Happy Clients", value: "120+", icon: Users },
  { label: "Revenue Generated", value: "$50M+", icon: TrendingUp },
  { label: "Years Experience", value: "8+", icon: Star },
]

export default function ShowcasePage() {
  return (
    <div>
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="mb-5 flex items-center justify-center gap-2">
              <Image src="/logo.svg" alt="Srijak logo" width={32} height={32} className="h-8 w-8" />
              <p className="text-sm uppercase tracking-[0.25em] text-[#ffe66d]/90 font-medium">SHOWCASE SRIJAK</p>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">
              Showcase of
              <span className="block text-[#ffe66d] drop-shadow-[0_0_20px_oklch(0.55_0.18_260_/_0.35)] font-serif italic">
                Excellence
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty leading-relaxed">
              Discover the digital experiences we've crafted for forward-thinking companies. Each project represents our
              commitment to innovation, quality, and measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="text-[#ffe66d] font-serif italic">Projects</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              From SaaS platforms to AI applications, explore our diverse portfolio of successful digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="relative rounded-[28px] glass-border bg-neutral-900 p-2 hover:scale-105 transform transition-all duration-300"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-black">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Top indicator bar like VideoCard */}
                  <div className="relative z-10 p-4">
                    <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />

                    {/* Category and Year badges */}
                    <div className="flex justify-between items-start mb-4">
                      <Badge className="bg-[#ffe66d] text-black font-semibold">{project.category}</Badge>
                      <Badge variant="outline" className="bg-black/40 text-white border-white/20">
                        {project.year}
                      </Badge>
                    </div>

                    {/* Title and description like VideoCard */}
                    <div className="space-y-2 px-1">
                      <div className="text-2xl font-bold leading-snug text-white/90">{project.title}</div>
                      <p className="text-sm text-white/70 leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                </div>

                {/* Content section outside the image area */}
                <div className="p-6">
                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#ffe66d]">{project.results.users}</div>
                      <div className="text-xs text-white/60">Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#ffe66d]">{project.results.revenue}</div>
                      <div className="text-xs text-white/60">Revenue</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#ffe66d]">{project.results.growth}</div>
                      <div className="text-xs text-white/60">Growth</div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="inline-flex items-center rounded-full bg-black/40 px-3 py-1 text-xs uppercase tracking-wider text-[#ffe66d]"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="glass-border-subtle rounded-lg p-4 mb-6">
                    <p className="text-white/80 text-sm italic mb-2">"{project.testimonial}"</p>
                    <p className="text-[#ffe66d] text-xs font-semibold">— {project.clientRole}</p>
                  </div>

                  {/* CTA */}
                  <Button className="w-full bg-[#ffe66d] text-black hover:bg-[#ffd93d] font-semibold group">
                    View Case Study
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="glass-border-enhanced rounded-[28px] p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Create Your
              <span className="block text-[#ffe66d] drop-shadow-[0_0_20px_oklch(0.55_0.18_260_/_0.35)] font-serif italic">
                Success Story?
              </span>
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Join our portfolio of successful clients. Let's build something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#ffe66d] text-black hover:bg-[#ffd93d] font-semibold px-8 py-3">
                Start Your Project
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white/90 hover:bg-white/10 px-8 py-3 bg-transparent"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <AppverseFooter />
    </div>
  )
}

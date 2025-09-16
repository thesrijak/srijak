import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function FAQPage() {
  return (
    <>
      <SiteHeader />

      <section className="relative isolate overflow-hidden text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center py-14 sm:py-20">
            <div className="mb-5 flex items-center gap-2">
              <Image src="/logo.svg" alt="Srijak logo" width={32} height={32} className="h-8 w-8" />
              <p className="text-sm uppercase tracking-[0.25em] text-[#ffe66d]/80">FREQUENTLY ASKED</p>
            </div>
            <h1 className="mt-3 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block text-white/90">YOUR</span>
              <span className="block text-[#ffe66d] drop-shadow-[0_0_20px_oklch(0.55_0.18_260_/_0.35)] font-serif italic">
                {"Questions Answered"}
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-white/80 text-center leading-relaxed">
              Everything you need to know about our design, development, and AI automation services.
            </p>
          </div>
        </div>
      </section>

      <section className="text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <Card className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-8 shadow-xl">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-[#ffe66d]">1. What services does Srijak offer?</h2>
                  <p className="text-white/80 leading-relaxed">
                    We specialize in three core areas: UI/UX Design (creating intuitive, conversion-focused interfaces),
                    Full-Stack Development (building fast, scalable web applications), and AI Automation (implementing
                    smart agents and workflow automation systems).
                  </p>
                </div>
              </Card>

              <Card className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-8 shadow-xl">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-[#ffe66d]">2. How long does a typical project take?</h2>
                  <p className="text-white/80 leading-relaxed">
                    Project timelines vary based on complexity. A landing page typically takes 3-5 days, a full web
                    application 2-4 weeks, and AI automation systems 1-3 weeks. We prioritize fast delivery without
                    compromising quality.
                  </p>
                </div>
              </Card>

              <Card className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-8 shadow-xl">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-[#ffe66d]">
                    3. Do you work with startups or only established businesses?
                  </h2>
                  <p className="text-white/80 leading-relaxed">
                    We work with businesses of all sizes - from early-stage startups to enterprise companies. Our
                    flexible approach allows us to scale our services to match your budget and growth stage.
                  </p>
                </div>
              </Card>

              <Card className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-8 shadow-xl">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-[#ffe66d]">
                    4. What's included in your UI/UX design service?
                  </h2>
                  <p className="text-white/80 leading-relaxed">
                    Our UI/UX service includes user research, wireframing, high-fidelity designs, prototyping, design
                    systems, and conversion optimization. We focus on creating interfaces that not only look beautiful
                    but drive real business results.
                  </p>
                </div>
              </Card>

              <Card className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-8 shadow-xl">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-[#ffe66d]">
                    5. Can you integrate AI into existing websites?
                  </h2>
                  <p className="text-white/80 leading-relaxed">
                    We can integrate AI chatbots, automation workflows, personalization engines, and smart analytics
                    into your existing website or application. Our AI solutions work 24/7 to improve user experience and
                    streamline operations.
                  </p>
                </div>
              </Card>

              <Card className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-8 shadow-xl">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-[#ffe66d]">
                    6. Do you provide ongoing support after project completion?
                  </h2>
                  <p className="text-white/80 leading-relaxed">
                    Yes, we offer comprehensive post-launch support including bug fixes, performance optimization,
                    content updates, and feature enhancements. We're committed to your long-term success.
                  </p>
                </div>
              </Card>

              <Card className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-8 shadow-xl">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-[#ffe66d]">
                    7. What technologies do you use for development?
                  </h2>
                  <p className="text-white/80 leading-relaxed">
                    We use modern, proven technologies including React, Next.js, TypeScript, Node.js, and various AI
                    frameworks. We choose the best tech stack for each project to ensure optimal performance,
                    scalability, and maintainability.
                  </p>
                </div>
              </Card>

              <Card className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-8 shadow-xl">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-[#ffe66d]">
                    8. How do you ensure projects meet our brand guidelines?
                  </h2>
                  <p className="text-white/80 leading-relaxed">
                    We start every project with a comprehensive brand discovery session. We study your existing brand
                    guidelines, target audience, and business goals to ensure every design decision aligns with your
                    brand identity and marketing objectives.
                  </p>
                </div>
              </Card>

              <Card className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-8 shadow-xl">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-[#ffe66d]">
                    9. Can you help with website performance optimization?
                  </h2>
                  <p className="text-white/80 leading-relaxed">
                    Definitely! We optimize for speed, SEO, and user experience. This includes image optimization, code
                    splitting, caching strategies, Core Web Vitals improvement, and mobile responsiveness to ensure your
                    site performs excellently across all devices.
                  </p>
                </div>
              </Card>

              <Card className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-8 shadow-xl">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-[#ffe66d]">10. How do we get started with Srijak?</h2>
                  <p className="text-white/80 leading-relaxed">
                    Simply contact us through WhatsApp or our contact form. We'll schedule a discovery call to
                    understand your project requirements, timeline, and goals. Then we'll provide a detailed proposal
                    with next steps to bring your vision to life.
                  </p>
                </div>
              </Card>
            </div>

            <div className="mt-16 text-center">
              <Card className="relative overflow-hidden rounded-3xl liquid-glass p-8 sm:p-12 shadow-xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  Still Have <span className="text-[#ffe66d] font-serif italic">Questions?</span>
                </h3>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  We're here to help! Get in touch with our team for personalized answers about your specific project
                  needs.
                </p>
                <Button
                  asChild
                  className="rounded-full bg-[#ffe66d] px-8 py-3 text-black font-semibold shadow-[0_0_20px_rgba(255,230,109,0.35)] hover:bg-[#ffd93d] transition-all duration-300"
                >
                  <a href=" " target="_blank" rel="noopener noreferrer">
                    Contact Our Team
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <AppverseFooter />
    </>
  )
}

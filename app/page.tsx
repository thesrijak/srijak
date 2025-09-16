import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { LogoMarquee } from "@/components/logo-marquee"
import { Pricing } from "@/components/pricing"
import { AppverseFooter } from "@/components/appverse-footer"
import Script from "next/script"

// ✅ Force static generation for low TTFB
export const dynamic = "force-static"

export default function Page() {
  const pricingStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    "@id": "https://srijak.com/#services",
    name: "Design & Development Services",
    description: "Professional UI/UX Design, Development, and AI Agent services for modern businesses",
    url: "https://srijak.com/#services",
    mainEntity: {
      "@type": "Service",
      name: "Digital Design & Development Services",
      description: "Comprehensive digital solutions including UI/UX design, web development, and AI integration",
      offers: [
        {
          "@type": "Offer",
          name: "UI UX Design",
          description: "User-centered design solutions that convert visitors into customers",
        },
        {
          "@type": "Offer",
          name: "Development",
          description: "Modern web applications built with cutting-edge technologies",
        },
        {
          "@type": "Offer",
          name: "AI Agents",
          description: "Intelligent automation solutions to streamline business processes",
        },
      ],
    },
  }

  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://srijak.com/",
    name: "Srijak | Premium Digital Design & Development Agency",
    description:
      "Transform your digital presence with our expert UI/UX design, development, and AI agent services that drive real business results.",
    url: "https://srijak.com/",
    mainEntity: {
      "@type": "Organization",
      name: "Srijak",
      url: "https://srijak.com",
      sameAs: ["https://twitter.com/srijak", "https://instagram.com/srijak"],
    },
    hasPart: [
      {
        "@type": "WebPageElement",
        "@id": "https://srijak.com/#services",
        name: "Services Section",
        url: "https://srijak.com/#services",
      },
    ],
  }

  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />
        <Hero />
        <Features />
        <LogoMarquee />
        <Pricing />
        <AppverseFooter />
      </main>

      {/* JSON-LD structured data */}
      <Script
        id="pricing-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingStructuredData),
        }}
      />

      <Script
        id="page-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
    </>
  )
}

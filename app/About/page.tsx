import { Button } from "@/components/ui/button"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import LazyVideo from "@/components/lazy-video"
import AppverseFooter from "@/components/appverse-footer"

const aboutVideoCards = [
  {
    title: "UI/UX Excellence",
    sub: "Creating intuitive, beautiful interfaces that convert visitors into loyal customers through strategic design thinking.",
    tone: "design",
    videoSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20new%20chapter%20in%20the%20story%20of%20success.__Introducing%20the%20new%20TAG%20Heuer%20Carrera%20Day-Date%20collection%2C%20reimagined%20with%20bold%20colors%2C%20refined%20finishes%2C%20and%20upgraded%20functionality%20to%20keep%20you%20focused%20on%20your%20goals.%20__Six%20-nDNoRQyFaZ8oaaoty4XaQz8W8E5bqA.mp4",
  },
  {
    title: "Full-Stack Development",
    sub: "Building fast, scalable web applications with modern technologies that grow with your business needs.",
    tone: "development",
  },
  {
    title: "AI Automation",
    sub: "Implementing smart AI agents and automation systems that work 24/7 to streamline your operations.",
    tone: "ai agents",
    videoSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Timeline%201-Ku3Y2Hgaw8hCiFEFg1ELtYp631rSzR.webm",
  },
  {
    title: "Global Reach",
    sub: "Serving clients worldwide with premium digital solutions that meet international standards and expectations.",
    tone: "worldwide",
  },
  {
    title: "Agile Delivery",
    sub: "Fast delivery without compromising quality. We launch in days, not weeks, keeping you ahead of competition.",
    tone: "speed",
  },
  {
    title: "Results-Driven",
    sub: "Every project is measured by real business impact - increased conversions, better user engagement, and ROI.",
    tone: "results",
  },
]

function VideoCard({
  title = "Service",
  sub = "Description of the service",
  tone = "default",
  videoSrc,
}: {
  title?: string
  sub?: string
  tone?: string
  videoSrc?: string
}) {
  return (
    <div className="relative rounded-[28px] glass-border bg-neutral-900 p-2 hover:scale-105 transform transition-all duration-300">
      <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-black">
        <LazyVideo
          src={
            videoSrc ??
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b0f3222371106db366a14ca1c29cef55-1b1EWVSa4w3FL2zslcaCGYTy9vcxjF.mp4"
          }
          className="absolute inset-0 h-full w-full object-cover"
          autoplay={true}
          loop={true}
          muted={true}
          playsInline={true}
          aria-label={`${title} - ${sub}`}
        />

        <div className="relative z-10 p-4">
          <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />
          <div className="space-y-2 px-1">
            <div className="text-2xl font-bold leading-snug text-white/90">{title}</div>
            <p className="text-sm text-white/70 leading-relaxed">{sub}</p>
            <div className="mt-4 inline-flex items-center rounded-full bg-black/40 px-3 py-1 text-xs uppercase tracking-wider text-primary">
              {tone}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AboutPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Srijak",
    url: "https://srijak.com",
    logo: "https://srijak.com/logo.png",
    description:
      "Srijak is a premium design and development agency specializing in UI/UX design, web development, and AI automation solutions.",
    sameAs: ["https://www.instagram.com/srijak", "https://www.linkedin.com/company/srijak"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Global",
      addressRegion: "Worldwide",
      addressCountry: "US",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-555-555-5555",
        contactType: "customer service",
      },
    ],
    areaServed: [
      { "@type": "Place", name: "Global" },
      { "@type": "Place", name: "United States" },
      { "@type": "Place", name: "Europe" },
      { "@type": "Place", name: "Asia" },
    ],
  }

  return (
    <>
      {/* SEO Schema for Google + LLMs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <main className="min-h-[100dvh] text-white">
        <SiteHeader />

        <section className="relative isolate overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center justify-center py-14 sm:py-20">
              <div className="mb-5 flex items-center gap-2">
                <Image src="/logo.svg" alt="Srijak logo" width={32} height={32} className="h-8 w-8" />
                <p className="text-sm uppercase tracking-[0.25em] text-[#ffe66d]/90 font-medium">ABOUT SRIJAK</p>
              </div>
              <h1 className="mt-3 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                <span className="block text-white/90">CRAFTING</span>
                <span className="block text-[#ffe66d] drop-shadow-[0_0_20px_oklch(0.55_0.18_260_/_0.35)] font-serif italic">
                  {"Digital Excellence"}
                </span>
                <span className="block text-white/90">SINCE DAY ONE</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-white/80 text-center leading-relaxed">
                We're a team of passionate designers, developers, and AI specialists who believe in transforming ideas
                into extraordinary digital experiences that drive real business results.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 md:px-12 lg:px-20">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Why Choose <span className="text-[#ffe66d] font-serif italic">Srijak</span>
            </h2>

            {/* Video Cards Grid */}
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {aboutVideoCards.map((card, i) => (
                <div key={i}>
                  <VideoCard title={card.title} sub={card.sub} tone={card.tone} videoSrc={card.videoSrc} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 md:px-12 lg:px-20">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              Our <span className="text-[#ffe66d] font-serif italic">Story</span>
            </h2>
            <div className="space-y-6 text-lg text-white/80 leading-relaxed">
              <p>
                Founded with a vision to bridge the gap between creative design and cutting-edge technology, Srijak has
                grown from a small team of passionate creators to a globally recognized agency.
              </p>
              <p>
                We believe that great digital experiences aren't just about beautiful visuals or clean code – they're
                about understanding your business goals and crafting solutions that deliver measurable results.
              </p>
              <p>
                Today, we're proud to work with startups, scale-ups, and enterprises worldwide, helping them transform
                their digital presence into powerful business assets that drive growth and success.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 text-center px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your <span className="text-[#ffe66d] font-serif italic">Digital Presence</span>?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your business goals through exceptional design and development.
            </p>
            <Button
              asChild
              className="rounded-full bg-primary px-8 py-3 text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href=" " target="_blank" rel="noopener noreferrer">
                Start Your Project
              </a>
            </Button>
          </div>
        </section>
      </main>

      <AppverseFooter />
    </>
  )
}

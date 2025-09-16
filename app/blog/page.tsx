import { SiteHeader } from "@/components/site-header"
import AppverseFooter from "@/components/appverse-footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, TrendingUp, Palette, Code, Bot } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "The Future of UI/UX Design: Trends Shaping 2025",
    excerpt:
      "Explore the latest design trends including AI-powered interfaces, micro-interactions, and sustainable design practices that are revolutionizing user experiences.",
    category: "UI/UX Design",
    date: "2024-12-15",
    readTime: "8 min read",
    image: "/modern-ui-design-trends-2025.jpg",
    featured: true,
    icon: Palette,
  },
  {
    id: 2,
    title: "Next.js 15: Revolutionary Features for Modern Web Development",
    excerpt:
      "Discover the game-changing features in Next.js 15 including improved performance, enhanced developer experience, and new deployment capabilities.",
    category: "Development",
    date: "2024-12-10",
    readTime: "12 min read",
    image: "/next-js-development-coding.jpg",
    featured: true,
    icon: Code,
  },
  {
    id: 3,
    title: "AI Automation: Transforming Business Operations in 2025",
    excerpt:
      "Learn how AI agents and automation tools are streamlining workflows, reducing costs, and creating new opportunities for businesses across industries.",
    category: "AI Agents",
    date: "2024-12-08",
    readTime: "10 min read",
    image: "/ai-automation-business-workflow.jpg",
    featured: true,
    icon: Bot,
  },
  {
    id: 4,
    title: "Design Systems That Scale: Building for Enterprise",
    excerpt:
      "Best practices for creating robust design systems that maintain consistency across large organizations and complex product ecosystems.",
    category: "UI/UX Design",
    date: "2024-12-05",
    readTime: "15 min read",
    image: "/design-system-components-enterprise.jpg",
    featured: false,
    icon: Palette,
  },
  {
    id: 5,
    title: "Full-Stack Development: The Modern Tech Stack Guide",
    excerpt:
      "A comprehensive guide to choosing the right technologies for your next project, from frontend frameworks to backend solutions and deployment strategies.",
    category: "Development",
    date: "2024-12-01",
    readTime: "18 min read",
    image: "/full-stack-development-technology.jpg",
    featured: false,
    icon: Code,
  },
  {
    id: 6,
    title: "Conversational AI: Building Intelligent Customer Experiences",
    excerpt:
      "How to implement AI chatbots and virtual assistants that provide meaningful customer interactions and drive business growth.",
    category: "AI Agents",
    date: "2024-11-28",
    readTime: "11 min read",
    image: "/ai-chatbot-customer-service.png",
    featured: false,
    icon: Bot,
  },
]

const categories = [
  { name: "All", count: blogPosts.length },
  { name: "UI/UX Design", count: blogPosts.filter((post) => post.category === "UI/UX Design").length },
  { name: "Development", count: blogPosts.filter((post) => post.category === "Development").length },
  { name: "AI Agents", count: blogPosts.filter((post) => post.category === "AI Agents").length },
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen text-white">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="mb-5 flex items-center justify-center gap-2">
            <Image src="/logo.svg" alt="Srijak logo" width={32} height={32} className="h-8 w-8" />
            <p className="text-sm uppercase tracking-[0.25em] text-[#ffe66d]/90 font-medium">BLOG SRIJAK</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            DESIGN & DEVELOPMENT
            <br />
            <span className="font-serif italic text-[#ffe66d] drop-shadow-[0_0_20px_oklch(0.55_0.18_260_/_0.35)]">
              Insights
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the curve with expert insights on UI/UX design trends, cutting-edge development practices, and
            AI automation strategies that drive business success.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="px-4 mb-12">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant="outline"
                className="border-gray-600 text-gray-100 hover:bg-[#ffe66d]/20 hover:text-[#ffe66d] hover:border-[#ffe66d]/50 transition-all bg-gray-900/80 backdrop-blur-sm shadow-lg"
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="px-4 mb-16">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="h-6 w-6 text-[#ffe66d]" />
            <h2 className="text-2xl font-bold text-white">Featured Articles</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <Card
                key={post.id}
                className="liquid-glass border-gray-800/50 overflow-hidden group hover:border-[#ffe66d]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#ffe66d]/10 bg-gray-900/30 backdrop-blur-xl p-0"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-5 left-5">
                    <Badge className="bg-[#ffe66d] text-black font-semibold shadow-lg backdrop-blur-sm">
                      <post.icon className="h-3.5 w-3.5 mr-1.5" />
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-7">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#ffe66d] transition-colors duration-300 leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">{post.excerpt}</p>

                  <Button
                    variant="ghost"
                    className="text-[#ffe66d] hover:bg-[#ffe66d]/10 p-0 h-auto font-semibold group/btn transition-all duration-300"
                    asChild
                  >
                    <Link
                      href={`/blog/${post.id === 1 ? "future-ui-ux-design-trends-2025" : post.id === 2 ? "nextjs-15-revolutionary-features" : "ai-automation-transforming-business-2025"}`}
                    >
                      Read Article
                      <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Posts */}
      <section className="px-4 mb-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-white mb-8">Latest Articles</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card
                key={post.id}
                className="liquid-glass border-gray-800/50 overflow-hidden group hover:border-[#ffe66d]/40 transition-all duration-500 hover:shadow-xl hover:shadow-[#ffe66d]/5 bg-gray-900/30 backdrop-blur-xl p-0"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#ffe66d] text-black font-semibold text-xs shadow-md">
                      <post.icon className="h-3 w-3 mr-1" />
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#ffe66d] transition-colors duration-300 line-clamp-2 leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>

                  <Button
                    variant="ghost"
                    className="text-[#ffe66d] hover:bg-[#ffe66d]/10 p-0 h-auto font-semibold text-sm group/btn transition-all duration-300"
                    asChild
                  >
                    <Link
                      href={`/blog/${post.id === 4 ? "design-systems-that-scale" : post.id === 5 ? "full-stack-development-guide" : "conversational-ai-customer-experiences"}`}
                    >
                      Read More
                      <ArrowRight className="h-3 w-3 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="px-4 mb-16">
        <div className="container mx-auto max-w-4xl">
          <Card className="liquid-glass border-gray-800 p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated with <span className="font-serif italic text-[#ffe66d]">Design Trends</span>
              </h3>
              <p className="text-gray-300 mb-6">
                Get the latest insights on UI/UX design, development best practices, and AI automation delivered
                straight to your inbox. Join 5,000+ professionals staying ahead of the curve.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-[#ffe66d]/50"
                />
                <Button className="bg-[#ffe66d] text-black font-medium hover:bg-[#ffd93d] px-6">Subscribe</Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <AppverseFooter />
    </div>
  )
}

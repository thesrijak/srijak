import { SiteHeader } from "@/components/site-header"
import AppverseFooter from "@/components/appverse-footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, Share2, BookOpen, Palette, Code, Bot } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

const blogPosts = [
  {
    id: 1,
    slug: "future-ui-ux-design-trends-2025",
    title: "The Future of UI/UX Design: Trends Shaping 2025",
    excerpt:
      "Explore the latest design trends including AI-powered interfaces, micro-interactions, and sustainable design practices that are revolutionizing user experiences.",
    category: "UI/UX Design",
    date: "2024-12-15",
    readTime: "8 min read",
    image: "/modern-ui-design-trends-2025.jpg",
    featured: true,
    icon: Palette,
    author: "Sarah Chen",
    authorImage: "/professional-woman-designer.png",
    content: `
      <p>The landscape of UI/UX design is evolving at an unprecedented pace, driven by technological advancements and changing user expectations. As we step into 2025, several key trends are reshaping how we approach digital experiences.</p>

      <h2>AI-Powered Personalization</h2>
      <p>Artificial intelligence is no longer just a buzzword—it's becoming the backbone of personalized user experiences. Modern interfaces are learning from user behavior patterns to adapt layouts, content, and interactions in real-time. This shift towards intelligent design means that no two users will have identical experiences, even on the same platform.</p>

      <h2>Micro-Interactions and Emotional Design</h2>
      <p>The devil is in the details, and micro-interactions are proving to be the secret sauce of memorable user experiences. From subtle button animations to contextual feedback systems, these small moments of delight are what separate good design from exceptional design.</p>

      <h2>Sustainable Design Practices</h2>
      <p>Environmental consciousness is influencing design decisions more than ever. Designers are optimizing for energy efficiency, reducing digital carbon footprints, and creating interfaces that promote sustainable user behaviors. This includes everything from dark mode implementations to streamlined user flows that reduce server requests.</p>

      <h2>Voice and Gesture Interfaces</h2>
      <p>As smart devices become more prevalent, traditional touch interfaces are expanding to include voice commands and gesture controls. This multi-modal approach to interaction design is creating more accessible and intuitive user experiences across all demographics.</p>

      <h2>The Rise of Spatial Design</h2>
      <p>With the advent of AR and VR technologies becoming mainstream, designers are thinking beyond flat screens. Spatial design principles are being integrated into traditional web and mobile interfaces, creating depth and dimensionality that enhances user engagement.</p>

      <p>The future of UI/UX design is bright, filled with opportunities to create more meaningful, accessible, and delightful digital experiences. As designers, staying ahead of these trends while maintaining focus on user needs will be key to success in 2025 and beyond.</p>
    `,
  },
  {
    id: 2,
    slug: "nextjs-15-revolutionary-features",
    title: "Next.js 15: Revolutionary Features for Modern Web Development",
    excerpt:
      "Discover the game-changing features in Next.js 15 including improved performance, enhanced developer experience, and new deployment capabilities.",
    category: "Development",
    date: "2024-12-10",
    readTime: "12 min read",
    image: "/next-js-development-coding.jpg",
    featured: true,
    icon: Code,
    author: "Alex Rodriguez",
    authorImage: "/professional-man-developer.png",
    content: `
      <p>Next.js 15 represents a significant leap forward in React-based web development, introducing features that streamline development workflows and enhance application performance. Let's dive into the most impactful changes that are reshaping how we build modern web applications.</p>

      <h2>Enhanced App Router Performance</h2>
      <p>The App Router has received substantial performance improvements, with faster page transitions and optimized bundle splitting. The new caching strategies reduce initial load times by up to 40%, making applications feel more responsive than ever before.</p>

      <h2>Improved Developer Experience</h2>
      <p>Developer productivity has been a major focus in this release. The enhanced error overlay provides more contextual information, making debugging significantly easier. Hot reloading is now faster and more reliable, reducing the feedback loop during development.</p>

      <h2>Advanced Image Optimization</h2>
      <p>The Image component has been completely rewritten to support modern formats like AVIF and WebP with better fallback strategies. Automatic optimization now includes responsive image generation and lazy loading improvements that work seamlessly across all devices.</p>

      <h2>Server Actions Evolution</h2>
      <p>Server Actions have matured significantly, offering better type safety and improved error handling. The new streaming capabilities allow for progressive enhancement of forms and user interactions, creating smoother user experiences.</p>

      <h2>Edge Runtime Enhancements</h2>
      <p>The Edge Runtime now supports more Node.js APIs, making it easier to migrate existing applications. Cold start times have been reduced by 60%, making serverless deployments more viable for high-traffic applications.</p>

      <h2>Built-in Analytics and Monitoring</h2>
      <p>Next.js 15 introduces native performance monitoring and analytics capabilities. Developers can now track Core Web Vitals, user interactions, and application performance without additional third-party tools.</p>

      <p>These improvements make Next.js 15 not just an incremental update, but a transformative release that addresses real-world development challenges while maintaining the framework's commitment to developer experience and application performance.</p>
    `,
  },
  {
    id: 3,
    slug: "ai-automation-transforming-business-2025",
    title: "AI Automation: Transforming Business Operations in 2025",
    excerpt:
      "Learn how AI agents and automation tools are streamlining workflows, reducing costs, and creating new opportunities for businesses across industries.",
    category: "AI Agents",
    date: "2024-12-08",
    readTime: "10 min read",
    image: "/ai-automation-business-workflow.jpg",
    featured: true,
    icon: Bot,
    author: "Dr. Maya Patel",
    authorImage: "/professional-woman-ai-expert.jpg",
    content: `
      <p>Artificial Intelligence is no longer a futuristic concept—it's actively reshaping business operations across every industry. As we navigate through 2025, AI automation has become the cornerstone of competitive advantage, driving efficiency and innovation at unprecedented scales.</p>

      <h2>The Current State of AI Automation</h2>
      <p>Today's AI systems are far more sophisticated than their predecessors. They can understand context, make complex decisions, and adapt to changing conditions without human intervention. This evolution has made AI automation accessible to businesses of all sizes, not just tech giants.</p>

      <h2>Key Areas of Transformation</h2>
      <p>Customer service has been revolutionized through intelligent chatbots and virtual assistants that can handle complex queries with human-like understanding. These systems are reducing response times by 80% while maintaining high satisfaction rates.</p>

      <p>Supply chain management is being optimized through predictive analytics and automated decision-making systems. Companies are seeing 25-30% reductions in inventory costs while improving delivery times and customer satisfaction.</p>

      <h2>The Human-AI Collaboration Model</h2>
      <p>Rather than replacing human workers, successful AI implementations focus on augmenting human capabilities. This collaborative approach is creating new job categories while eliminating repetitive tasks, allowing employees to focus on creative and strategic work.</p>

      <h2>Implementation Strategies</h2>
      <p>Successful AI automation requires a strategic approach. Companies should start with pilot projects in specific departments, measure results carefully, and scale gradually. The key is to choose processes that are rule-based, data-rich, and have clear success metrics.</p>

      <h2>Challenges and Solutions</h2>
      <p>Data quality remains the biggest challenge in AI implementation. Organizations must invest in data governance and cleaning processes to ensure AI systems have reliable information to work with. Additionally, change management and employee training are crucial for successful adoption.</p>

      <h2>Looking Ahead</h2>
      <p>The future of AI automation lies in more sophisticated systems that can handle unstructured data, make ethical decisions, and adapt to new situations autonomously. Businesses that embrace this technology today will be best positioned for tomorrow's opportunities.</p>
    `,
  },
]

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      <SiteHeader />

      {/* Article Header */}
      <article className="relative">
        {/* Back Navigation */}
        <div className="px-4 pt-8 pb-4">
          <div className="container mx-auto max-w-4xl">
            <Link href="/blog">
              <Button variant="ghost" className="text-gray-400 hover:text-[#ffe66d] p-0 mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-96 mb-8">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />

          {/* Article Meta Overlay */}
          <div className="absolute bottom-8 left-4 right-4">
            <div className="container mx-auto max-w-4xl">
              <Badge className="bg-[#ffe66d] text-black font-semibold mb-4">
                <post.icon className="h-4 w-4 mr-2" />
                {post.category}
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">{post.title}</h1>
              <div className="flex items-center gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <Image
                    src={post.authorImage || "/placeholder.svg"}
                    alt={post.author}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="px-4 pb-16">
          <div className="container mx-auto max-w-4xl">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <Card className="liquid-glass border-gray-700/60 p-8 md:p-12 bg-gray-900/60 backdrop-blur-xl shadow-2xl">
                  <div
                    className="prose prose-lg prose-invert max-w-none
                      prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
                      prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-6 prose-h2:text-[#ffe66d] prose-h2:font-serif prose-h2:italic
                      prose-p:text-gray-100 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base
                      prose-strong:text-white prose-strong:font-semibold
                      prose-a:text-[#ffe66d] prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                      prose-li:text-gray-100 prose-li:mb-2
                      prose-blockquote:border-l-[#ffe66d] prose-blockquote:text-gray-200 prose-blockquote:bg-gray-800/30 prose-blockquote:p-4 prose-blockquote:rounded-r-lg"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  {/* Share */}
                  <Card className="liquid-glass border-gray-700/60 p-6 bg-gray-900/60 backdrop-blur-xl shadow-xl">
                    <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                      <Share2 className="h-4 w-4 text-[#ffe66d]" />
                      Share Article
                    </h3>
                    <div className="space-y-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full justify-start border-gray-600 text-gray-200 hover:bg-[#ffe66d]/20 hover:text-[#ffe66d] hover:border-[#ffe66d]/50 bg-gray-800/40 transition-all duration-300"
                      >
                        Twitter
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full justify-start border-gray-600 text-gray-200 hover:bg-[#ffe66d]/20 hover:text-[#ffe66d] hover:border-[#ffe66d]/50 bg-gray-800/40 transition-all duration-300"
                      >
                        LinkedIn
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full justify-start border-gray-600 text-gray-200 hover:bg-[#ffe66d]/20 hover:text-[#ffe66d] hover:border-[#ffe66d]/50 bg-gray-800/40 transition-all duration-300"
                      >
                        Copy Link
                      </Button>
                    </div>
                  </Card>

                  {/* Reading Progress */}
                  <Card className="liquid-glass border-gray-700/60 p-6 bg-gray-900/60 backdrop-blur-xl shadow-xl">
                    <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-[#ffe66d]" />
                      Reading Time
                    </h3>
                    <div className="text-gray-200 text-sm">
                      <p className="mb-3 font-medium">{post.readTime}</p>
                      <div className="w-full bg-gray-700/60 rounded-full h-2.5 overflow-hidden">
                        <div className="bg-gradient-to-r from-[#ffe66d] to-[#ffd93d] h-2.5 rounded-full w-1/3 shadow-sm"></div>
                      </div>
                    </div>
                  </Card>

                  {/* Related Topics */}
                  <Card className="liquid-glass border-gray-700/60 p-6 bg-gray-900/60 backdrop-blur-xl shadow-xl">
                    <h3 className="text-white font-semibold mb-4">Related Topics</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className="border-gray-600 text-gray-200 hover:bg-[#ffe66d]/20 hover:text-[#ffe66d] hover:border-[#ffe66d]/50 bg-gray-800/40 transition-all duration-300"
                      >
                        Design Systems
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-gray-600 text-gray-200 hover:bg-[#ffe66d]/20 hover:text-[#ffe66d] hover:border-[#ffe66d]/50 bg-gray-800/40 transition-all duration-300"
                      >
                        User Experience
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-gray-600 text-gray-200 hover:bg-[#ffe66d]/20 hover:text-[#ffe66d] hover:border-[#ffe66d]/50 bg-gray-800/40 transition-all duration-300"
                      >
                        Web Development
                      </Badge>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <section className="px-4 pb-16">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-white mb-8 font-serif italic">Related Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts
                .filter((p) => p.id !== post.id && p.category === post.category)
                .slice(0, 3)
                .map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                    <Card className="liquid-glass border-gray-700/60 overflow-hidden group hover:border-[#ffe66d]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#ffe66d]/10 bg-gray-900/50 backdrop-blur-xl p-0 hover:scale-105">
                      <div className="relative overflow-hidden">
                        <Image
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          width={400}
                          height={200}
                          className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <div className="absolute top-3 left-3">
                          <Badge className="bg-[#ffe66d] text-black font-semibold text-xs shadow-lg">
                            <relatedPost.icon className="h-3 w-3 mr-1" />
                            {relatedPost.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#ffe66d] transition-colors duration-300 line-clamp-2 leading-tight">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-200 text-sm line-clamp-2 mb-3 leading-relaxed">{relatedPost.excerpt}</p>
                        <div className="flex items-center gap-3 text-xs text-gray-300">
                          <span>
                            {new Date(relatedPost.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                          </span>
                          <span>•</span>
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </article>

      <AppverseFooter />
    </div>
  )
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

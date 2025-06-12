"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, ArrowLeft, Share2, MessageCircle } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import StaticBackground from "@/components/static-background"
import Image from "next/image"

export default function ArticlePage() {
  const params = useParams()
  const slug = params.slug as string

  // Article database
  const articles = {
    "london-startup-ai-project": {
      title: "London Startup AI Project Revolutionizes Business Intelligence",
      content: `
        <p>In the heart of London's thriving tech ecosystem, a groundbreaking AI project is reshaping how businesses approach intelligence and decision-making. This innovative platform represents a paradigm shift in how startups and enterprises leverage artificial intelligence to drive growth and competitive advantage.</p>

        <h2>The Vision Behind the Revolution</h2>
        <p>At AGStellar, we believe that artificial intelligence should be more than just a buzzword—it should be a transformative force that empowers businesses to make smarter decisions, faster. Our London-based AI project embodies this philosophy, delivering cutting-edge solutions that bridge the gap between complex data and actionable insights.</p>

        <h2>Key Innovation Areas</h2>
        <p>The platform focuses on three core areas that are revolutionizing business intelligence:</p>
        <ul>
          <li><strong>Predictive Analytics:</strong> Advanced machine learning algorithms that forecast market trends and business outcomes with unprecedented accuracy.</li>
          <li><strong>Real-time Decision Support:</strong> Intelligent systems that provide instant recommendations based on live data streams and historical patterns.</li>
          <li><strong>Automated Insights Generation:</strong> AI-powered analysis that transforms raw data into strategic business intelligence without human intervention.</li>
        </ul>

        <h2>Impact on the Startup Ecosystem</h2>
        <p>This project is particularly significant for London's startup community. By democratizing access to enterprise-level AI capabilities, we're enabling smaller companies to compete with industry giants on a more level playing field. The platform's scalable architecture means that startups can access sophisticated AI tools without the traditional barriers of cost and complexity.</p>

        <h2>Technical Excellence</h2>
        <p>Built on a foundation of modern cloud architecture and leveraging the latest advances in machine learning, the platform demonstrates our commitment to technical excellence. Every component is designed for scalability, reliability, and performance—ensuring that our clients can focus on growth while we handle the technological complexity.</p>

        <h2>Looking Forward</h2>
        <p>This London AI project represents just the beginning of our vision for the future of business intelligence. As we continue to innovate and expand our capabilities, we remain committed to delivering solutions that not only meet today's challenges but anticipate tomorrow's opportunities.</p>

        <p>The future of business is intelligent, and we're proud to be leading that transformation from the heart of London's tech scene.</p>
      `,
      date: "May 15, 2025",
      author: {
        name: "Gökdeniz",
        avatar: "/placeholder-user.jpg",
      },
      category: "Tech",
      comments: 4,
      image: "/images/london-street.png",
      commentsList: [
        {
          id: 1,
          author: "Sarah Mitchell",
          content:
            "This revolutionary approach to business intelligence is exactly what the London startup ecosystem needed. The democratization of enterprise-level AI capabilities will undoubtedly level the playing field.",
          time: "3 hours ago",
          isEnglish: true,
        },
        {
          id: 2,
          author: "Mehmet Özkan",
          content:
            "Yapay zeka alanındaki bu yenilikçi yaklaşım gerçekten etkileyici. Özellikle startup'ların büyük şirketlerle rekabet edebilmesi için gerekli araçları sağlaması çok değerli.",
          time: "5 hours ago",
          isEnglish: false,
        },
        {
          id: 3,
          author: "James Richardson",
          content:
            "The technical architecture described here represents a significant leap forward in AI implementation. The focus on scalability and performance optimization is particularly impressive.",
          time: "1 day ago",
          isEnglish: true,
        },
        {
          id: 4,
          author: "Elena Popović",
          content:
            "Londra'daki teknoloji ekosisteminin bu şekilde güçlenmesi tüm sektör için umut verici. AGStellar'ın vizyoner yaklaşımı gerçekten takdire şayan.",
          time: "2 days ago",
          isEnglish: false,
        },
      ],
    },
    "evolution-web-development-2025": {
      title: "The Evolution of Web Development in 2025",
      content: `
        <p>The web development landscape in 2025 represents a fascinating convergence of emerging technologies, evolving user expectations, and innovative development paradigms. As we navigate this dynamic environment, it's clear that the industry is experiencing one of its most significant transformations since the advent of responsive design.</p>

        <h2>The New Development Paradigm</h2>
        <p>Modern web development has evolved far beyond traditional frameworks and methodologies. Today's developers are working with an ecosystem that seamlessly integrates artificial intelligence, edge computing, and progressive web technologies to create experiences that were unimaginable just a few years ago.</p>

        <h2>Key Technological Shifts</h2>
        <p>Several major trends are defining the current landscape:</p>
        <ul>
          <li><strong>AI-Driven Development:</strong> Machine learning algorithms are now integral to the development process, from automated code generation to intelligent testing and optimization.</li>
          <li><strong>Edge-First Architecture:</strong> Applications are being designed with edge computing as a primary consideration, enabling faster load times and improved user experiences globally.</li>
          <li><strong>Component-Driven Design:</strong> The shift toward modular, reusable components is accelerating, with new frameworks making it easier than ever to build scalable applications.</li>
          <li><strong>Full-Stack Integration:</strong> The boundaries between frontend and backend development continue to blur, with new tools enabling seamless full-stack development workflows.</li>
        </ul>

        <h2>The Business Impact</h2>
        <p>These technological advances aren't just academic—they're driving real business value. Companies that embrace modern web development practices are seeing significant improvements in user engagement, conversion rates, and operational efficiency. The ability to rapidly prototype, test, and deploy new features has become a critical competitive advantage.</p>

        <h2>Challenges and Opportunities</h2>
        <p>While the opportunities are immense, the rapid pace of change also presents challenges. Developers must continuously adapt to new tools and methodologies, while businesses must balance innovation with stability and security. At AGStellar, we help our clients navigate these complexities by providing strategic guidance and technical expertise.</p>

        <h2>Looking Ahead</h2>
        <p>As we look toward the future, it's clear that web development will continue to evolve at an accelerated pace. The integration of emerging technologies like WebAssembly, advanced PWA capabilities, and next-generation JavaScript frameworks will create new possibilities for what's achievable on the web.</p>

        <p>The key to success in this environment is maintaining a balance between embracing innovation and delivering reliable, user-focused solutions. That's the approach we take at AGStellar—always pushing the boundaries while never losing sight of the fundamental goal: creating exceptional digital experiences.</p>
      `,
      date: "April 22, 2025",
      author: {
        name: "Gökdeniz",
        avatar: "/placeholder-user.jpg",
      },
      category: "Development",
      comments: 0,
      image: "/images/web-development-setup.png",
      commentsList: [],
    },
    "mobile-app-trends-2025": {
      title: "Mobile App Trends That Will Dominate Next Year",
      content: `
        <p>The mobile application landscape is experiencing unprecedented innovation, driven by advances in hardware capabilities, user behavior evolution, and emerging technologies. As we analyze the trends shaping the industry, it's clear that 2025 will be a pivotal year for mobile app development and user experience design.</p>

        <h2>The Mobile-First Reality</h2>
        <p>Mobile devices have become the primary computing platform for billions of users worldwide. This shift has fundamentally changed how we approach application design, development, and deployment. Today's mobile apps must deliver desktop-class functionality while maintaining the intuitive, touch-first experience that users expect.</p>

        <h2>Emerging Trends Reshaping Mobile Development</h2>
        <p>Several key trends are driving innovation in the mobile space:</p>
        <ul>
          <li><strong>AI-Powered Personalization:</strong> Machine learning algorithms are enabling apps to provide highly personalized experiences that adapt to individual user preferences and behaviors in real-time.</li>
          <li><strong>Cross-Platform Excellence:</strong> New development frameworks are making it possible to create truly native experiences across multiple platforms without sacrificing performance or user experience.</li>
          <li><strong>Augmented Reality Integration:</strong> AR capabilities are moving beyond novelty features to become essential tools for commerce, education, and productivity applications.</li>
          <li><strong>Voice and Gesture Interfaces:</strong> Natural interaction methods are becoming more sophisticated, enabling new forms of user engagement and accessibility.</li>
          <li><strong>Edge Computing Integration:</strong> Mobile apps are leveraging edge computing to provide faster, more responsive experiences while reducing bandwidth requirements.</li>
        </ul>

        <h2>The Business Transformation</h2>
        <p>These technological advances are driving significant business transformation. Companies that successfully leverage mobile innovation are seeing improved customer engagement, increased revenue, and enhanced operational efficiency. The mobile app has become a critical touchpoint for customer relationships and business growth.</p>

        <h2>Development Strategy Evolution</h2>
        <p>Modern mobile app development requires a strategic approach that balances innovation with practicality. At AGStellar, we help businesses navigate this complexity by focusing on user-centered design, scalable architecture, and measurable business outcomes. Our approach ensures that mobile applications not only leverage cutting-edge technology but also deliver tangible value to users and businesses.</p>

        <h2>Security and Privacy Considerations</h2>
        <p>As mobile apps become more sophisticated and handle increasingly sensitive data, security and privacy have become paramount concerns. Modern development practices must incorporate security by design, ensuring that user data is protected while maintaining the seamless experiences that users expect.</p>

        <h2>The Future of Mobile Innovation</h2>
        <p>Looking ahead, the convergence of 5G networks, advanced AI capabilities, and emerging hardware technologies will create new possibilities for mobile applications. The apps of tomorrow will be more intelligent, more connected, and more capable than ever before.</p>

        <p>Success in this evolving landscape requires a deep understanding of both technology and user needs. At AGStellar, we're committed to helping our clients build mobile applications that not only meet today's requirements but are positioned to take advantage of tomorrow's opportunities.</p>
      `,
      date: "February 8, 2025",
      author: {
        name: "Gökdeniz",
        avatar: "/placeholder-user.jpg",
      },
      category: "Mobile",
      comments: 0,
      image: "/images/mobile-app-abstract.png",
      commentsList: [],
    },
    "blockchain-transforming-finance": {
      title: "How Blockchain is Transforming Financial Systems",
      content: `
        <p>The financial services industry is undergoing a fundamental transformation, driven by blockchain technology's promise of transparency, security, and decentralization. As traditional financial institutions grapple with changing consumer expectations and regulatory requirements, blockchain emerges as a powerful tool for innovation and competitive advantage.</p>

        <h2>The Foundation of Financial Innovation</h2>
        <p>Blockchain technology represents more than just a technological upgrade—it's a paradigm shift that challenges traditional notions of trust, intermediation, and value transfer. By providing a distributed, immutable ledger system, blockchain enables new forms of financial interaction that were previously impossible or prohibitively expensive.</p>

        <h2>Key Areas of Transformation</h2>
        <p>The impact of blockchain on financial services is multifaceted and far-reaching:</p>
        <ul>
          <li><strong>Payment Systems:</strong> Blockchain-based payment networks are enabling faster, cheaper, and more transparent transactions, particularly for cross-border transfers.</li>
          <li><strong>Smart Contracts:</strong> Automated contract execution is reducing the need for intermediaries and enabling new forms of financial products and services.</li>
          <li><strong>Digital Identity:</strong> Blockchain-based identity solutions are providing more secure and user-controlled approaches to financial identity verification.</li>
          <li><strong>Trade Finance:</strong> Complex trade finance processes are being streamlined through blockchain-based documentation and verification systems.</li>
          <li><strong>Regulatory Compliance:</strong> Immutable audit trails and programmable compliance are making it easier for financial institutions to meet regulatory requirements.</li>
        </ul>

        <h2>Real-World Implementation</h2>
        <p>At AGStellar, we've seen firsthand how blockchain technology can transform financial operations. Our blockchain payment solution has demonstrated significant improvements in transaction speed, cost reduction, and security for our clients. These real-world implementations prove that blockchain is moving beyond theoretical potential to deliver practical business value.</p>

        <h2>Overcoming Implementation Challenges</h2>
        <p>While the potential of blockchain in finance is enormous, successful implementation requires careful consideration of technical, regulatory, and business factors. Scalability, energy efficiency, and regulatory compliance remain key challenges that must be addressed through thoughtful design and implementation strategies.</p>

        <h2>The Institutional Adoption Wave</h2>
        <p>We're witnessing an accelerating wave of institutional adoption as major financial institutions recognize blockchain's strategic importance. This institutional embrace is driving standardization, improving interoperability, and creating the infrastructure necessary for widespread adoption.</p>

        <h2>Future Implications</h2>
        <p>The transformation of financial systems through blockchain technology is still in its early stages. As the technology matures and regulatory frameworks evolve, we can expect to see even more innovative applications that further democratize access to financial services and create new opportunities for economic participation.</p>

        <p>The future of finance is being built on blockchain foundations, and organizations that understand and embrace this transformation will be best positioned to thrive in the new financial landscape. At AGStellar, we're committed to helping our clients navigate this transformation and capitalize on the opportunities that blockchain technology presents.</p>
      `,
      date: "June 7, 2025",
      author: {
        name: "Gökdeniz",
        avatar: "/placeholder-user.jpg",
      },
      category: "Blockchain",
      comments: 3,
      image: "/images/blockchain-bank.png",
      commentsList: [
        {
          id: 1,
          author: "David Williams",
          content:
            "The paradigm shift you've described in financial systems is profound. The democratization of financial services through blockchain technology will have far-reaching implications for global economic participation.",
          time: "5 hours ago",
          isEnglish: true,
        },
        {
          id: 2,
          author: "Fatma Arslan",
          content:
            "Blockchain teknolojisinin finansal sistemlerdeki dönüştürücü etkisi hakkındaki analiziniz çok kapsamlı. Özellikle kurumsal adaptasyon dalgası konusundaki öngörüleriniz çok değerli.",
          time: "10 hours ago",
          isEnglish: false,
        },
        {
          id: 3,
          author: "Jennifer Martinez",
          content:
            "Your real-world implementation examples provide compelling evidence of blockchain's practical value in finance. The focus on overcoming implementation challenges is particularly insightful for industry practitioners.",
          time: "1 day ago",
          isEnglish: true,
        },
      ],
    },
    "future-software-development-ai": {
      title: "The Future of Software Development in the AI Era",
      content: `
        <p>The software development industry stands at the threshold of a revolutionary transformation. Artificial intelligence is not just changing how we build software—it's fundamentally redefining what it means to be a software developer in the modern era. This shift represents both an unprecedented opportunity and a significant challenge for developers, businesses, and the technology industry as a whole.</p>

        <h2>AI as a Development Partner</h2>
        <p>The relationship between developers and AI is evolving from one of tool usage to genuine partnership. Modern AI systems can understand context, generate code, identify bugs, and even suggest architectural improvements. This collaboration is enabling developers to focus on higher-level problem-solving while AI handles routine coding tasks.</p>

        <h2>Transformative Capabilities</h2>
        <p>AI is introducing capabilities that are reshaping every aspect of software development:</p>
        <ul>
          <li><strong>Intelligent Code Generation:</strong> AI can now generate functional code from natural language descriptions, dramatically accelerating the development process.</li>
          <li><strong>Automated Testing and Quality Assurance:</strong> Machine learning algorithms can identify potential issues and generate comprehensive test suites automatically.</li>
          <li><strong>Predictive Debugging:</strong> AI systems can predict where bugs are likely to occur and suggest preventive measures before issues arise.</li>
          <li><strong>Architectural Optimization:</strong> AI can analyze codebases and suggest improvements for performance, scalability, and maintainability.</li>
          <li><strong>Personalized Development Environments:</strong> AI-powered IDEs that adapt to individual developer preferences and coding styles.</li>
        </ul>

        <h2>The Human Element</h2>
        <p>While AI is transforming the technical aspects of development, the human element remains crucial. Creativity, strategic thinking, and understanding of business requirements are uniquely human capabilities that become even more valuable in an AI-augmented development environment. The most successful developers will be those who learn to effectively collaborate with AI systems.</p>

        <h2>New Development Paradigms</h2>
        <p>The integration of AI into software development is giving rise to new paradigms and methodologies. Prompt engineering, AI-assisted design patterns, and human-AI collaborative workflows are becoming essential skills for modern developers. These new approaches require a fundamental shift in how we think about software creation.</p>

        <h2>Business Impact and Opportunities</h2>
        <p>For businesses, AI-enhanced development offers the promise of faster time-to-market, reduced development costs, and higher-quality software. However, realizing these benefits requires strategic planning and investment in both technology and human capital. Organizations that successfully navigate this transition will gain significant competitive advantages.</p>

        <h2>Preparing for the Future</h2>
        <p>At AGStellar, we're actively preparing for this AI-driven future by investing in AI-enhanced development tools, training our team in AI collaboration techniques, and developing new methodologies that leverage AI capabilities while maintaining our commitment to quality and innovation.</p>

        <p>The future of software development is not about replacing human developers with AI—it's about creating powerful partnerships that amplify human creativity and capability. This collaborative approach will enable us to build better software, solve more complex problems, and create more value for our clients and users.</p>
      `,
      date: "June 5, 2025",
      author: {
        name: "Gökdeniz",
        avatar: "/placeholder-user.jpg",
      },
      category: "Technology",
      comments: 0,
      image: "/images/tech-article-1.png",
      commentsList: [],
    },
    "building-scalable-applications": {
      title: "Building Scalable Applications with Modern Architecture",
      content: `
        <p>In today's rapidly evolving digital landscape, the ability to build scalable applications has become a critical differentiator for businesses seeking sustainable growth. Modern architecture patterns and technologies offer unprecedented opportunities to create systems that can adapt, grow, and perform under increasing demands while maintaining reliability and user experience.</p>

        <h2>The Scalability Imperative</h2>
        <p>Scalability is no longer a luxury—it's a necessity. Applications must be designed from the ground up to handle growth in users, data, and functionality. This requires a fundamental shift in how we approach architecture, moving from monolithic designs to distributed, modular systems that can scale independently.</p>

        <h2>Modern Architecture Principles</h2>
        <p>Building scalable applications requires adherence to several key architectural principles:</p>
        <ul>
          <li><strong>Microservices Architecture:</strong> Breaking applications into small, independent services that can be developed, deployed, and scaled separately.</li>
          <li><strong>Event-Driven Design:</strong> Using asynchronous communication patterns to decouple services and improve system resilience.</li>
          <li><strong>Cloud-Native Development:</strong> Leveraging cloud platforms and services to achieve elasticity and global distribution.</li>
          <li><strong>API-First Approach:</strong> Designing robust APIs that enable integration and extensibility from the start.</li>
          <li><strong>Data Architecture Optimization:</strong> Implementing appropriate data storage and retrieval strategies for different use cases.</li>
        </ul>

        <h2>Technology Stack Considerations</h2>
        <p>The choice of technology stack plays a crucial role in achieving scalability. Modern frameworks and platforms offer built-in scalability features, but selecting the right combination requires careful consideration of performance requirements, team expertise, and long-term maintenance needs.</p>

        <h2>Performance and Monitoring</h2>
        <p>Scalable applications require comprehensive monitoring and performance optimization strategies. Real-time metrics, automated alerting, and performance profiling are essential for maintaining optimal performance as systems grow. Proactive monitoring enables teams to identify and address bottlenecks before they impact users.</p>

        <h2>Security at Scale</h2>
        <p>As applications scale, security considerations become increasingly complex. Distributed systems require sophisticated security strategies that protect data and functionality across multiple services and deployment environments. Security must be built into the architecture from the beginning, not added as an afterthought.</p>

        <h2>DevOps and Deployment Strategies</h2>
        <p>Scalable applications require scalable deployment and operations processes. Modern DevOps practices, including continuous integration, automated testing, and infrastructure as code, are essential for managing complex, distributed systems effectively.</p>

        <h2>Our Approach at AGStellar</h2>
        <p>At AGStellar, we've developed a comprehensive approach to building scalable applications that combines proven architectural patterns with cutting-edge technologies. Our methodology emphasizes iterative development, continuous optimization, and proactive planning for growth.</p>

        <p>We believe that scalability is not just about handling more users or data—it's about creating systems that can evolve and adapt to changing business requirements while maintaining performance and reliability. This holistic approach to scalability ensures that our clients' applications can grow with their businesses and continue to deliver value over time.</p>
      `,
      date: "June 5, 2025",
      author: {
        name: "Gökdeniz",
        avatar: "/placeholder-user.jpg",
      },
      category: "Technology",
      comments: 0,
      image: "/images/tech-article-2.png",
      commentsList: [],
    },
    "machine-learning-web-applications": {
      title: "Machine Learning Integration in Web Applications",
      content: `
        <p>The integration of machine learning capabilities into web applications represents one of the most significant technological advances in modern software development. This convergence is enabling developers to create intelligent, adaptive applications that can learn from user behavior, make predictions, and provide personalized experiences at scale.</p>

        <h2>The ML-Web Convergence</h2>
        <p>The traditional boundaries between machine learning and web development are dissolving. Modern web applications are increasingly incorporating ML features that were once the exclusive domain of specialized AI systems. This integration is being driven by advances in browser capabilities, cloud ML services, and developer-friendly ML frameworks.</p>

        <h2>Practical Implementation Strategies</h2>
        <p>Successfully integrating machine learning into web applications requires a strategic approach:</p>
        <ul>
          <li><strong>Client-Side ML:</strong> Using frameworks like TensorFlow.js to run ML models directly in the browser for real-time inference and improved privacy.</li>
          <li><strong>Cloud-Based ML Services:</strong> Leveraging cloud platforms to access powerful ML capabilities without managing infrastructure.</li>
          <li><strong>Hybrid Approaches:</strong> Combining client-side and server-side ML to optimize for performance, privacy, and functionality.</li>
          <li><strong>Progressive Enhancement:</strong> Implementing ML features as enhancements that improve the user experience without breaking core functionality.</li>
          <li><strong>Data Pipeline Integration:</strong> Building robust data collection and processing pipelines to feed ML models with high-quality training data.</li>
        </ul>

        <h2>Real-World Applications</h2>
        <p>Machine learning integration is enabling new categories of web applications and enhancing existing ones. From recommendation engines and predictive search to automated content generation and intelligent user interfaces, ML is becoming an essential component of modern web experiences.</p>

        <h2>Performance and User Experience</h2>
        <p>Integrating ML into web applications requires careful consideration of performance implications. Model size, inference speed, and resource consumption must be balanced against the value provided to users. Techniques like model optimization, caching, and progressive loading help ensure that ML features enhance rather than degrade the user experience.</p>

        <h2>Privacy and Ethical Considerations</h2>
        <p>The integration of ML into web applications raises important privacy and ethical considerations. Developers must implement appropriate data protection measures, ensure algorithmic fairness, and provide transparency about how ML systems make decisions that affect users.</p>

        <h2>Development Workflow Integration</h2>
        <p>Modern web development workflows must accommodate the unique requirements of ML integration. This includes model versioning, A/B testing of ML features, monitoring model performance in production, and maintaining data quality over time.</p>

        <h2>Future Opportunities</h2>
        <p>The future of ML-enabled web applications is incredibly promising. Advances in edge computing, federated learning, and automated ML are making it easier than ever to build intelligent web applications that can adapt and improve over time.</p>

        <p>At AGStellar, we're at the forefront of this ML-web integration revolution. Our team combines deep expertise in both machine learning and web development to create applications that are not just functional, but truly intelligent. We help our clients leverage ML to create competitive advantages and deliver exceptional user experiences.</p>
      `,
      date: "June 5, 2025",
      author: {
        name: "Gökdeniz",
        avatar: "/placeholder-user.jpg",
      },
      category: "Technology",
      comments: 0,
      image: "/images/tech-article-3.png",
      commentsList: [],
    },
  }

  const article = articles[slug as keyof typeof articles]

  if (!article) {
    return (
      <div className="min-h-screen text-white bg-black flex items-center justify-center">
        <StaticBackground />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="mb-8">The article you're looking for doesn't exist or has been moved.</p>
          <Button asChild className="bg-cyan-500 hover:bg-cyan-600 text-white">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <StaticBackground />

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-black sticky top-0 z-50 border-b border-zinc-800">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Link href="/" className="text-3xl font-black tracking-tighter">
                  <span className="text-white">AG</span>
                  <span className="text-white">STELLAR</span>
                </Link>
              </div>
              <nav className="hidden md:flex items-center space-x-6">
                <Link href="/tech" className="text-white hover:text-zinc-300 text-sm font-medium">
                  Tech
                </Link>
                <Link href="/ai" className="text-white hover:text-zinc-300 text-sm font-medium">
                  AI
                </Link>
                <Link href="/development" className="text-white hover:text-zinc-300 text-sm font-medium">
                  Development
                </Link>
                <Link href="/projects" className="text-white hover:text-zinc-300 text-sm font-medium">
                  Projects
                </Link>
                <Link href="/about" className="text-white hover:text-zinc-300 text-sm font-medium">
                  About
                </Link>
              </nav>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <Button variant="ghost" className="mb-6 text-white hover:bg-zinc-800" asChild>
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Ana Sayfaya Dön
            </Link>
          </Button>

          <div className="flex flex-col lg:flex-row gap-8">
            <article className="lg:w-2/3">
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader className="space-y-4">
                  <Badge className="w-fit bg-cyan-500 hover:bg-cyan-600">{article.category}</Badge>
                  <h1 className="text-3xl md:text-4xl font-bold leading-tight text-white">{article.title}</h1>

                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={article.author.avatar || "/placeholder.svg"} alt={article.author.name} />
                      <AvatarFallback>G</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium text-white">{article.author.name}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-sm text-zinc-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </div>
                    {(slug === "london-startup-ai-project" || slug === "blockchain-transforming-finance") && (
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {article.comments} yorum
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <Button size="sm" className="bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700">
                      <Share2 className="w-4 h-4 mr-2" />
                      Paylaş
                    </Button>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-8 overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div
                    className="prose prose-lg prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />
                </CardContent>
              </Card>

              {/* Comments Section - Only show for specific articles */}
              {(slug === "london-startup-ai-project" || slug === "blockchain-transforming-finance") && (
                <Card className="mt-8 bg-zinc-900 border-zinc-800">
                  <CardHeader>
                    <CardTitle className="text-white">Yorumlar ({article.comments})</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="bg-zinc-800 p-4 rounded-lg">
                        <h4 className="font-medium mb-3 text-white">Yorum Yap</h4>
                        <textarea
                          className="w-full p-3 bg-zinc-700 border border-zinc-600 rounded-lg resize-none text-white placeholder-zinc-400"
                          rows={4}
                          placeholder="Yorumunuzu yazın..."
                        ></textarea>
                        <Button className="mt-3 bg-cyan-500 hover:bg-cyan-600 text-white">Yorum Gönder</Button>
                      </div>

                      <div className="space-y-4">
                        {article.commentsList?.map((comment) => (
                          <div key={comment.id} className="flex gap-3">
                            <Avatar>
                              <AvatarFallback className="bg-zinc-700 text-white">
                                {comment.author.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="bg-zinc-800 p-3 rounded-lg">
                                <p className="font-medium text-sm text-white">{comment.author}</p>
                                <p className="text-sm text-zinc-300 mt-1">{comment.content}</p>
                              </div>
                              <p className="text-xs text-zinc-500 mt-1">{comment.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </article>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-black py-12 border-t border-zinc-800">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="text-zinc-500 text-sm">&copy; 2025 AGStellar. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import StaticBackground from "@/components/static-background"
import { useParams } from "next/navigation"

export default function ProjectDetailPage() {
  const params = useParams()
  const projectId = params.id as string

  // Project details database
  const projectDetails = {
    "london-ai-assistant": {
      title: "London AI Assistant App",
      subtitle: "Intelligent Virtual Assistant for Business Automation",
      description: `
        <p>The London AI Assistant App represents a significant milestone in our journey to revolutionize business automation through artificial intelligence. Developed for a forward-thinking London-based startup, this project showcases our expertise in creating sophisticated AI solutions that deliver tangible business value.</p>
        
        <p>Our team took ownership of the entire development lifecycle, from initial concept and architecture design to deployment and ongoing optimization. The result is a powerful, intuitive assistant that seamlessly integrates with existing business workflows while providing unprecedented levels of automation and insight.</p>
        
        <h3>Key Features:</h3>
        <ul>
          <li>Natural language processing engine with contextual understanding</li>
          <li>Multi-channel integration (web, mobile, messaging platforms)</li>
          <li>Customizable automation workflows for business processes</li>
          <li>Advanced analytics dashboard with actionable insights</li>
          <li>Secure data handling with enterprise-grade encryption</li>
        </ul>
        
        <p>The implementation of this solution has resulted in a 40% reduction in customer response time and a 25% increase in operational efficiency for our client. The system continues to learn and improve through our proprietary machine learning algorithms, ensuring that it delivers increasing value over time.</p>
        
        <p>This project exemplifies our commitment to creating AI solutions that are not just technologically advanced, but also practical, user-friendly, and aligned with real business objectives.</p>
      `,
      technologies: [
        "Artificial Intelligence",
        "Natural Language Processing",
        "Machine Learning",
        "Cloud Infrastructure",
        "API Integration",
      ],
      outcomes: [
        "40% reduction in customer response time",
        "25% increase in operational efficiency",
        "Seamless integration with existing business systems",
        "Scalable architecture supporting business growth",
      ],
    },
    "metatrader5-trading": {
      title: "MetaTrader5 Trading System",
      subtitle: "Advanced Algorithmic Trading Solution",
      description: `
        <p>The MetaTrader5 Trading System represents our expertise in financial technology and algorithmic trading. This comprehensive solution was developed to empower traders with sophisticated tools for market analysis and automated trading execution.</p>
        
        <p>Our team approached this project with a deep understanding of both financial markets and software engineering principles. We worked closely with experienced traders to ensure that the system not only performed technically but also addressed real trading challenges and opportunities.</p>
        
        <h3>Key Features:</h3>
        <ul>
          <li>Custom technical indicators with proprietary algorithms</li>
          <li>Automated trading strategies with risk management parameters</li>
          <li>Real-time market data analysis and visualization</li>
          <li>Backtesting engine for strategy validation</li>
          <li>Performance analytics and reporting dashboard</li>
        </ul>
        
        <p>The implementation of this trading system has enabled our clients to execute trades with precision and consistency that would be impossible to achieve manually. The system's ability to analyze multiple markets simultaneously and respond to opportunities in milliseconds has created a significant competitive advantage.</p>
        
        <p>This project demonstrates our ability to develop highly specialized financial technology solutions that operate reliably in high-stakes environments where performance and accuracy are paramount.</p>
      `,
      technologies: [
        "MetaTrader5 API",
        "Algorithmic Trading",
        "Financial Analysis",
        "Risk Management",
        "Data Visualization",
      ],
      outcomes: [
        "Consistent execution of trading strategies",
        "Enhanced market analysis capabilities",
        "Reduced emotional trading decisions",
        "Improved risk management through automation",
      ],
    },
    "blockchain-payment": {
      title: "Blockchain Payment Solution",
      subtitle: "Secure and Transparent Transaction Platform",
      description: `
        <p>Our Blockchain Payment Solution represents the cutting edge of financial technology, leveraging distributed ledger technology to create a secure, transparent, and efficient payment processing system. This project demonstrates our expertise in blockchain development and our commitment to innovation in the financial sector.</p>
        
        <p>We approached this project with a clear vision: to create a payment system that combines the security and transparency of blockchain with the user experience of traditional payment methods. The result is a solution that offers the best of both worlds – revolutionary technology with intuitive usability.</p>
        
        <h3>Key Features:</h3>
        <ul>
          <li>Smart contract implementation for automated transactions</li>
          <li>Multi-currency wallet with enhanced security features</li>
          <li>Transaction verification and validation system</li>
          <li>User-friendly interface for non-technical users</li>
          <li>Integration capabilities with existing financial systems</li>
        </ul>
        
        <p>The implementation of this blockchain solution has significantly reduced transaction costs while increasing security and transparency for our clients. The immutable nature of the blockchain provides an unprecedented level of trust in the payment process, while our optimized architecture ensures fast transaction processing.</p>
        
        <p>This project showcases our ability to harness emerging technologies to solve real-world financial challenges, creating solutions that are not just innovative but also practical and valuable for businesses and their customers.</p>
      `,
      technologies: ["Blockchain", "Smart Contracts", "Cryptography", "Distributed Systems", "Financial Technology"],
      outcomes: [
        "Reduced transaction costs by 70%",
        "Enhanced security and fraud prevention",
        "Complete transaction transparency",
        "Streamlined cross-border payments",
      ],
    },
    "restaurant-management": {
      title: "Restaurant Management Platform",
      subtitle: "Comprehensive Solution for Modern Restaurants",
      description: `
        <p>The Restaurant Management Platform is a testament to our ability to create comprehensive digital solutions for specific industries. This web-based system was designed to address the unique challenges faced by modern restaurants, from order management to customer relationships.</p>
        
        <p>Our team immersed themselves in the restaurant industry, working directly with restaurant owners and staff to understand their workflows, pain points, and opportunities for improvement. This deep industry knowledge informed every aspect of the platform's design and functionality.</p>
        
        <h3>Key Features:</h3>
        <ul>
          <li>Intuitive online ordering system with real-time kitchen updates</li>
          <li>Reservation management with automated confirmation</li>
          <li>Inventory tracking and supplier management</li>
          <li>Staff scheduling and performance analytics</li>
          <li>Customer relationship management with loyalty program</li>
        </ul>
        
        <p>The implementation of this platform has transformed operations for our restaurant clients, reducing administrative overhead by 35% and increasing customer satisfaction scores. The system's ability to provide actionable insights through data analytics has also enabled more informed business decisions.</p>
        
        <p>This project demonstrates our commitment to creating technology solutions that are deeply aligned with the specific needs of an industry, delivering tangible business value through thoughtful design and robust implementation.</p>
      `,
      technologies: ["Web Development", "Database Management", "Real-time Systems", "Payment Processing", "Analytics"],
      outcomes: [
        "35% reduction in administrative overhead",
        "Improved customer satisfaction and retention",
        "Enhanced inventory management and reduced waste",
        "Data-driven business insights for growth",
      ],
    },
    "tradingview-profit": {
      title: "TradingView Profit Strategy",
      subtitle: "Advanced Technical Analysis for Traders",
      description: `
        <p>The TradingView Profit Strategy represents our expertise in financial markets and technical analysis. This custom script was developed to help traders identify high-probability trading opportunities through sophisticated pattern recognition and indicator combinations.</p>
        
        <p>Our approach to this project was both scientific and practical. We analyzed thousands of historical price patterns across multiple markets to identify reliable signals, then translated these insights into a powerful yet user-friendly TradingView script that traders of all experience levels could utilize.</p>
        
        <h3>Key Features:</h3>
        <ul>
          <li>Multi-timeframe analysis for confirmation of signals</li>
          <li>Proprietary indicator combinations for enhanced accuracy</li>
          <li>Visual alerts for entry and exit points</li>
          <li>Risk management parameters and position sizing recommendations</li>
          <li>Performance statistics and optimization tools</li>
        </ul>
        
        <p>The implementation of this strategy has provided traders with a significant edge in the markets, with back-testing showing a win rate of 68% across various market conditions. The clear visual signals and actionable alerts have made complex technical analysis accessible even to those without extensive trading experience.</p>
        
        <p>This project showcases our ability to combine deep domain knowledge with technical expertise to create tools that deliver measurable value in specialized fields like financial trading.</p>
      `,
      technologies: [
        "TradingView Pine Script",
        "Technical Analysis",
        "Pattern Recognition",
        "Algorithmic Trading",
        "Financial Markets",
      ],
      outcomes: [
        "68% win rate in back-testing across various markets",
        "Clear visual signals for entry and exit points",
        "Reduced emotional decision-making in trading",
        "Accessible technical analysis for traders of all levels",
      ],
    },
    "ecommerce-analytics": {
      title: "E-commerce Analytics Dashboard",
      subtitle: "Data-Driven Insights for Online Retailers",
      description: `
        <p>The E-commerce Analytics Dashboard exemplifies our expertise in data visualization and business intelligence. This interactive platform transforms complex e-commerce data into clear, actionable insights that drive business growth and customer satisfaction.</p>
        
        <p>We approached this project with a deep understanding of both data science and e-commerce business models. Our team worked closely with online retailers to identify the key metrics and insights that would have the greatest impact on their decision-making and business performance.</p>
        
        <h3>Key Features:</h3>
        <ul>
          <li>Real-time sales and conversion tracking</li>
          <li>Customer behavior analysis and segmentation</li>
          <li>Inventory performance and optimization recommendations</li>
          <li>Marketing campaign effectiveness measurement</li>
          <li>Predictive analytics for trend forecasting</li>
        </ul>
        
        <p>The implementation of this analytics dashboard has empowered our e-commerce clients with the insights needed to make data-driven decisions. Businesses using this platform have reported an average 22% increase in conversion rates and a 15% improvement in inventory turnover.</p>
        
        <p>This project demonstrates our ability to harness the power of data to create practical, valuable tools that directly impact business performance and growth in the competitive e-commerce landscape.</p>
      `,
      technologies: [
        "Data Visualization",
        "Business Intelligence",
        "Predictive Analytics",
        "E-commerce Platforms",
        "User Experience Design",
      ],
      outcomes: [
        "22% average increase in conversion rates",
        "15% improvement in inventory turnover",
        "Enhanced customer segmentation and targeting",
        "Data-driven decision making across business functions",
      ],
    },
    "segu-corporate-website": {
      title: "Corporate Website for Segu Teknoloji",
      subtitle: "Modern Digital Presence for Telecommunications Leader",
      description: `
        <p>We designed and developed a clean, modern corporate website for Segu Teknoloji, a leading company operating in the telecommunications and infrastructure sector. This project represents our commitment to creating digital solutions that perfectly align with our clients' industry expertise and professional standards.</p>
        
        <p>The primary goal was to create a fast, responsive, and professional digital presence that reflects Segu Teknoloji's technical expertise and reliability in the telecommunications field. Our team focused on delivering a solution that not only meets current needs but also provides a foundation for future growth and expansion.</p>
        
        <h3>Key Features:</h3>
        <ul>
          <li>Clean, modern design reflecting telecommunications industry standards</li>
          <li>Fully responsive layout optimized for all devices and screen sizes</li>
          <li>Fast loading times with optimized performance metrics</li>
          <li>Scalable architecture designed for future growth and expansion</li>
          <li>Professional content management system for easy updates</li>
          <li>SEO-optimized structure for enhanced online visibility</li>
        </ul>
        
        <p>The website was built with scalable architecture, ensuring flexibility for future growth while maintaining the high performance standards expected in the telecommunications industry. Every aspect of the design and development process was carefully planned to create a digital presence that truly represents Segu Teknoloji's position as a trusted leader in their field.</p>
        
        <p><em>Delivered by Agstellar Tech – Designed to scale.</em></p>
        
        <p>This project showcases our ability to understand industry-specific requirements and translate them into powerful digital solutions that drive business growth and enhance professional credibility.</p>
      `,
      technologies: [
        "Modern Web Development",
        "Responsive Design",
        "Content Management System",
        "SEO Optimization",
        "Performance Optimization",
        "Scalable Architecture",
      ],
      outcomes: [
        "Professional digital presence reflecting industry expertise",
        "Fast, responsive website optimized for all devices",
        "Scalable architecture supporting future business growth",
        "Enhanced online visibility and professional credibility",
        "Easy content management for ongoing updates",
      ],
    },
  }

  const project = projectDetails[projectId as keyof typeof projectDetails]

  if (!project) {
    return (
      <div className="min-h-screen text-white bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="mb-8">The project you're looking for doesn't exist or has been moved.</p>
          <Button asChild>
            <Link href="/projects">Back to Projects</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen text-white bg-black" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Static Background */}
      <StaticBackground />

      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Header */}
        <header className="bg-black sticky top-0 z-50 border-b border-zinc-800">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <Link href="/" className="text-3xl font-black tracking-tighter">
                  <span className="text-white">AG</span>
                  <span className="text-white">STELLAR</span>
                </Link>
              </div>

              {/* Navigation */}
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
                <Link href="/projects" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                  Projects
                </Link>
                <Link href="/about" className="text-white hover:text-zinc-300 text-sm font-medium">
                  About
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Project Detail Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Button variant="ghost" className="mb-8 text-white hover:text-zinc-300" asChild>
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
              </Link>
            </Button>

            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-3">{project.title}</h1>
              <p className="text-xl text-cyan-400 mb-8">{project.subtitle}</p>

              <div
                className="prose prose-lg prose-invert max-w-none mb-12"
                dangerouslySetInnerHTML={{ __html: project.description }}
              />

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 mb-12">
                <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-zinc-800 text-zinc-200 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">Project Outcomes</h3>
                <ul className="space-y-3">
                  {project.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 text-center">
                <h3 className="text-2xl font-bold mb-4">Interested in a similar solution?</h3>
                <p className="text-zinc-300 mb-6">
                  Let's discuss how we can create a custom solution for your business needs.
                </p>
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black py-12 border-t border-zinc-800">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-bold mb-4">AGStellar</h3>
                <p className="text-zinc-400 mb-4">
                  Creating innovative software solutions that transform ideas into reality.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-4 text-zinc-300">Categories</h4>
                <ul className="space-y-2 text-zinc-400">
                  <li>
                    <Link href="#" className="hover:text-white">
                      Technology
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      AI & Machine Learning
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Web Development
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-4 text-zinc-300">Company</h4>
                <ul className="space-y-2 text-zinc-400">
                  <li>
                    <Link href="/about" className="hover:text-white">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects" className="hover:text-white">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-white">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-4 text-zinc-300">Legal</h4>
                <ul className="space-y-2 text-zinc-400">
                  <li>
                    <Link href="#" className="hover:text-white">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-zinc-500 text-sm">&copy; 2025 AGStellar. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

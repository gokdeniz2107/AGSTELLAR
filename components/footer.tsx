import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-background py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="text-2xl font-black tracking-tighter mb-4 inline-block">
              <span className="text-foreground">AG</span>
              <span className="text-primary">STELLAR</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Professional trading solutions powered by advanced AI and cutting-edge technology.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground hover:bg-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground hover:bg-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground hover:bg-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">Trading</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/trading" className="hover:text-primary transition-colors">Algorithmic Trading</Link></li>
              <li><Link href="/trading" className="hover:text-primary transition-colors">Market Analysis</Link></li>
              <li><Link href="/trading" className="hover:text-primary transition-colors">Risk Management</Link></li>
              <li><Link href="/trading" className="hover:text-primary transition-colors">Portfolio Tools</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="/tech" className="hover:text-primary transition-colors">Tech</Link></li>
              <li><Link href="/ai" className="hover:text-primary transition-colors">AI</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">&copy; 2025 AGStellar. All rights reserved.</p>
          <div className="flex items-center mt-4 md:mt-0">
            <Button variant="link" className="text-muted-foreground text-sm hover:text-primary">
              Privacy
            </Button>
            <span className="text-border mx-2">|</span>
            <Button variant="link" className="text-muted-foreground text-sm hover:text-primary">
              Terms
            </Button>
            <span className="text-border mx-2">|</span>
            <Button variant="link" className="text-muted-foreground text-sm hover:text-primary">
              Sitemap
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

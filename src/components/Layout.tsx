import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-sm">
        <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <a
            href="#"
            className="text-lg font-semibold tracking-tight text-foreground"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            Meg Kowalew
          </a>
          <div className="flex items-center gap-3">
            <a
              href="#about"
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </a>
            <a
              href="#contact"
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </a>
            <Button size="sm" className="rounded-full" asChild>
              <a href="/MegKowalew_CV.pdf" download>
                <Download className="mr-1.5 h-3.5 w-3.5" />
                Download CV
              </a>
            </Button>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6">
          <p className="text-sm text-muted-foreground">
            © 2026 Meg Kowalew
          </p>
          <div className="flex gap-4">
            <a
              href="/MegKowalew_CV.pdf"
              download
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              CV (PDF)
            </a>
            <span className="text-sm text-muted-foreground">·</span>
            <a
              href="#contact"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

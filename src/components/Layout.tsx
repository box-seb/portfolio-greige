import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-sm">
        <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <NavLink
            to="/"
            className="text-lg font-semibold tracking-tight text-foreground"
          >
            Meg Kowalew
          </NavLink>
          <div className="flex items-center gap-3">
            <NavLink
              to="/"
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeClassName="bg-secondary text-foreground"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeClassName="bg-secondary text-foreground"
            >
              Contact
            </NavLink>
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
        <Outlet />
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
            <NavLink
              to="/contact"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

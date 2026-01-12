import { Menu } from "lucide-react";
import logo from "@/static/icons/logo-transparent.png";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-2">
            <div className="size-12 flex items-center justify-center rounded-xl bg-primary/10 p-1.5">
              <img src={logo} alt="Redwood Collectables logo" className="size-full object-contain" />
            </div>
            <span className="font-semibold text-xl text-primary">
              Redwood Collectables
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#categories" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              What We Offer
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden md:block px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 hover:shadow-lg transition-all">
            Visit Our Store
          </a>
          <button className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors">
            <Menu className="size-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

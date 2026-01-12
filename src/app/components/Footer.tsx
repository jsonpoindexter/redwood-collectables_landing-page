import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary/5 to-secondary/5 border-t-2 border-primary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="size-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-primary flex items-center justify-center shadow-lg">
                <span className="text-2xl">⚡</span>
              </div>
              <span className="font-semibold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Redwood Collectables
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your ultimate destination for Pokémon cards and collectibles. Catch 'em all with us! ⭐
            </p>
          </div>
          
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#categories" className="hover:text-primary transition-colors">What We Offer</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4">Stay Connected! 🎮</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Follow us for updates on new arrivals, tournaments, and special events!
            </p>
            <div className="flex gap-3">
              <a href="#" className="size-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 flex items-center justify-center hover:scale-110 transition-transform">
                <span className="text-primary">📘</span>
              </a>
              <a href="#" className="size-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 flex items-center justify-center hover:scale-110 transition-transform">
                <span className="text-primary">🐦</span>
              </a>
              <a href="#" className="size-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 flex items-center justify-center hover:scale-110 transition-transform">
                <span className="text-primary">📷</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t-2 border-primary/20 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2026 Redwood Collectables. All rights reserved. Made with ❤️ for collectors!</p>
        </div>
      </div>
    </footer>
  );
}
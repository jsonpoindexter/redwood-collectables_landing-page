import { MapPin, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/20 overflow-hidden">
      <div className="container mx-auto px-4 py-20 md:py-32 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl md:text-6xl mb-6">
              Gotta Collect 'Em All at{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Redwood Collectables!
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Your ultimate destination for Pokémon cards,
              trading card games, and all things collectible.
              Join our community of passionate trainers and
              collectors!
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="size-5 text-primary" />
                </div>
                <span>123 Collector's Lane, Downtown</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="size-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Clock className="size-5 text-secondary" />
                </div>
                <span>
                  Mon-Sat: 10AM - 7PM | Sun: 12PM - 5PM
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl hover:shadow-xl transition-all text-center transform hover:scale-105"
              >
                Get Directions
              </a>
              <a
                href="#about"
                className="px-8 py-3 border-2 border-primary rounded-xl hover:bg-primary/5 transition-colors text-center"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform hover:rotate-2 transition-transform">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1664997296099-5a0b63ab0196?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlbW9uJTIwY2FyZHMlMjBjb2xsZWN0aWJsZXN8ZW58MXx8fHwxNzY4MTU5MDAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Pokemon cards collection"
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
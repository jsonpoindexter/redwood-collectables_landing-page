import { Sparkles, Zap, Trophy, Gamepad2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const categories = [
  {
    id: 1,
    name: "Pokémon Cards",
    description: "From Base Set to newest releases!",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1708856034064-5dfabd9bfe95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaW5nJTIwY2FyZHMlMjBjb2xsZWN0aW9ufGVufDF8fHx8MTc2ODE1OTAwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    name: "Sports Cards",
    description: "Baseball, Basketball & Football",
    icon: Trophy,
    image: "https://images.unsplash.com/photo-1609200660087-e23d23d7e958?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXJkcyUyMGJhc2ViYWxsfGVufDF8fHx8MTc2ODE1OTAwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    name: "Comic Books",
    description: "Marvel, DC & indie titles",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1759863738666-7584248cdf7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21pYyUyMGJvb2tzJTIwY29sbGVjdGlvbnxlbnwxfHx8fDE3NjgxNTkwMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 4,
    name: "Collectible Figures",
    description: "Limited edition & exclusives",
    icon: Gamepad2,
    image: "https://images.unsplash.com/photo-1700909416178-40b292788200?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBmaWd1cmVzJTIwY29sbGVjdGlibGVzfGVufDF8fHx8MTc2ODE1OTAwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function Categories() {
  return (
    <section id="categories" className="py-20 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl mb-4">
            What We Offer <span className="inline-block animate-bounce">🎯</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From rare holographics to vintage classics - we've got something for every collector!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-2xl bg-card border-2 border-primary/20 hover:border-primary/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={category.image}
                  alt={category.name}
                  className="size-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="size-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-3 shadow-lg">
                  <category.icon className="size-6 text-white" />
                </div>
                <h3 className="text-white mb-1">{category.name}</h3>
                <p className="text-sm text-white/80">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
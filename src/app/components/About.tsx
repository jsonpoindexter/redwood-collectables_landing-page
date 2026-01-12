import { Shield, Heart, Users, Sparkles } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Amazing Selection",
    description: "From common cards to ultra-rare holographics - we've got it all!"
  },
  {
    icon: Shield,
    title: "Authentic Cards",
    description: "Every card is verified to ensure you get the real deal, no fakes!"
  },
  {
    icon: Heart,
    title: "We Love Collecting",
    description: "We're collectors too! We know the excitement of finding that special card."
  },
  {
    icon: Users,
    title: "Fun Community",
    description: "Join our events, tournaments, and trading sessions with fellow collectors!"
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl mb-4">
            About Redwood Collectables <span className="inline-block">🌟</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Where collectors become trainers and every visit is an adventure!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="size-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="size-8 text-primary" />
              </div>
              <h3 className="mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/20 rounded-3xl p-8 md:p-12 border-2 border-primary/20">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl mb-4 text-center">Our Journey 🚀</h3>
            <p className="text-muted-foreground mb-4">
              Started by a group of Pokémon enthusiasts in 2020, Redwood Collectables was born from a simple dream: create the ultimate hangout spot for collectors and trainers alike!
            </p>
            <p className="text-muted-foreground">
              Today, we're proud to be your go-to destination for all things collectible. Whether you're hunting for that elusive Charizard, building your first deck, or just want to geek out with fellow collectors - you're home! 🏠
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
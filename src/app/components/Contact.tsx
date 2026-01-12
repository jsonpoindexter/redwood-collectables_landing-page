import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl mb-4">
            Come Visit Us! <span className="inline-block">📍</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stop by for a chat, browse our collection, or join our next tournament!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-start gap-4 group">
              <div className="size-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <MapPin className="size-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-1">Our Location</h3>
                <p className="text-muted-foreground">
                  123 Collector's Lane<br />
                  Downtown District<br />
                  City, State 12345
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 group">
              <div className="size-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Clock className="size-6 text-secondary" />
              </div>
              <div>
                <h3 className="mb-1">Store Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Saturday: 10:00 AM - 7:00 PM<br />
                  Sunday: 12:00 PM - 5:00 PM
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 group">
              <div className="size-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="size-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-1">Phone</h3>
                <p className="text-muted-foreground">(555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 group">
              <div className="size-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="size-6 text-secondary" />
              </div>
              <div>
                <h3 className="mb-1">Email</h3>
                <p className="text-muted-foreground">hello@redwoodcollectables.com</p>
              </div>
            </div>
          </div>
          
          <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 shadow-xl">
            <h3 className="mb-6">Send us a Message! ✉️</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border-2 border-primary/20 focus:border-primary bg-background transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border-2 border-primary/20 focus:border-primary bg-background transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border-2 border-primary/20 focus:border-primary bg-background resize-none transition-colors"
                  placeholder="What can we help you with?"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl hover:shadow-xl transition-all transform hover:scale-105"
              >
                Send Message 🚀
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
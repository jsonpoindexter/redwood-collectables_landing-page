import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Categories } from "./components/Categories";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Header />
      <main className="flex-1">
        <Hero />
        <Categories />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
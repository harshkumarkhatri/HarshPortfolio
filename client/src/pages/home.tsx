import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Community } from "@/components/sections/Community";
import { Skills } from "@/components/sections/Skills";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-primary/30 relative z-10">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Community />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

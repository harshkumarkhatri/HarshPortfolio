import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import { BootSequence } from "@/components/ui/BootSequence";
import { NeuralFeed } from "@/components/ui/NeuralFeed";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if typing in an input or textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        (e.target as HTMLElement).isContentEditable
      ) {
        return;
      }

      if (e.code === "Space") {
        e.preventDefault(); // Prevent default scrolling behavior
        document.body.classList.toggle("xray-mode");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AnimatePresence>
        {!booted && <BootSequence onComplete={() => setBooted(true)} />}
      </AnimatePresence>
      
      {booted && (
        <>
          <ParticleBackground />
          <NeuralFeed />
          <Toaster />
          <Router />
        </>
      )}
    </QueryClientProvider>
  );
}

export default App;

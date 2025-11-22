import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [steps, setSteps] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  const bootSteps = [
    "Initializing kernel...",
    "Loading modules...",
    "Establishing secure connection...",
    "Verifying identity...",
    "System ready."
  ];

  useEffect(() => {
    let currentStep = 0;
    
    const stepInterval = setInterval(() => {
      if (currentStep < bootSteps.length) {
        setSteps(prev => [...prev, bootSteps[currentStep]]);
        currentStep++;
      } else {
        clearInterval(stepInterval);
        setTimeout(onComplete, 800);
      }
    }, 400);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => {
      clearInterval(stepInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center font-mono text-green-500 p-4"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-md space-y-4">
        <div className="h-48 overflow-hidden bg-black/50 border border-green-500/30 p-4 rounded text-sm font-mono">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-1"
            >
              <span className="text-green-500/50">[{new Date().toLocaleTimeString()}]</span> {step}
            </motion.div>
          ))}
          <motion.div 
            animate={{ opacity: [0, 1, 0] }} 
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 h-4 bg-green-500 align-middle ml-1"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs uppercase tracking-widest opacity-70">
            <span>System Loading</span>
            <span>{progress}%</span>
          </div>
          <div className="h-1 bg-green-900/30 w-full overflow-hidden">
            <motion.div 
              className="h-full bg-green-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

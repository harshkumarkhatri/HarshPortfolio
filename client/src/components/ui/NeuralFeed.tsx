import { motion } from "framer-motion";
import { Activity } from "lucide-react";

export function NeuralFeed() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2 }}
      className="fixed bottom-4 left-4 z-40 hidden md:flex items-center gap-3 bg-black/80 backdrop-blur border border-green-500/20 px-3 py-2 rounded-full text-xs font-mono text-green-500/80 pointer-events-none"
    >
      <div className="relative">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />
      </div>
      <div className="flex items-center gap-2">
        <Activity size={12} />
        <TypewriterFeed />
      </div>
    </motion.div>
  );
}

function TypewriterFeed() {
  return (
    <motion.span
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      System Online. Monitoring traffic...
    </motion.span>
  );
}

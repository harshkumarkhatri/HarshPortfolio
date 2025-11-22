import { motion } from "framer-motion";

export function AudioWaveform() {
  const bars = [1, 2, 3, 4, 5];
  
  return (
    <div className="flex items-center gap-1 h-6">
      {bars.map((bar) => (
        <motion.div
          key={bar}
          className="w-1 bg-green-500 rounded-full"
          animate={{
            height: ["20%", "100%", "20%"],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: bar * 0.1,
            repeatType: "mirror"
          }}
          style={{
            height: "20%",
            opacity: 0.8
          }}
        />
      ))}
    </div>
  );
}

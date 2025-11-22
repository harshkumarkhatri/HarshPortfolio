import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface ScrambleTextProps {
  text: string;
  className?: string;
  speed?: number;
  scrambleSpeed?: number;
  revealDelay?: number;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

export function ScrambleText({ 
  text, 
  className = "", 
  speed = 50, 
  scrambleSpeed = 30,
  revealDelay = 0
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [isScrambling, setIsScrambling] = useState(true);
  const iterationRef = useRef(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    // Reset on text change
    iterationRef.current = 0;
    hasStartedRef.current = false;
    setIsScrambling(true);
    setDisplayText("");

    const startScramble = () => {
      if (hasStartedRef.current) return;
      hasStartedRef.current = true;

      timerRef.current = setInterval(() => {
        setDisplayText(prev => {
          const currentIteration = iterationRef.current;
          
          if (currentIteration >= text.length) {
             if (timerRef.current) clearInterval(timerRef.current);
             setIsScrambling(false);
             return text;
          }

          return text
            .split("")
            .map((letter, index) => {
              if (index < currentIteration) {
                return text[index];
              }
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("");
        });

        iterationRef.current += 1 / 3; 
      }, scrambleSpeed);
    };

    const initialTimer = setTimeout(() => {
      startScramble();
    }, revealDelay);

    return () => {
      clearTimeout(initialTimer);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [text, scrambleSpeed, revealDelay]);

  return (
    <motion.span 
      className={`inline-block ${className}`}
    >
      {displayText}
    </motion.span>
  );
}

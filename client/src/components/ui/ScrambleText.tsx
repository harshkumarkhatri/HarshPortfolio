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

  useEffect(() => {
    const startScramble = () => {
      let currentText = "";
      const length = text.length;
      
      timerRef.current = setInterval(() => {
        currentText = text
          .split("")
          .map((letter, index) => {
            if (index < iterationRef.current) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");

        setDisplayText(currentText);

        if (iterationRef.current >= length) {
          if (timerRef.current) clearInterval(timerRef.current);
          setIsScrambling(false);
        }

        iterationRef.current += 1 / 3; // Slower reveal
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
      whileHover={{ scale: 1.02 }}
    >
      {displayText}
    </motion.span>
  );
}

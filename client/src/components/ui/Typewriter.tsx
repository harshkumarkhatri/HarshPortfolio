import { useState, useEffect } from "react";

interface TypewriterProps {
  text: string | string[];
  speed?: number;
  deleteSpeed?: number;
  delay?: number;
  loop?: boolean;
  className?: string;
  cursorClassName?: string;
}

export function Typewriter({
  text,
  speed = 100,
  deleteSpeed = 50,
  delay = 1500,
  loop = true,
  className = "",
  cursorClassName = "bg-primary"
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textArrayIndex, setTextArrayIndex] = useState(0);

  useEffect(() => {
    const textArray = Array.isArray(text) ? text : [text];
    const currentString = textArray[textArrayIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < currentString.length) {
          setDisplayText((prev) => prev + currentString[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        } else {
          if (loop) {
            setTimeout(() => setIsDeleting(true), delay);
          }
        }
      } else {
        if (currentIndex > 0) {
          setDisplayText((prev) => prev.slice(0, -1));
          setCurrentIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setTextArrayIndex((prev) => (prev + 1) % textArray.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, text, speed, deleteSpeed, delay, loop, textArrayIndex]);

  return (
    <span className={className}>
      {displayText}
      <span className={`inline-block w-[2px] h-[1em] align-middle ml-1 animate-pulse ${cursorClassName}`} />
    </span>
  );
}

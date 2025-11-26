import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

export function TerminalContact() {
  const [history, setHistory] = useState<string[]>([
    "Welcome to HK-OS v2.0.4",
    "Type 'help' for available commands.",
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const initialHistoryLength = useRef(2); // Track initial history length
  const hasMounted = useRef(false);

  useEffect(() => {
    // Only scroll if the component has mounted and history has actually changed due to user interaction
    if (hasMounted.current && history.length > initialHistoryLength.current) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    hasMounted.current = true;
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, `> ${input}`];

    switch (cmd) {
      case "help":
        newHistory.push(
          "Available commands:",
          "  contact   - Show contact information",
          "  socials   - List social media links",
          "  clear     - Clear terminal",
          "  whoami    - Display user info"
        );
        break;
      case "contact":
        newHistory.push(
          "E-mail: contact@harshkumarkhatri.com",
          "Location: Kota, Rajasthan, India",
          "Status: Open to opportunities"
        );
        break;
      case "socials":
        newHistory.push("--- Social Links ---");
        personalInfo.socials.forEach(s => {
          newHistory.push(`${s.name}: ${s.url}`);
        });
        break;
      case "clear":
        setHistory(["Terminal cleared."]);
        setInput("");
        return;
      case "whoami":
        newHistory.push("Guest User @ Portfolio");
        break;
      case "":
        break;
      default:
        newHistory.push(`Command not found: ${cmd}. Type 'help' for list.`);
    }

    setHistory(newHistory);
    setInput("");
  };

  return (
    <div className="w-full max-w-2xl mx-auto glass rounded-lg overflow-hidden border border-white/10 shadow-2xl font-mono text-sm my-12">
      <div className="bg-white/5 p-2 flex gap-2 items-center border-b border-white/5">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
        <span className="ml-2 text-xs text-muted-foreground opacity-50">bash -- user@hk-portfolio</span>
      </div>
      
      <div className="p-4 h-64 overflow-y-auto bg-black/80 text-green-400 space-y-1 custom-scrollbar">
        {history.map((line, i) => (
          <div key={i} className="break-all">{line}</div>
        ))}
        <form onSubmit={handleCommand} className="flex gap-2">
          <span className="text-blue-400">user@hk-portfolio:~$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent border-none outline-none flex-1 text-green-400 focus:ring-0 p-0"
          />
        </form>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { ArrowDown, ExternalLink } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="container px-4 mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block"
          >
            Portfolio
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight mb-6 leading-[1.1]">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 inline-block">
              {personalInfo.name.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.05, ease: "backOut" }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-lg font-light leading-relaxed"
          >
            {personalInfo.role}. <br />
            <span className="text-foreground/80">{personalInfo.tagline}</span>
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium transition-colors flex items-center gap-2"
            >
              Contact Me
            </motion.a>
            <motion.a 
              href={personalInfo.socials.find(s => s.name === "LinkedIn")?.url}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05, backgroundColor: "hsl(217 32% 25%)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary text-secondary-foreground px-8 py-3 rounded-full font-medium transition-colors flex items-center gap-2"
            >
              LinkedIn <ExternalLink size={16} />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-3xl opacity-20 blur-2xl transform rotate-6" />
            <div className="glass rounded-3xl w-full h-full flex items-center justify-center border border-white/10 relative overflow-hidden group">
              {/* Abstract representation of code/integration */}
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
              
              <div className="relative z-10 text-center p-8">
                <div className="w-24 h-24 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-4xl">
                  ⚡
                </div>
                <h3 className="text-2xl font-bold mb-2">Integrations Specialist</h3>
                <p className="text-muted-foreground">Connecting systems, building communities.</p>
              </div>

              {/* Floating elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-10 right-10 bg-card/80 backdrop-blur border border-white/5 p-3 rounded-xl shadow-xl"
              >
                <span className="text-blue-400 font-bold">Oracle SOA</span>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 left-10 bg-card/80 backdrop-blur border border-white/5 p-3 rounded-xl shadow-xl"
              >
                <span className="text-purple-400 font-bold">Flutter</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-muted-foreground"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
}

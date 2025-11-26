import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { ArrowDown, ExternalLink } from "lucide-react";
import { useEffect } from "react";
import { ScrambleText } from "@/components/ui/ScrambleText";
import { Typewriter } from "@/components/ui/Typewriter";
import { AudioWaveform } from "@/components/ui/AudioWaveform";

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  // Mouse parallax logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const xSpring = useSpring(mouseX, springConfig);
  const ySpring = useSpring(mouseY, springConfig);

  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = e.clientX / innerWidth - 0.5;
      const y = e.clientY / innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 perspective-1000">
      {/* Parallax Background elements */}
      <motion.div style={{ y: y1, x: useTransform(xSpring, [-0.5, 0.5], [-50, 50]) }} className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[100px]" />
      </motion.div>
      
      <motion.div style={{ y: y2, x: useTransform(xSpring, [-0.5, 0.5], [50, -50]) }} className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
         <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[100px]" />
      </motion.div>

      <div className="container px-4 mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ zIndex: 10 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-primary font-semibold tracking-wider uppercase text-sm block"
            >
              Portfolio
            </motion.span>
            <AudioWaveform />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight mb-6 leading-[1.1]">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 inline-block">
              <ScrambleText text={personalInfo.name} />
            </span>
          </h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-lg font-light leading-relaxed min-h-[80px]"
          >
             <Typewriter 
               text={[
                 `${personalInfo.role}.`,
                 "Building Scalable Systems.",
                 "Bridging Tech & People."
               ]}
               loop={true}
               speed={80}
               delay={2000}
               cursorClassName="bg-green-400"
             />
             <br />
            <span className="text-foreground/80 text-base mt-2 block">{personalInfo.tagline}</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a 
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3Z2WH2U_5qDPsx3oYal6Fhz9cVH2p-6ShGw1uQgXtxSAIovXyTPNU62dIV4y28pPbsBsWcl2V5"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium transition-colors flex items-center gap-2"
            >
              Book Appointment
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
          className="relative hidden md:block perspective-1000"
          style={{ perspective: "1000px" }}
        >
          <motion.div 
            className="relative w-full aspect-square max-w-md mx-auto"
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-3xl opacity-20 blur-2xl transform rotate-6 translate-z-[-50px]" />
            <div className="glass rounded-3xl w-full h-full flex items-center justify-center border border-border/50 relative overflow-hidden group shadow-2xl">
              {/* Abstract representation of code/integration */}
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
              
              <div className="relative z-10 text-center p-8 transform translate-z-[20px]">
                <div className="w-24 h-24 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-4xl shadow-inner">
                  ⚡
                </div>
                <h3 className="text-2xl font-bold mb-2">Full Stack Engineer</h3>
                <p className="text-muted-foreground">Flutter • .NET • Cloud • AI</p>
                
                <div className="mt-6 font-mono text-xs text-left bg-secondary/80 p-3 rounded border border-border/50 text-green-500 dark:text-green-400">
                   <Typewriter 
                    text={["> Initializing Flutter...", "> Deploying .NET Core...", "> System: SCALABLE"]} 
                     loop={false} 
                     speed={50}
                   />
                </div>
              </div>

              {/* Floating elements with stronger parallax */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                style={{ x: useTransform(xSpring, [-0.5, 0.5], [20, -20]), y: useTransform(ySpring, [-0.5, 0.5], [20, -20]) }}
                className="absolute top-10 right-10 bg-card/80 backdrop-blur border border-border/50 p-3 rounded-xl shadow-xl transform translate-z-[60px]"
              >
                <span className="text-blue-400 font-bold">Flutter Expert</span>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                style={{ x: useTransform(xSpring, [-0.5, 0.5], [-30, 30]), y: useTransform(ySpring, [-0.5, 0.5], [-30, 30]) }}
                className="absolute bottom-20 left-10 bg-card/80 backdrop-blur border border-border/50 p-3 rounded-xl shadow-xl transform translate-z-[40px]"
              >
                <span className="text-purple-400 font-bold">Backend</span>
              </motion.div>
            </div>
          </motion.div>
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

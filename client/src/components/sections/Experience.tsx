import { motion, AnimatePresence } from "framer-motion";
import { workExperiences } from "@/lib/data";
import { Calendar, Building2, MapPin, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

function ExperienceCard({ exp, index }: { exp: typeof workExperiences[0], index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onClick={() => setIsExpanded(!isExpanded)}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className="relative group cursor-pointer"
    >
      {/* Timeline Connector */}
      <div className="absolute left-[19px] top-[60px] bottom-[-32px] w-[2px] bg-border/50 group-hover:bg-green-500/30 transition-colors duration-500 last:hidden" />

      <div className="flex gap-6 md:gap-8">
        {/* Timeline Dot */}
        <div className="relative mt-1 flex-shrink-0">
          <motion.div 
            initial={{ borderColor: "rgba(255,255,255,0.1)", backgroundColor: "transparent" }}
            whileInView={{ borderColor: "#4ade80", backgroundColor: "rgba(74, 222, 128, 0.1)" }}
            viewport={{ margin: "-100px 0px -100px 0px" }}
            animate={{ 
              scale: isExpanded ? 1.2 : 1,
              borderColor: isExpanded ? "#4ade80" : undefined,
              backgroundColor: isExpanded ? "rgba(74, 222, 128, 0.1)" : undefined
            }}
            className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors duration-300 bg-background z-10 relative"
          >
            <Building2 size={18} className={cn("transition-colors duration-300", isExpanded ? "text-green-400" : "text-muted-foreground")} />
          </motion.div>
        </div>

        {/* Content Card */}
        <div className="flex-1 pb-8">
          <motion.div 
            layout
            className={cn(
              "glass-card rounded-xl p-5 md:p-6 transition-all duration-300",
              isExpanded ? "bg-accent/50 border-green-500/30 shadow-[0_0_30px_-10px_rgba(74,222,128,0.1)]" : "hover:bg-accent/30"
            )}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4 mb-2">
              <div>
                <h3 className={cn("text-xl font-bold transition-colors duration-300", isExpanded ? "text-green-400" : "text-foreground")}>
                  {exp.role}
                </h3>
                <div className="text-lg font-medium text-muted-foreground">
                  {exp.company}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 text-xs font-mono text-muted-foreground/70 mt-1 md:mt-0 md:text-right">
                <div className="flex items-center gap-1.5 bg-secondary/50 px-2 py-1 rounded">
                  <Calendar size={12} />
                  {exp.period}
                </div>
                {exp.location && (
                  <div className="flex items-center gap-1.5 bg-secondary/50 px-2 py-1 rounded">
                    <MapPin size={12} />
                    {exp.location}
                  </div>
                )}
              </div>
            </div>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 mt-4 border-t border-border/50">
                    <ul className="space-y-2">
                      {/* @ts-ignore - points exists in data */}
                      {exp.points?.map((point: string, i: number) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-start gap-2 text-sm text-muted-foreground/90 leading-relaxed"
                        >
                          <span className="mt-1.5 min-w-[5px] h-[5px] rounded-full bg-green-500/60 flex-shrink-0" />
                          <span>{point}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="mt-4 pt-2 flex justify-end">
                      <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-secondary/50 text-muted-foreground/50">
                        {exp.type === 'work' ? 'Experience' : 'Community'}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {!isExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-2 text-xs text-muted-foreground/40 flex items-center gap-1"
              >
                <ChevronDown size={12} />
                <span>Tap to expand</span>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-background/50">
      <div className="container px-4 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 reveal-on-scroll"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey through technology and engineering.
          </p>
        </motion.div>

        <div className="relative">
          {workExperiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

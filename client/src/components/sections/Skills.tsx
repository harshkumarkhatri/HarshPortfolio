import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-black">
      {/* Background subtle glow */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] -z-10" />

      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 reveal-on-scroll"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Edge</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 group/grid">
          {skills.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6, ease: "easeOut" }}
              className="reveal-on-scroll h-full"
            >
              <SpotlightCard spotlightColor="rgba(34, 197, 94, 0.25)" className="h-full">
                <div className="p-6 h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-6 pb-2 border-b border-white/10 flex items-center gap-2 relative z-10">
                    <motion.span 
                      className="w-2 h-6 bg-green-500 rounded-full inline-block"
                      layoutId={`pill-${idx}`}
                    />
                    {category.category}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 relative z-10 flex-grow content-start">
                    {category.items.map((skill: any, sIdx: number) => (
                      <motion.div 
                        key={sIdx} 
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(34, 197, 94, 0.1)" }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/5 transition-colors cursor-default"
                      >
                        <skill.icon className="text-2xl text-primary/80 group-hover/card:text-green-400 transition-colors" />
                        <span className="text-sm font-medium">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

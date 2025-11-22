import { motion, useScroll, useTransform } from "framer-motion";
import { experiences } from "@/lib/data";
import { Calendar, Building2 } from "lucide-react";
import { useRef } from "react";

export function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Animate line filling from 0 to 100% as user scrolls through the section
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-24 bg-background/50" ref={ref}>
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 reveal-on-scroll"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey through technology, community building, and leadership.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Base Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 transform md:-translate-x-1/2" />
          
          {/* Animated Vertical Line Fill */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-[20px] md:left-1/2 top-0 w-px bg-green-500 transform md:-translate-x-1/2 origin-top z-0" 
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row gap-8 reveal-on-scroll ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <motion.div 
                  initial={{ scale: 0, backgroundColor: "hsl(var(--background))" }}
                  whileInView={{ scale: 1, backgroundColor: "#22c55e" }} // Green on view
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                  className="absolute left-[20px] md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background z-10 mt-6 shadow-[0_0_10px_rgba(34,197,94,0.5)]" 
                />

                {/* Content */}
                <div className="ml-12 md:ml-0 md:w-1/2 pt-2 md:px-8">
                  <motion.div 
                    whileHover={{ y: -5, scale: 1.02, borderColor: "rgba(34, 197, 94, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`glass-card p-6 rounded-xl border border-white/5 hover:shadow-[0_0_30px_-10px_rgba(34,197,94,0.3)] transition-all duration-300 group cursor-default ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}>
                    <div className={`flex items-center gap-2 text-sm text-primary font-medium mb-2 ${
                      index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                    }`}>
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                    <h3 className="text-xl font-bold mb-1 group-hover:text-green-400 transition-colors">{exp.role}</h3>
                    <div className={`flex items-center gap-2 text-muted-foreground mb-4 ${
                      index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                    }`}>
                      <Building2 size={14} />
                      {exp.company}
                    </div>
                    <p className="text-sm text-muted-foreground/80 leading-relaxed">
                      {exp.description}
                    </p>
                    <span className="inline-block mt-4 text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-muted-foreground group-hover:bg-green-500/10 group-hover:text-green-400 group-hover:border-green-500/20 transition-colors">
                      {exp.type === 'work' ? 'Professional Exp.' : 'Community'}
                    </span>
                  </motion.div>
                </div>
                
                {/* Empty side for layout balance */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


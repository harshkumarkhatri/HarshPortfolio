import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { Calendar, Building2 } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-background/50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey through technology, community building, and leadership.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
                  className="absolute left-[20px] md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 mt-6" 
                />

                {/* Content */}
                <div className="ml-12 md:ml-0 md:w-1/2 pt-2 md:px-8">
                  <motion.div 
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`glass-card p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-colors group cursor-default ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}>
                    <div className={`flex items-center gap-2 text-sm text-primary font-medium mb-2 ${
                      index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                    }`}>
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                    <h3 className="text-xl font-bold mb-1 group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                    <div className={`flex items-center gap-2 text-muted-foreground mb-4 ${
                      index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                    }`}>
                      <Building2 size={14} />
                      {exp.company}
                    </div>
                    <p className="text-sm text-muted-foreground/80 leading-relaxed">
                      {exp.description}
                    </p>
                    <span className="inline-block mt-4 text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
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

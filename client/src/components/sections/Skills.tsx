import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -z-10" />

      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Tech Stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass rounded-2xl p-6 border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold mb-6 pb-2 border-b border-white/10 flex items-center gap-2">
                <span className="w-2 h-6 bg-primary rounded-full inline-block" />
                {category.category}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {category.items.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                    <skill.icon className="text-2xl text-primary/80" />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

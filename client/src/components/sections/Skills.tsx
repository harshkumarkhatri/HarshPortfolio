import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { skills } from "@/lib/data";
import { useEffect } from "react";

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-black">
      {/* Background subtle glow */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] -z-10" />

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

        <div className="grid md:grid-cols-3 gap-8 group/grid">
          {skills.map((category, idx) => (
            <SkillCard key={idx} category={category} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ category, idx }: { category: any; idx: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.2, duration: 0.5, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      className="group/card relative rounded-2xl bg-card/30 border border-white/10 overflow-hidden"
    >
      {/* X-Ray Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover/card:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative p-6 h-full">
        <h3 className="text-xl font-bold mb-6 pb-2 border-b border-white/10 flex items-center gap-2 relative z-10">
          <motion.span 
            className="w-2 h-6 bg-primary rounded-full inline-block"
            layoutId={`pill-${idx}`}
          />
          {category.category}
        </h3>
        
        <div className="grid grid-cols-2 gap-4 relative z-10">
          {category.items.map((skill: any, sIdx: number) => (
            <motion.div 
              key={sIdx} 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              className="flex items-center gap-3 p-3 rounded-lg bg-white/5 transition-colors cursor-default"
            >
              <skill.icon className="text-2xl text-primary/80 group-hover/card:text-primary transition-colors" />
              <span className="text-sm font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

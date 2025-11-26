import { motion } from "framer-motion";
import { communityExperiences } from "@/lib/data";
import { Calendar, Users, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export function Community() {
  return (
    <section id="community" className="py-24 bg-background/50">
      <div className="container px-4 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 reveal-on-scroll"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Community & Leadership</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Giving back to the tech community through mentorship, content creation, and organizing events.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communityExperiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 rounded-xl border border-border/50 hover:border-green-500/30 hover:shadow-[0_0_20px_-5px_rgba(74,222,128,0.1)] transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-secondary/50 text-green-400">
                  <Users size={20} />
                </div>
                <div className="text-xs font-mono text-muted-foreground bg-secondary/50 px-2 py-1 rounded">
                  {exp.period}
                </div>
              </div>

              <h3 className="text-lg font-bold mb-1">{exp.role}</h3>
              <div className="text-sm text-muted-foreground mb-4">{exp.company}</div>

              <ul className="space-y-2 mt-auto">
                {/* @ts-ignore - points exists */}
                {exp.points?.slice(0, 2).map((point: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground/80 leading-relaxed">
                    <span className="mt-1.5 min-w-[4px] h-[4px] rounded-full bg-green-500/60 flex-shrink-0" />
                    <span className="line-clamp-2">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

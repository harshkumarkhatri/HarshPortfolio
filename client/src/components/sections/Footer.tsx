import { personalInfo } from "@/lib/data";
import { Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="py-12 border-t border-white/10 bg-background">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">{personalInfo.name}</h2>
            <p className="text-muted-foreground max-w-xs">
              Building bridges between technology and people.
            </p>
          </div>

          <div className="flex gap-6">
            {personalInfo.socials.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
                aria-label={social.name}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Harsh Kumar Khatri. All rights reserved.</p>
          <p>Built with ❤️ using React & Tailwind</p>
        </div>
      </div>
    </footer>
  );
}

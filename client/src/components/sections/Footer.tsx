import { personalInfo } from "@/lib/data";
import { Mail, MapPin } from "lucide-react";
import { TerminalContact } from "@/components/ui/TerminalContact";

export function Footer() {
  return (
    <footer id="contact" className="py-12 border-t border-border bg-background">
      <div className="container px-4 mx-auto">
        
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Initialize Contact</h2>
            <p className="text-muted-foreground">Run the protocol to establish connection.</p>
          </div>
          <TerminalContact />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-border/50">
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold mb-1">{personalInfo.name}</h2>
            <p className="text-muted-foreground text-sm max-w-xs">
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
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground opacity-50">
          <p>&copy; {new Date().getFullYear()} Harsh Kumar Khatri. All rights reserved.</p>
          <p>System Status: OPERATIONAL</p>
        </div>
      </div>
    </footer>
  );
}

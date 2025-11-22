import { SiLinkedin, SiGithub, SiMedium, SiFlutter, SiOracle, SiMulesoft, SiAndroid, SiFirebase, SiPython } from "react-icons/si";
import { LucideIcon, Code2, Users, Brain, Globe } from "lucide-react";

export const personalInfo = {
  name: "Harsh Kumar Khatri",
  role: "Integrations Developer & Community Lead",
  tagline: "Learning skills apart from knowledge.",
  bio: "I am a passionate Integrations Developer currently working at The Narayana Group. With a background in mobile development (Flutter) and a heart for community building, I strive to bridge the gap between complex technologies and people. I've led Google Developer Student Clubs and mentored hundreds of students in their tech journey.",
  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/harshkumarkhatri/",
      icon: SiLinkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/harshkumarkhatri",
      icon: SiGithub,
    },
    {
      name: "Medium",
      url: "https://mailharshkhatri.medium.com/",
      icon: SiMedium,
    },
  ],
};

export const experiences = [
  {
    company: "The Narayana Group",
    role: "Integrations Developer",
    period: "Present",
    description: "Specializing in Oracle SOA, Oracle Integration Cloud (OIC), Oracle MFT, and MuleSoft. Building robust integration solutions for enterprise-scale applications.",
    type: "work",
  },
  {
    company: "Hexhybrids",
    role: "Founder",
    period: "Past",
    description: "Founded a tech initiative focused on hybrid development solutions and community learning.",
    type: "work",
  },
  {
    company: "Google Developer Student Clubs",
    role: "GDSC Lead",
    period: "Past",
    description: "Led a community of student developers, organizing workshops, hackathons, and technical sessions to foster a culture of learning and building.",
    type: "community",
  },
  {
    company: "MLH (Major League Hacking)",
    role: "Mentor (HackItShipIt)",
    period: "Past",
    description: "Mentored participants in hackathons, providing technical guidance and support to help them turn ideas into prototypes.",
    type: "community",
  },
];

export const skills = [
  {
    category: "Integration & Cloud",
    items: [
      { name: "Oracle SOA", icon: SiOracle },
      { name: "MuleSoft", icon: SiMulesoft },
      { name: "Oracle OIC", icon: SiOracle },
      { name: "Cloud Computing", icon: Globe },
    ],
  },
  {
    category: "Mobile & Web",
    items: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Android", icon: SiAndroid },
      { name: "Firebase", icon: SiFirebase },
      { name: "React", icon: Code2 },
    ],
  },
  {
    category: "Community & Soft Skills",
    items: [
      { name: "Community Building", icon: Users },
      { name: "Technical Writing", icon: Brain },
      { name: "Public Speaking", icon: Users },
      { name: "Mentorship", icon: Users },
    ],
  },
];

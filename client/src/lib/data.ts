import {
  SiLinkedin, SiGithub, SiMedium, SiFlutter, SiOracle, SiMulesoft, SiAndroid,
  SiFirebase, SiPython, SiDotnet, SiTypescript, SiJavascript,
  SiKotlin, SiAmazon, SiGit, SiVuedotjs, SiSwift, SiMysql
} from "react-icons/si";
import { LucideIcon, Code2, Users, Brain, Globe, Server, Smartphone, Cloud, Terminal } from "lucide-react";

export const personalInfo = {
  name: "Harsh Kumar Khatri",
  role: "Software Engineer",
  tagline: "Building Scalable Systems. Bridging Tech & People.",
  bio: "I am a passionate Software Engineer currently working at The Narayana Group. With a strong background in mobile development (Flutter) and backend systems (.NET), I strive to bridge the gap between complex technologies and people. I've led Google Developer Student Clubs and mentored thousands of students in their tech journey.",
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

export const workExperiences = [
  {
    company: "Narayana Group",
    role: "Software Engineer",
    period: "Nov 2023 – Present",
    location: "Hyderabad, India",
    points: [
      "Architected and led development of nConnect & nStaff Flutter apps with scalable modular architecture.",
      "Built nDeploy, an internal CI/CD automation tool enabling zero-downtime releases.",
      "Improved app performance by 30% via caching, widget optimization, and modular code.",
      "Developed & maintained .NET microservices for auth, notifications, and reporting.",
      "Ensured high stability, scalability, and clean-code standards across apps.",
      "Performed production debugging, RCA analysis, and system failure investigations.",
      "Collaborated closely with product owners and engineering managers for feature planning.",
      "Participated in hiring, candidate evaluation, interviews & mentoring."
    ],
    type: "work",
  },
  {
    company: "Prodo",
    role: "Flutter Developer",
    period: "Jun 2023 – Nov 2023",
    location: "Gurugram, India",
    points: [
      "Developed and launched 2 full-scale Flutter apps from scratch (Android + iOS).",
      "Implemented BLoC architecture and clean modular code.",
      "Integrated Firebase, Mixpanel, OneSignal for real-time analytics & engagement.",
      "Built complex custom UI and improved app performance.",
      "Ensured high-quality releases with scalable code standards."
    ],
    type: "work",
  },
  {
    company: "Tournafest",
    role: "Flutter Developer",
    period: "Mar 2022 – May 2023",
    location: "Remote",
    points: [
      "Led core modules using Clean Architecture + Redux.",
      "Achieved 98% test coverage (unit + integration), following TDD.",
      "Integrated APIs & 3rd-party services with smooth UX.",
      "Maintained high code reliability and guided junior devs."
    ],
    type: "work",
  },
  {
    company: "Allihoop",
    role: "Flutter Developer",
    period: "Sep 2021 – Mar 2022",
    location: "Remote (Sweden)",
    points: [
      "Improved performance by 25% using caching & widget optimization.",
      "Boosted app performance and rendering speed.",
      "Collaborated with product, design & QA for high-quality releases."
    ],
    type: "work",
  },
  {
    company: "Udemy & Eduonix",
    role: "Educator / Instructor",
    period: "Mar 2021 – Present",
    location: "Remote",
    points: [
      "Published 10+ Flutter courses with 54,000+ students enrolled.",
      "Taught Flutter development, architecture, Firebase, and testing.",
      "Helped developers build end-to-end real-world projects.",
      "Mentored students on clean architecture, CI/CD & scalable app delivery."
    ],
    type: "work",
  },
  {
    company: "Chegg",
    role: "Subject Matter Expert",
    period: "Oct 2021 – Dec 2022",
    location: "Remote",
    points: [
      "Solved technical problems and provided detailed solutions.",
      "Supported students in computer science and programming domains."
    ],
    type: "work",
  },
  {
    company: "Newton School",
    role: "Instructor",
    period: "Jun 2021 – Dec 2021",
    location: "Remote",
    points: [
      "Created the “Flutter from Scratch” course.",
      "Achieved 800+ subscribers on Ed-Camp channel.",
      "Delivered structured Flutter training with hands-on projects."
    ],
    type: "work",
  },
  {
    company: "MeitY",
    role: "Intern",
    period: "Jun 2021 – Aug 2021",
    location: "Remote",
    points: [
      "Developed the Primary Educator App & COVID Info App from scratch.",
      "Worked on two research projects.",
      "Used Flutter, GitHub, testing & debugging practices."
    ],
    type: "work",
  },
];

export const communityExperiences = [
  {
    company: "HexHybrids",
    role: "Founder",
    period: "Jan 2021 – Present",
    location: "Remote",
    points: [
      "Built a tech community focused on emerging technologies: Flutter, Backend, Cloud, AI/ML.",
      "Organized workshops, webinars & bootcamps for 5000+ developers.",
      "Created a collaborative learning ecosystem & guided aspiring developers."
    ],
    type: "community",
  },
  {
    company: "HexHybrids",
    role: "YouTuber / Instructor",
    period: "Jun 2020 – Present",
    location: "Remote",
    points: [
      "Grew YouTube channel to 400+ subscribers.",
      "Created content on Flutter, tech, and career insights.",
      "Hosted multiple GDSC sessions and technical series."
    ],
    type: "community",
  },
  {
    company: "MLH",
    role: "Mentor (HackItShipIt)",
    period: "Jul 2020 – Dec 2022",
    location: "Remote",
    points: [
      "Mentored participants in MLH’s flagship hackathon series.",
      "Guided developers, solved doubts, and supported 48-hour hackathon teams.",
      "Networked with developers across multiple countries."
    ],
    type: "community",
  },
  {
    company: "Voice of Code",
    role: "Management Team Lead",
    period: "May 2020 – Oct 2022",
    location: "Remote",
    points: [
      "Managed a team of 12 people in a global blogging community.",
      "Coordinated between tech & management teams.",
      "Oversaw planning and publishing of technical & non-technical content."
    ],
    type: "community",
  },
  {
    company: "Script Foundation",
    role: "Outreach Head",
    period: "Mar 2021 – Sep 2022",
    location: "Remote",
    points: [
      "Led collaborations, partnerships & community outreach.",
      "Organized developer-focused initiatives and events."
    ],
    type: "community",
  },
  {
    company: "GDSC",
    role: "GDSC Lead",
    period: "Aug 2020 – Jul 2021",
    location: "Career Point University",
    points: [
      "Led GDSC at Career Point University.",
      "Hosted 15+ events & two month-long bootcamps with 6000+ participants each.",
      "Built community from scratch and guided student developers."
    ],
    type: "community",
  },
  {
    company: "Google Cloud",
    role: "Facilitator (30 Days)",
    period: "Sep 2020 – Oct 2020",
    location: "Remote",
    points: [
      "Guided students through Google Cloud training.",
      "Managed coordination between college & Google Cloud team.",
      "Helped students get hands-on with GCP fundamentals."
    ],
    type: "community",
  },
  {
    company: "Medium",
    role: "Tech Writer",
    period: "2022 – Present",
    location: "Remote",
    points: [
      "Publish articles on Medium about Flutter & Firebase."
    ],
    type: "community",
  },
  {
    company: "MLSA",
    role: "Gold MLSA",
    period: "2020 – 2022",
    location: "Remote",
    points: [
      "Conducted national-level events on Azure, Flutter & Open Source."
    ],
    type: "community",
  },
  {
    company: "Hackathons",
    role: "Hackathon Judge",
    period: "2020 – Present",
    location: "Remote",
    points: [
      "Judged 12+ hackathons and mentored 30+ events across tech stacks."
    ],
    type: "community",
  },
  {
    company: "30 Days of Web Dev",
    role: "Lead Organizer",
    period: "2020 – 2021", // Estimated based on context
    location: "Remote",
    points: [
      "Organized 30 Days of Web Dev Bootcamp with 5000+ participants."
    ],
    type: "community",
  },
];

export const skills = [
  {
    category: "Languages & Frameworks",
    items: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: Code2 },
      { name: "C#", icon: SiDotnet },
      { name: ".NET", icon: SiDotnet },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "SQL", icon: SiMysql },
      { name: "Kotlin", icon: SiKotlin },
    ],
  },
  {
    category: "Mobile & Architecture",
    items: [
      { name: "MVVM / BLoC", icon: Brain },
      { name: "Firebase", icon: SiFirebase },
      { name: "REST APIs", icon: Server },
      { name: "CI/CD", icon: Cloud },
      { name: "App Store", icon: Smartphone },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "AWS", icon: SiAmazon },
      { name: "Git / GitHub", icon: SiGit },
      { name: "Vue.js", icon: SiVuedotjs },
      { name: "Swift", icon: SiSwift },
    ],
  },
];

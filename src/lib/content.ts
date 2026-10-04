export const studio = {
  email: "codecraftofficial.id@gmail.com",
  whatsapp: "https://wa.me/6287860168627",
  socials: {
    Instagram: "https://www.instagram.com/codecraft.id_/",
    LinkedIn: null as string | null,
    GitHub: null as string | null,
  },
};

export const services = [
  {
    title: "Web development",
    description:
      "Fast, responsive websites with considered design and careful engineering. Built to feel right, on every screen.",
    details: "Frontend · Responsive websites · Performance",
  },
  {
    title: "UI/UX design",
    description:
      "Clear journeys, thoughtful interfaces, and design systems that give your digital presence a point of view.",
    details: "Research · Interface design · Design systems",
  },
  {
    title: "Web applications",
    description:
      "Purposeful digital products that make complex tasks feel simple. From the first interaction to the systems behind it.",
    details: "Digital products · Dashboards · Integrations",
  },
  {
    title: "WordPress development",
    description:
      "Custom WordPress experiences that give your team control of their content without compromising the design.",
    details: "Custom themes · CMS · Content workflows",
  },
  {
    title: "Digital solutions",
    description:
      "A thoughtful response to your digital challenge. We connect the right tools, simplify workflows, and build what you actually need.",
    details: "Strategy · Automation · Connected systems",
  },
];

export type Project = {
  id: string;
  number: string;
  name: string;
  shortName: string;
  category: string;
  scope: string;
  year: string | null;
  description: string;
  theme: "faculty" | "biology-education" | "mathematics" | "biology";
  screenshot: string;
  website: string;
};

// URLs supplied by the studio; screenshots captured from the live sites.
// Publication years remain unset until confirmed by the studio.
export const projects: Project[] = [
  {
    id: "fmipa",
    number: "01",
    name: "FMIPA UNJ",
    shortName: "FMIPA",
    category: "Faculty website",
    scope: "Website development",
    year: null,
    description:
      "A digital home for the Faculty of Mathematics and Natural Sciences at Universitas Negeri Jakarta.",
    theme: "faculty",
    screenshot: "/projects/fmipa.webp",
    website: "https://fmipa-baru.unj.ac.id/",
  },
  {
    id: "pendidikan-biologi",
    number: "02",
    name: "Pendidikan Biologi UNJ",
    shortName: "Pendidikan Biologi",
    category: "Academic program website",
    scope: "UI/UX + development",
    year: null,
    description:
      "An academic program website bringing biology education into a clear digital experience.",
    theme: "biology-education",
    screenshot: "/projects/pendidikan-biologi.webp",
    website: "https://fmipa-baru.unj.ac.id/pendbiologi/",
  },
  {
    id: "pendidikan-matematika",
    number: "03",
    name: "Pendidikan Matematika UNJ",
    shortName: "Pendidikan Matematika",
    category: "Academic program website",
    scope: "UI/UX + development",
    year: null,
    description:
      "A considered digital presence for the mathematics education program at Universitas Negeri Jakarta.",
    theme: "mathematics",
    screenshot: "/projects/pendidikan-matematika.webp",
    website: "https://fmipa-baru.unj.ac.id/pendmatematika/",
  },
  {
    id: "biologi",
    number: "04",
    name: "Biologi UNJ",
    shortName: "Biologi",
    category: "Academic program website",
    scope: "UI/UX + development",
    year: null,
    description:
      "A focused academic website connecting the biology program with its digital audience.",
    theme: "biology",
    screenshot: "/projects/biologi.webp",
    website: "https://fmipa-baru.unj.ac.id/biologi/",
  },
];

export const process = [
  {
    name: "Discover",
    description: "Understand the problem, audience, and goals.",
    detail:
      "Good work starts with better questions. We listen, explore the context, and agree on what the experience needs to do.",
    output: "A clear direction",
  },
  {
    name: "Design",
    description: "Shape the visual direction and user experience.",
    detail:
      "We connect structure, interaction, and visual identity. Every decision is made around the people who will use it.",
    output: "A considered experience",
  },
  {
    name: "Develop",
    description: "Turn the design into a fast, responsive digital product.",
    detail:
      "Careful engineering brings the design to life. We build for real screens, real content, and real-world performance.",
    output: "A working product",
  },
  {
    name: "Launch",
    description: "Test, refine, deploy, and continue improving.",
    detail:
      "We check the details, work through the final refinements, and launch with a foundation that can grow with you.",
    output: "Ready for the world",
  },
];

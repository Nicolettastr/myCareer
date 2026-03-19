export type ExperienceEntry = {
  id: number;
  period: string;
  role: string;
  company: string;
  companyShort: string;
  location: string;
  description: string;
  isActive: boolean;
  stats?: { value: string; label: string }[];
  highlights: {
    text: string;
    em?: string[];
  }[];
  tags: string[];
};

export const experience: ExperienceEntry[] = [
  {
    id: 1,
    period: "2023 — Present",
    role: "Frontend Engineer",
    company: "BABEL Sistemas de Información",
    companyShort: "BABEL",
    location: "Remote · Madrid, Spain",
    description:
      "Working on large-scale applications focusing on clean architecture, performance, and maintainability.",
    isActive: true,
    stats: [
      { value: "350+", label: "Pull Requests" },
      { value: "7", label: "Refactors led" },
      { value: "3", label: "Teams synced" },
    ],
    highlights: [
      {
        text: "Built reusable components and custom hooks to standardize development",
        em: ["custom hooks"],
      },
      {
        text: "Managed global state with Zustand and server state with TanStack Query",
        em: ["Zustand", "TanStack Query"],
      },
      {
        text: "Improved TypeScript architecture using advanced utility types",
        em: ["TypeScript architecture"],
      },
      {
        text: "Implemented testing with Vitest for critical flows",
        em: ["Vitest"],
      },
      {
        text: "Collaborated with frontend, backend, and QA teams across Scrum ceremonies",
        em: ["Scrum ceremonies"],
      },
    ],
    tags: ["TypeScript", "React", "Zustand", "TanStack", "Vitest", "Scrum"],
  },
  {
    id: 2,
    period: "2023",
    role: "Fullstack Engineer",
    company: "BABEL Sistemas de Información",
    companyShort: "BABEL",
    location: "Remote · Madrid, Spain",
    description:
      "Worked across frontend and backend in enterprise environments.",
    isActive: false,
    highlights: [
      {
        text: "Built React interfaces with REST API integration",
        em: ["React interfaces"],
      },
      {
        text: "Developed and maintained APIs with Node.js and .NET Core",
        em: ["Node.js", ".NET Core"],
      },
      {
        text: "Worked with PostgreSQL, SQL Server, and Oracle",
        em: ["PostgreSQL"],
      },
      { text: "Debugged and improved legacy systems" },
      { text: "API testing with Postman and agile workflows", em: ["Postman"] },
    ],
    tags: ["React", "Node.js", ".NET Core", "PostgreSQL", "Postman"],
  },
  {
    id: 3,
    period: "2023",
    role: "Frontend Engineer",
    company: "Donair",
    companyShort: "Donair",
    location: "Remote · Madrid, Spain",
    description:
      "Delivered client-focused web solutions from concept to deployment.",
    isActive: false,
    highlights: [
      {
        text: "Built responsive and interactive applications with React",
        em: ["React"],
      },
      {
        text: "Worked directly with clients to deliver user-focused solutions",
        em: ["user-focused solutions"],
      },
      {
        text: "Managed deployments, hosting, and domains",
        em: ["deployments"],
      },
      {
        text: "Configured and maintained corporate email systems",
        em: ["corporate email"],
      },
    ],
    tags: ["React", "Deployments", "DNS", "Client work"],
  },
];

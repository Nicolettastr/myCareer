import styles from "../styles/projects.module.css";
import ProjectCard from "./ProjectCard";

export const Projects = () => {
  const projects = [
    {
      name: "Portfolio",
      description:
        "A clean and focused space to showcase my work, projects, and growth as a developer",
      tags: ["Next.js", "TypeScript", "GSAP", "React", "Css"],
      year: 2026,
      link: { label: "Live", url: "#" },
    },
    {
      name: "Team Tracker",
      description:
        "HR management tool for small businesses to handle employee vacations, sick leave, and notes. Built with a custom REST API and role-based authentication.",
      tags: ["Next.js", "TanStack Query", "Node.js", "Express", "Supabase"],
      year: 2025,
      link: { label: "Live", url: "#" },
    },
  ];

  return (
    <>
      <div id="projects" className={styles.projects}>
        <div className={styles.containerSection}>
          <h2 className={`title ${styles.title}`}>Personal projects</h2>
          <div className={styles.cardWrapper}>
            {" "}
            {projects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

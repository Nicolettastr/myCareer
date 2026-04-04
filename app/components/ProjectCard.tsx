import styles from "../styles/projectCard.module.css";

interface ProjectCardProps {
  name: string;
  description: string;
  tags: string[];
  year: number;
  link?: { label: string; url: string };
}

const ProjectCard = ({
  name,
  description,
  tags,
  year,
  link,
}: ProjectCardProps) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <h3 className={`title ${styles.card_title}`}>{name}</h3>
        </div>

        {link && (
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {link.label} <span className={styles.linkIcon}>↗</span>
          </a>
        )}
      </div>

      <p className={styles.description}>{description}</p>

      <div className={styles.footer}>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <span className={styles.year}>{year}</span>
      </div>
    </div>
  );
};

export default ProjectCard;

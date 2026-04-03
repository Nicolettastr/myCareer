import {
  Brain,
  MessageCircle,
  Shuffle,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";
import styles from "../styles/softSkills.module.css";

export const SoftSkils = () => {
  const softSkills = [
    { name: "Critical Thinking", icon: Brain },
    { name: "Cross-functional Collaboration", icon: Users },
    { name: "Continuous Improvement Mindset", icon: TrendingUp },
    { name: "User/Client Orientation", icon: UserCheck },
    { name: "Adaptability", icon: Shuffle },
    { name: "Communication", icon: MessageCircle },
  ];

  return (
    <div id="soft-skills" className={styles.container}>
      <h2 className={`title ${styles.title}`}>Soft Skills</h2>
      <div className={styles.wrapper}>
        {softSkills.map((skill, i) => (
          <div key={skill.name} className={styles.skill}>
            <skill.icon className={styles.icon} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

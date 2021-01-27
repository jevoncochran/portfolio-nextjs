import styles from "../../styles/Projects.module.scss";
import Link from "next/link";

const ProjectSummary = (props) => {
  return (
    <div className={styles["projects-ps"]}>
      <div className={styles["projects-ps-text-container"]}>
        <p className={styles["projects-ps-title"]}>{props.title}</p>
        <p className={styles["projects-ps-description"]}>{props.description}</p>
        <p className={styles["project-ps-technologies-headline"]}>
          TECHNOLOGIES:
        </p>
        <div className={styles["projects-ps-technologies-container"]}>
          {props.technologies &&
            props.technologies.map((t) => (
              <div className={styles["projects-ps-tech"]}>{t}</div>
            ))}
        </div>
        <Link href={`/projects/${props.id}`}>
          <div className={styles["project-ps-btn-div"]}>
            <button
              className={styles["project-ps-btn"]}
              //   onClick={() => props.history.push(`/projects/${props.id}`)}
            >
              More details
            </button>
          </div>
        </Link>
      </div>
      <img
        className={styles["projects-ps-img"]}
        src={props.leadImage}
        alt=""
        onClick={() => props.history.push(`/projects/${props.id}`)}
      />
    </div>
  );
};

export default ProjectSummary;

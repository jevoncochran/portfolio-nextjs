import styles from "../../styles/Projects.module.scss";
import Link from "next/link";
import { connect } from "react-redux";
import Cookie from "js-cookie";

import { setProject } from "../../redux/actions";

const ProjectSummary = (props) => {
  const configureProject = (id) => {
    props.setProject(id);
    Cookie.set("project", id);
  };

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
              onClick={() => configureProject(props.id)}
            >
              More details
            </button>
          </div>
        </Link>
      </div>
      <Link href={`/projects/${props.id}`}>
        <img
          className={styles["projects-ps-img"]}
          src={props.leadImage}
          alt=""
          onClick={() => configureProject(props.id)}
        />
      </Link>
    </div>
  );
};

export default connect(null, { setProject })(ProjectSummary);

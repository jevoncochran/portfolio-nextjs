// import React, { useContext, useEffect } from "react";
import { useEffect } from "react";
import styles from "../../styles/Projects.module.scss";
import { projects } from "../../data/projects";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { connect } from "react-redux";

import { deactivateHome, setProject } from "../../redux/actions";

// import { ProjectContext } from "../../context/ProjectContext";

const ProjectDetails = (props) => {
  //   const { projectId } = useParams();
  //   const { deactivateHome } = useContext(ProjectContext);

  //   useEffect(() => {
  //     deactivateHome();
  //   }, [deactivateHome]);

  const router = useRouter();
  const { projectId } = router.query;

  useEffect(() => {
    props.deactivateHome();
    props.setProject(projectId);
  }, []);

  return (
    <Layout>
      <div className={styles["projects-pd"]}>
        <div className={styles["projects-pd-top"]}>
          <div className={styles["projects-pd-text-container"]}>
            <p className={styles["projects-pd-title"]}>
              {projects[props.project - 1].title}
            </p>
            <p className={styles["projects-pd-description"]}>
              {projects[props.project - 1].description}
            </p>
            <p className={styles["projects-pd-purpose"]}>
              {projects[props.project - 1].purpose}
            </p>
            <ul className={styles["projects-pd-details-list"]}>
              {projects[props.project - 1].details.map((detail) => (
                <div className={styles["projects-pd-detail-div"]}>
                  <li className={styles["projects-pd-text"]}>
                    {detail.detail}
                  </li>
                  {detail.subdetails && (
                    <ul className={styles["projects-pd-subdetails-list"]}>
                      {detail.subdetails.map((sub) => (
                        <li
                          className={
                            styles["projects-pd-text"] +
                            " " +
                            styles["projects-pd-subdetail"]
                          }
                        >
                          {sub}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </ul>
            <div className={styles["projects-pd-btn-div"]}>
              <a
                className={styles["projects-pd-external-link"]}
                href={projects[props.project - 1].online}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <button className={styles["projects-pd-btn"]}>
                  <div className={styles["projects-pd-btn-icon"]}>
                    <BiLinkExternal />
                  </div>
                  <p className={styles["projects-pd-btn-text"]}>View online</p>
                </button>
              </a>
              <a
                className={styles["projects-pd-external-link"]}
                href={projects[props.project - 1].github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={styles["projects-pd-btn"]}>
                  <div className={styles["projects-pd-btn-icon"]}>
                    <AiFillGithub />
                  </div>
                  <p className={styles["projects-pd-btn-text"]}>Github repo</p>
                </button>{" "}
              </a>
            </div>
          </div>
          <div className={styles["projects-pd-tech-container"]}>
            <p className={styles["projects-pd-tech-headline"]}>
              TECHNOLOGIES USED:
            </p>
            <div className={styles["projects-pd-technologies"]}>
              {projects[props.project - 1].technologies.map((t) => (
                <div className={styles["projects-pd-tech"]}>{t}</div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles["projects-pd-botom"]}>
          {projects[props.project - 1].images.map((image) => (
            <img className={styles["projects-pd-img"]} src={image} alt="" />
          ))}
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    project: state.project.project,
  };
};

export default connect(mapStateToProps, { deactivateHome, setProject })(
  ProjectDetails
);

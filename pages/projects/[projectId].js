// import React, { useContext, useEffect } from "react";
// import { useParams } from "react-router-dom";
import styles from "../../styles/Projects.module.scss";
import { projects } from "../../data/projects";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

// import { ProjectContext } from "../../context/ProjectContext";

const ProjectDetails = () => {
  //   const { projectId } = useParams();
  //   const { deactivateHome } = useContext(ProjectContext);

  //   useEffect(() => {
  //     deactivateHome();
  //   }, [deactivateHome]);

  const router = useRouter();
  const { projectId } = router.query;

  return (
    <Layout>
      <div className={styles["projects-pd"]}>
        <div className={styles["projects-pd-top"]}>
          <div className={styles["projects-pd-text-container"]}>
            <p className={styles["projects-pd-title"]}>
              {projects[projectId - 1].title}
            </p>
            <p className={styles["projects-pd-description"]}>
              {projects[projectId - 1].description}
            </p>
            <p className={styles["projects-pd-purpose"]}>
              {projects[projectId - 1].purpose}
            </p>
            <ul className={styles["projects-pd-details-list"]}>
              {projects[projectId - 1].details.map((detail) => (
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
                href={projects[projectId - 1].online}
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
                href={projects[projectId - 1].github}
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
              {projects[projectId - 1].technologies.map((t) => (
                <div className={styles["projects-pd-tech"]}>{t}</div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles["projects-pd-botom"]}>
          {projects[projectId - 1].images.map((image) => (
            <img className={styles["projects-pd-img"]} src={image} alt="" />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetails;

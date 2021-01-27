// import React, { useContext, useEffect } from "react";
import styles from "../styles/Projects.module.scss";
import { projects } from "../data/projects";
import ProjectSummary from "../components/ProjectSummary";
// import { ProjectContext } from "../../context/ProjectContext";
import Layout from "../components/Layout";

const Projects = (props) => {
  //   const { deactivateHome } = useContext(ProjectContext);

  //   useEffect(() => {
  //     deactivateHome();
  //   }, [deactivateHome]);

  return (
    <Layout>
      <div className={styles["projects"]}>
        <h1 className={styles["projects-headline"]}>Projects</h1>
        {projects.map((project) => (
          <ProjectSummary
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            leadImage={project.images[0]}
            technologies={project.technologies}
            history={props.history}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Projects;

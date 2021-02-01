import { useEffect } from "react";
import styles from "../styles/About.module.scss";
import aboutMePic from "../public/assets/about-me-pic.jpg";
import Layout from "../components/Layout";
import { connect } from "react-redux";

import { deactivateHome } from "../redux/actions";

const About = (props) => {

  useEffect(() => {
    props.deactivateHome();
  }, []);

  return (
    <Layout>
      <div className={styles["about"]}>
        <div className={styles["about-text-container"]}>
          <p
            className={
              styles["about-text"] + " " + styles["about-text-first-line"]
            }
          >
            I'm Jevon, a Web Designer and Full Stack Developer based in Oakland,
            CA.
          </p>
          <img
          className={styles["about-img-mobile"]}
          src={aboutMePic}
          alt="Jevon Cochran seated with laptop in front of him"
        />
          <p className={styles["about-text"]}>
            {" "}
            I have a passion for design and technology and demonstrated
            experience in crafting beautiful, eye-catching websites. My keen eye
            for design converges with my solid software development capabilities
            and leaves me with the ability to craft a killer product for clients
            of many stripes.
          </p>
          <p className={styles["about-text"]}>
            If you are in need of a website for yourself, your organization or
            your business, feel free to reach out to me by pressing the button
            below.
          </p>
          {/* <div className="about-text-btn-container"> */}
          <button
            className={styles["about-text-btn"]}
            onClick={() => props.history.push("/contact")}
          >
            Contact
          </button>
          {/* </div> */}
        </div>
        <img
          className={styles["about-img"]}
          src={aboutMePic}
          alt="Jevon Cochran seated with laptop in front of him"
        />
      </div>
    </Layout>
  );
};

export default connect(null, { deactivateHome })(About);

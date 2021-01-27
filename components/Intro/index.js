import styles from "../../styles/Home.module.scss";

const Intro = () => {
  return (
    <div
      className={styles["home-intro"]}
      style={{
        backgroundImage:
          "url(" + `${require("../../public/assets/linkedIn_pic.jpg")}` + ")",
      }}
    >
      <div className={styles["home-intro-text-container"]}>
        <div className={styles["home-intro-text-background"]}></div>
        <p className={styles["home-intro-headline"]}>Hello, I'm Jevon.</p>
        <p className={styles["home-intro-text"]}>
          a Full Stack Web Developer based in Oakland, CA.
        </p>
      </div>
    </div>
  );
};

export default Intro;

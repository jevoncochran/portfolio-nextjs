import styles from "../../styles/NavBar.module.scss";
import Link from "next/link";

const NavBar = () => {
  //   const { onHomePage } = useContext(ProjectContext);

  return (
    <div className={styles["nav"]}>
      <div className={styles["nav-top"]}>
        <Link href="/">
          <a className={styles["nav-top-name"]}>Jevon</a>
        </Link>
        <Link href="/">
          <a className={styles["nav-top-name"]}>Cochran</a>
        </Link>
        <Link href="/">
          <a className={styles["nav-top-title"]}>Full Stack Developer</a>
        </Link>
        <img
          className={styles["nav-top-pic"]}
          src={require("../../public/assets/linkedIn_pic.jpg")}
          alt="Jevon Cochran professional"
          style={{ marginTop: "5%" }}
        />
      </div>
      <div className={styles["nav-bottom"]}>
        <Link href="/">
          <a className={styles["nav-link"]}>Home</a>
        </Link>
        <Link href="/about">
          <a className={styles["nav-link"]}>About Me</a>
        </Link>
        <Link href="/">
          <a className={styles["nav-link"]}>Resume</a>
        </Link>
        <Link href="/projects">
          <a className={styles["nav-link"]}>Projects</a>
        </Link>
        <Link href="/">
          <a className={styles["nav-link"]}>Contact</a>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

import Intro from "../components/Intro";
import styles from "../styles/Home.module.scss";
import Layout from "../components/Layout";


const Index = () => {
  //   const { activateHome } = useContext(ProjectContext);

//   useEffect(() => {
//     activateHome();
//   }, [activateHome]);

  return (
    <Layout>
      <div className={styles["home"]}>
        <Intro />
      </div>
    </Layout>
  );
};

export default Index;

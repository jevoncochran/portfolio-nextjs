import { useEffect } from "react";
import Intro from "../components/Intro";
import styles from "../styles/Home.module.scss";
import Layout from "../components/Layout";
import { connect } from "react-redux";

import { activateHome } from "../redux/actions";

const Index = props => {

  useEffect(() => {
    props.activateHome();
  }, []);

  return (
    <Layout>
      <div className={styles["home"]}>
        <Intro />
      </div>
    </Layout>
  );
};

export default connect(null, { activateHome })(Index);

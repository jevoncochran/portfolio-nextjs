import { GiHamburgerMenu } from "react-icons/gi";
import styles from "../../styles/MobileHamburger.module.scss";
import { connect } from "react-redux";
import { showMobileNav, hideMobileNav } from "../../redux/actions";

const MobileHamburger = (props) => {
  return (
    <div className={styles.mh}>
      <GiHamburgerMenu
        onClick={
          props.mobileNavVisibile ? props.hideMobileNav : props.showMobileNav
        }
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mobileNavVisibile: state.nav.mobileNavVisibile,
  };
};

export default connect(mapStateToProps, { showMobileNav, hideMobileNav })(
  MobileHamburger
);

import Head from "next/head";
import NavBar from "../NavBar";
import MobileHamburger from "../MobileHamburger";
import { connect } from "react-redux";
import { hideMobileNav } from "../../redux/actions";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>JC Portfolio</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rochester&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="body">
        <NavBar />
        <div
          className={
            props.mobileNavVisibile ? "low-visibility" : "high-visibility"
          }
          onClick={props.mobileNavVisibile ? props.hideMobileNav : null}
        >
          <MobileHamburger />
          {props.children}
          <style jsx>
            {`
              .body {
                display: flex;
              }

              .low-visibility {
                opacity: 0.5;
              }

              .high-visibility {
                opacity: 1;
              }
            `}
          </style>
          <style jsx global>
            {`
              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-size: 62.5%;
              }
            `}
          </style>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mobileNavVisibile: state.nav.mobileNavVisibile,
  };
};

export default connect(mapStateToProps, { hideMobileNav })(Layout);

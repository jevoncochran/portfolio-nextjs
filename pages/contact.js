import { useState, useEffect } from "react";
import styles from "../styles/Contact.module.scss";
import { sendInquiry } from "../functions/sendInquiry";
import Layout from "../components/Layout";
import { connect } from "react-redux";
import { deactivateHome } from "../redux/actions";

const Contact = (props) => {

  const [inquiry, setInquiry] = useState({
    first_name: "",
    last_name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChanges = (e) => {
    setInquiry({
      ...inquiry,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    props.deactivateHome();
  }, []);

  return (
    <Layout>
      <div className={styles["contact"]}>
        <div className={styles["contact-bio"]}>
          <p className={styles["contact-headline"]}>Jevon Cochran</p>
          <p className={styles["contact-title"]}>Web Developer</p>
          <p className={styles["contact-contact"]}>jevon.cochran@gmail.com</p>
        </div>
        <p className={styles["contact-pitch"]}>
          For inquiries, please message below.
        </p>
        <form className={styles["contact-form"]} onSubmit={sendInquiry}>
          <div className={styles["contact-input-div"]}>
            <p className={styles["contact-form-label"]}>Name:</p>
            <div className={styles["contact-name-input-div"]}>
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                className={
                  styles["contact-input"] + " " + styles["contact-input-name"]
                }
                onChange={handleChanges}
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                className={
                  styles["contact-input"] + " " + styles["contact-input-name"]
                }
                onChange={handleChanges}
              />
            </div>
          </div>
          <div className={styles["contact-input-div"]}>
            <p className={styles["contact-form-label"]}>Email Address:</p>
            <input
              type="text"
              name="email"
              className={styles["contact-input"]}
              onChange={handleChanges}
            />
          </div>
          <div className={styles["contact-input-div"]}>
            <p className={styles["contact-form-label"]}>Subject:</p>
            <input
              type="text"
              name="subject"
              className={styles["contact-input"]}
              onChange={handleChanges}
            />
          </div>
          <div className={styles["contact-input-div"]}>
            <p className={styles["contact-form-label"]}>Message:</p>
            <input
              type="text"
              name="message"
              className={
                styles["contact-input"] + " " + styles["contact-msg-input"]
              }
              onChange={handleChanges}
            />
          </div>
          <button type="submit" className={styles["contact-submit-btn"]}>
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default connect(null, { deactivateHome })(Contact);

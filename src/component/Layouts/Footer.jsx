import React from "react";
import styles from "../../style/layout.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerColumn}>
          <h3>Student Information</h3>
          <Link to="/studentinfo/apply">Student portal login</Link>
          <Link to="/studentinfo/apply">How To Apply</Link>
          <Link to="/studentinfo/exam">Examination</Link>
          <Link to="/studentinfo/blog">Blog</Link>
          <Link to="/studentinfo/teachingcentre">Teaching Centre Partners</Link>
        </div>

        <div className={styles.footerColumn}>
          <h3>Our Services</h3>
          <Link to="/link4">School Of Advanced Study</Link>
          <Link to="/link5">Libraries</Link>
          <Link to="/link6">Link 6</Link>
        </div>

        <div className={styles.footerColumn}>
          <h3>Column 1</h3>
          <Link to="/link1">Link 1</Link>
          <Link to="/link2">Link 2</Link>
          <Link to="/link3">Link 3</Link>
          <Link to="/link4">Link 4</Link>
          <Link to="/link5">Link 5</Link>
        </div>
        <div className={styles.footerColumn}>
          <h3>Column 2</h3>
          <Link to="/link1">Link 1</Link>
          <Link to="/link2">Link 2</Link>
          <Link to="/link3">Link 3</Link>
          <Link to="/link4">Link 4</Link>
          <Link to="/link5">Link 5</Link>
        </div>
      </div>

      <div className={styles.footerLowerContainer}>
        <div className={styles.footerLowerColumn}>
          <div>Oriental College,</div>
          <div> Guzari Bazar, Patna City,</div>
          <div> Patna-800 008</div>
          <div>Bihar, India</div>
          <h4>Direction &gt;</h4>
        </div>

        <div className={styles.footerLowerColumn}>
          <div>Ph: 0612-2632345</div>
          <a href="mailto:info@orientalcollege.in">
            Email: info@orientalcollege.in
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

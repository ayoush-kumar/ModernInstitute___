import React from "react";
import styles from "../../style/layout.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerColumn}>
          <h3 style={{color: 'white'}}>Student Information</h3>
          <Link to="/studentinfo/apply">Student portal login</Link>
          <Link to="/studentinfo/apply">How To Apply</Link>
          <Link to="/studentinfo/exam">Examination</Link>
          <Link to="/studentinfo/blog">Blog</Link>
          <Link to="/studentinfo/teachingcentre">Teaching Centre Partners</Link>
        </div>

        <div className={styles.footerColumn}>
          <h3 style={{color: 'white'}}>Our Services</h3>
          <Link to="/link4">School Of Advanced Study</Link>
          <Link to="/link5">Libraries</Link>
          {/* <Link to="/link6">Link 6</Link> */}
        </div>

        {/* <div className={styles.footerColumn}>
          <h3>Column 1</h3>
          <Link to="/link1">Link 1</Link>
          <Link to="/link2">Link 2</Link>
          <Link to="/link3">Link 3</Link>
          <Link to="/link4">Link 4</Link>
          <Link to="/link5">Link 5</Link>
        </div> */}
        <div className={styles.footerColumn}>
          <h3 style={{color: 'white'}}>Quick Access</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/admission">Admissions</Link>
          <Link to="/faculties">Faculties</Link>
          <Link to="/listofcourses">Courses</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/naac_ssr_aqar">NAAC/SSR/AQAR</Link>
        </div>
      </div>

      <div className={styles.footerLowerContainer}>
        <div className={styles.footerLowerColumn}>
          <div>MODERN GROUP OF INSTITUTIONS</div>

          <div>
          Kudromore, At+Po-Dahuwa, 
          </div>
          <div>
            Ps- Bounsi, Dist- Banka (Bihar)-813104
          </div>
          
        </div>

        <div className={styles.footerLowerColumn}>
          <div>Contact:- 8051150277, 9470959278(Office), 8709614171</div>
          <a href="info@mgiedu.co.in ">
            Email: info@mgiedu.co.in 
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

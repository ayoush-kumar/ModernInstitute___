import React from "react";
import book from "../../../assets/images/book.png";

import styles from "../../../style/homepage.module.css";

const UniversityHeading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bookImg}>
        <img src={book} alt="bookImg" />
      </div>

      <div className={styles.aboutUni}>
        <a href="about">ABOUT UNIVERSITY</a>
      </div>

      <div className={styles.purposeUniHeading}>A Purposeful University</div>
      <div className={styles.purposeUniDes}>
        Modern Group Of Institution. This college was established in the year
        2017 in the heart of Banka city. This college has been accredited and
        approved by PCI , New Delhi & Affiliated By Arayabhalta Knowledge
        University / BNRC, Patna.{" "}
      </div>
    </div>
  );
};

export default UniversityHeading;

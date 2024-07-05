import React from "react";
import { FindOut } from "../../Data/AboutUs/FindOut";
import styles from "../../style/layout.module.css";

const OurFacultyMore = () => {
  return (
    <div className={styles.facultyCont}>
      {FindOut.map((item, index) => (
        <div key={index} className={styles.innerFacultyCont}>
          <img src={item.facultyImage} alt={item.title} />
          <div className={styles.facultyCardCont}>
            <span>{item.facultyName}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurFacultyMore;

import React from "react";
import { DepartmentSubjInfo } from "../../Data/Department/DepartmentSubjInfo";
import styles from "../../style/layout.module.css";

function Gallerycontent() {
  return (
    <div className={styles.galleryCont}>
      {DepartmentSubjInfo.map((course, ind) => (
        <div key={ind} className={styles.galleryCardCont}>
          <img src={course.image} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Gallerycontent;

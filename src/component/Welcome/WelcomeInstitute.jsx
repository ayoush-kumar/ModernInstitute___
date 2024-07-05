import React from "react";
import institute from "../../assets/images/institute.png";
import styles from "../../style/layout.module.css";

const WelcomeInstitute = () => {
  return (
    <>
      <div className={styles.welcomeAboutContainer}>
        <div className={styles.welcomeImageCont}>
          <img src={institute} alt="" />
        </div>
        <div className={styles.welcomAboutCollegeCont}>
          <p>
            Modern Group Of Institution. This college was established in the
            year 2017 in the heart of Banka city. This college has been
            accredited and approved by PCI , New Delhi & Affiliated By
            Arayabhalta Knowledge University / BNRC, Patna. . Our college has
            the privilege to have healthy and harmonious ambience and the credit
            goes to the blessings of our elite college management and the
            diligence put in by dedicated faculties. We the faculty believes in
            providing board based education in nursing within academic frame
            work specifically directed to the development of critical thinking
            skills, competencies and standards required for practice of
            professional nursing. Our College has an excellent, efficient and
            highly motivated faculty who plan meticulously all the curricular
            and co-curricular activities for the students. We also strongly
            believe that the nursing students are responsible and accountable
            for qualify nursing practice thus they need to be appropriately
            trained, oriented and directly supervised. The students have been
            trained under the care of qualified and experienced faculty. They
            have been provided with the best possible classroom and clinical
            exposures. Besides the institute’s own hospital Popular Multi
            Speciality Hospital within the campus for clinical practicum,
            students are also provided exposure in state-run hospitals. The
            college places more emphasis on hands-on training, as these students
            will be dealing with human lives later. Today, we are in an era of
            evidence-based practice. The essential perquisite of any nursing
            action is its scientific validity. Nurses are thus becoming
            increasingly rational and scientific in their approach to nursing
            care. We demonstrate outstanding commitment to research excellence
            throughout the course. We address the global challenges and assure
            the high quality student education, experience and employability.
          </p>
        </div>
      </div>
    </>
  );
};

export default WelcomeInstitute;

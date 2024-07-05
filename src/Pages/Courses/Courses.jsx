import { nursingData,pharmacyData,paramedicalScienceData } from "../../Data/Courses/CoursesData";

import styles from '../../style/layout.module.css';


const Courses = () => {
    return (

        <>
          <div className={styles.allCoursesCont}>
            <div className={styles.courseCont}>
                <h2>Modern Group Of Nursing</h2>
                <table className={styles.courseTable} border="2" >
                    <thead>
                        <tr>
                            <th className={styles.courseRow}>S.No.</th>
                            <th className={styles.courseRow}>Course Name</th>
                            <th className={styles.courseRow}>Eligibility</th>
                            <th className={styles.courseRow}>Duration</th>
                        </tr>
                    </thead>
                {
                    nursingData.map((course,index) => (
                        <tr  key={index} >
                                 <td className={styles.courseRow}>{index+1}</td>
                            <td className={styles.courseRow}>{course.courseName}</td>
                            <td className={styles.courseRow}>{course.eligibility}</td>
                            <td className={styles.courseRow}>{course.duration}</td>
                        </tr>
                    ))
                }
                </table>
            </div>

            <div className={styles.courseCont}>
                <h2>Modern Group Of Pharmacy</h2>
                <table className={styles.courseTable} border={2}>
                <thead>
                        <tr>
                            <th className={styles.courseRow}>S.No.</th>
                            <th className={styles.courseRow}>Course Name</th>
                            <th className={styles.courseRow}>Eligibility</th>
                            <th className={styles.courseRow}>Duration</th>
                        </tr>
                </thead>
                {
                    pharmacyData.map((course,index) => (
                        <tr  key={index}>
                            <td className={styles.courseRow}>{index+1}</td>
                            <td className={styles.courseRow}>{course.courseName}</td>
                            <td className={styles.courseRow}>{course.eligibility}</td>
                            <td className={styles.courseRow}>{course.duration}</td>
                        </tr>
                    ))
                }
                </table>
            </div>

            <div className={styles.courseCont}>
                <h2>Modern Group Of Paramedical Sciences</h2>
                <table className={styles.courseTable} border={2}>
                <thead>
                        <tr>
                            <th className={styles.courseRow}>S.No.</th>
                            <th className={styles.courseRow}>Course Name</th>
                            <th className={styles.courseRow}>Eligibility</th>
                            <th className={styles.courseRow}>Duration</th>
                        </tr>
                </thead>
                {
                    paramedicalScienceData.map((course,index) => (
                        <tr  key={index}>
                            <td className={styles.courseRow}>{index+1}</td>
                            <td className={styles.courseRow}>{course.courseName}</td>
                            <td className={styles.courseRow}>{course.eligibility}</td>
                            <td className={styles.courseRow}>{course.duration}</td>
                        </tr>
                    ))
                }
                </table>
            </div>
            
          </div>
        </>
    )
}

export default Courses;
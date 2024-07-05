import { Link } from 'react-router-dom';
import styles from './Student.module.css';
import arrowRight from '../../../../assets/images/arrow-right.png';

const StudentDash = () => {
    return (
        <>
           <div className={styles.studentOuterCont}>
            <div className={styles.studentNavCont}>
                <div className={styles.studentDashNavLogo}>
                    <img src='data:image/png;base64,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' alt='studentCollegeLogo'/>
                </div>
                <div className={styles.studentNavTitle}>Modern Group Of Instituition</div>
                <div className={styles.studentNavProfile}>
                    <span>MD ARIF</span>
                    <img src='https://cdn-icons-png.flaticon.com/128/6325/6325109.png' />
                </div>
            </div>
            <div className={styles.studentInfoCont}>
                <div className={styles.studentlftSideInfoCont}>
                    <details className={`${styles.enrollmentDetails} ${styles.allDetails}`}>
                        <summary>Enrollment Form</summary>
                        <Link><li>
                            Fill Enrollment Form
                            <img src={arrowRight} />
                            </li></Link>
                        
                    </details>
                    <details className={`${styles.examinationDetails}  ${styles.allDetails}`}>
                        <summary>Examination Form</summary>
                        <Link><li>Fill Exam Form
                        <img src={arrowRight} />
                            </li></Link>
                        
                    </details>
                    <details className={`${styles.timeTableDetails}  ${styles.allDetails}`}>
                        <summary>Time Table</summary>
                        <Link><li>Download TimeTable
                        <img src={arrowRight} />
                            </li></Link>
                        
                    </details>
                    <details className={`${styles.profileDetails}  ${styles.allDetails}`}>
                        <summary>Student Profile</summary>
                        <Link><li>Student Profile
                        <img src={arrowRight} />
                            </li></Link>
                        
                    </details>
                    <details className={`${styles.attendanceDetails}  ${styles.allDetails}`}>
                        <summary>Student Attendance</summary>
                        <Link><li>View Attendance
                        <img src={arrowRight} />
                            </li></Link>
                        
                    </details>

                    <details className={`${styles.accountDetails}  ${styles.allDetails}`}>
                        <summary>My Account</summary>
                        <Link><li>My Account
                        <img src={arrowRight} />
                            </li></Link>
                        
                    </details>
                    <details className={`${styles.smartDetails}  ${styles.allDetails}`}>
                        <summary>Smart Card</summary>
                        <Link><li>View Smart Card
                        <img src={arrowRight} />
                            </li></Link>
                        
                    </details>
                    
                    <details className={`${styles.reportDetails}  ${styles.allDetails}`}>
                        <summary>Reports</summary>
                        <Link><li>View Reports
                        <img src={arrowRight} />
                            </li></Link>
                        
                    </details>
                </div>
                <div className={styles.studentRightSideCont}>
                    <span>ha sab thk hai</span>
                </div>
            </div>
           </div>
        </>
    )
}

export default StudentDash;
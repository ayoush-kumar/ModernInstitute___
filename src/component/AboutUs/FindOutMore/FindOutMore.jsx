import React from 'react'
import { FindOut } from '../../../Data/AboutUs/FindOut';
import styles from '../../../style/layout.module.css';
import { Link } from 'react-router-dom';

const FindOutMore = () => {
  return (
    <>
       <div className={styles.findOutMoreCont}>
         {
          FindOut.map((item,index) => (
            <div key={index} className={styles.innerFindOutMoreCont}>
                 <img src={item.image} alt={item.title} />
                 <div className={styles.findOutCardCont}>
                  <span className={styles.findOutCardTitle}>{item.title}</span>
                  <span className={styles.findOutCardDes} >{item.des}</span>
                  <Link to="/listofcourses"><button className={styles.findOutCardButton}>Show Courses</button></Link>
                 </div>
            </div>
          ))
         }
       </div>
      
  </>
  )
}

export default FindOutMore;

import React from "react";
import Layout from "../component/Layouts/Layout";
import styles from "../style/homepage.module.css";
import { AboutUni } from "../Data/AboutUni";
import BotToTop from "../component/BottomToTop";
import UniversityHeading from "../component/Home/University/UniversityHeading";
import FindOutHeading from "../component/AboutUs/FindOutMore/FindOutHeading";
import FindOutMore from "../component/AboutUs/FindOutMore/FindOutMore";
import rectangle from "../assets/images/Rectangle1326.png";
import stylesmodule from "../style/layout.module.css";


import { Link } from 'react-router-dom';

const HomePage = () => {
  
  return (
    <>
      <Layout>
        <table className={stylesmodule.customMenuTable}>
          <tbody>
            <tr>
              {" "}
              <td className="hover-effect">
              <Link to="/AdmissionAndFee">Admission & Fee</Link>
                </td>
              <td rowSpan={8}>
                <img src={rectangle} alt="noimage" />
              </td>
              <td className="hover-effect">

                <Link to='./GBMembers'>G.B. Members</Link>
                </td>
            </tr>
            <tr>
              <td className="hover-effect">
                <Link to="/Alumni">Alumni</Link>
              </td>
              <td className="hover-effect">College Committees</td>
            </tr>
            <tr>
              <td className="hover-effect">
                <Link to="/Facilities">Facilities</Link>
                </td>
              <td className="hover-effect">HRD - Bihar</td>
            </tr>
            <tr>
              <td className="hover-effect">
                <Link to="/GeneralRules">General Rules</Link>
                </td>
              <td className="hover-effect">UGC</td>
            </tr>
            <tr>
              <td className="hover-effect">
                <Link to='/CodeOfConduct'>Code of Conduct</Link></td>
              <td className="hover-effect">NAAC</td>
            </tr>
            <tr>
              <td className="hover-effect">
                <Link to="/CodeOfEthics">Code of Ethics</Link>
              </td>
              <td className="hover-effect">Patliputra University</td>
            </tr>
            <tr>
            
              <td className="hover-effect">
              <Link to="/CoreValue">Core Value</Link>
              </td>
              <td className="hover-effect">Bihar Intermediate</td>
            </tr>
            <tr>
              <td className="hover-effect">
                <Link to='/StudentSurvey'>Student Survey</Link>
                </td>
              <td className="hover-effect">
                <Link to="/Contact">Contact</Link>
                </td>
            </tr>
          </tbody>
        </table>
        <BotToTop />
        <UniversityHeading />

        <div className={styles.purposeUniCont}>
          {AboutUni.map((item, index) => (
            <div key={index} className={styles.innerPurposeUniCont}>
              <img src={item.image} alt={item.title} />
              <div className={styles.purposeCardCont}>
                <span>{item.name}</span>
              </div>
            </div>
          ))}
        </div>

        <FindOutHeading />
        <FindOutMore />
      </Layout>
    </>
  );
};

export default HomePage;

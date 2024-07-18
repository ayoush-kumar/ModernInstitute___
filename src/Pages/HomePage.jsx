import React from "react";
import Layout from "../component/Layouts/Layout";
// import styles from "../style/homepage.module.css";
// import { AboutUni } from "../Data/AboutUni";
import BotToTop from "../component/BottomToTop";
import UniversityHeading from "../component/Home/University/UniversityHeading";
import FindOutHeading from "../component/AboutUs/FindOutMore/FindOutHeading";
import FindOutMore from "../component/AboutUs/FindOutMore/FindOutMore";
import UniversityCards from "../component/AboutUs/FindOutMore/UniversityCards";
// import FindOutSlider from "../component/AboutUs/FindOutMore/FindOutSlider.jsx";
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
              <Link to="/AdmissionAndFee">ADMISSION & FEE</Link>
                </td>
              <td rowSpan={8}>
                <img src={rectangle} alt="noimage" />
              </td>
              <td className="hover-effect">

                <Link to='./GBMembers'> G.B. MEMBERS</Link>
                </td>
            </tr>
            <tr>
              <td className="hover-effect">
                <Link to="/Alumni">ALUMNI</Link>
              </td>
              <td className="hover-effect">COLLEGE COMMITTEES</td>
            </tr>
            <tr>
              <td className="hover-effect">
                <Link to="/Facilities">FACILITIES</Link>
                </td>
              <td className="hover-effect">HRD - BIHAR</td>
            </tr>
            <tr>
              <td className="hover-effect">
                <Link to="/GeneralRules">GENERAL RULES</Link>
                </td>
              <td className="hover-effect">UGC</td>
            </tr>
            <tr>
              <td className="hover-effect">
                <Link to='/CodeOfConduct'>CODE OF CONDUCT</Link></td>
              <td className="hover-effect">NAAC</td>
            </tr>
            <tr>
              <td className="hover-effect">
                <Link to="/CodeOfEthics">CODE OF ETHICS</Link>
              </td>
              <td className="hover-effect">PATLIPUTRA UNIVERSITY</td>
            </tr>
            <tr>
            
              <td className="hover-effect">
              <Link to="/CoreValue">CORE VALUE</Link>
              </td>
              <td className="hover-effect">BIHAR INTERMEDIATE </td>
            </tr>
            <tr>
              <td className="hover-effect">
                <Link to='/StudentSurvey'>STUDENT SURVEY</Link>
                </td>
              <td className="hover-effect">
                <Link to="/Contact">CONTACT</Link>
                </td>
            </tr>
          </tbody>
        </table>
        <BotToTop />
        <UniversityHeading />

        <UniversityCards />

        <FindOutHeading />
        <FindOutMore />
        {/* <FindOutSlider /> */}
      </Layout>
    </>
  );
};

export default HomePage;

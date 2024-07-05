import styles from "../../style/layout.module.css";
import Courses from "./Courses";
// import Header from '../../component/Layouts/Header';
// import Footer from '../../component/Layouts/Footer';
// import { Box } from '@mui/material';
// import { NavButtonOption } from '../../Data/NavButtonOption';
// import { NavLink , Link} from 'react-router-dom';
// import logo from '../../assets/images/logo.png'
// import { useCollegeValue } from "../../collegeContext";
import Layout from "../../component/Layouts/Layout";

const ListOfCourses = () => {
//   const { scrollViewToContent } = useCollegeValue();

  return (
    <>
      <Layout>
        {/* <div className={styles.HeaderTop}>
          <div className={styles.logos}>
            <img src={logo} alt="logo" />
            <h2 className={styles.collegeName}>Modern Group Of Instituition</h2>
          </div>

          <Link to="/login">
            <button className={styles.loginButton}>LOG IN</button>
          </Link>
        </div>
        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "none", lg: "block" },
            flexGrow: 1,
            bgcolor: " #d2cece"
          }}
        >
          <ul className={styles.navigationOption}>
            {NavButtonOption.map((item, index) => (
              <li key={index}>
                <NavLink
                  activeClassName={styles.aactive}
                  to={item.link}
                  onClick={() => scrollViewToContent(item.title)}
                >
                  {item.title}
                </NavLink>{" "}
              </li>
            ))}
          </ul>
        </Box> */}
        <div className={styles.listOfCourseCont}>
          <h1>Courses Offered</h1>
          <Courses />
        </div>
        {/* <Footer /> */}
      </Layout>
    </>
  );
};

export default ListOfCourses;

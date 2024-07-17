import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  AppBar,
  // backdropClasses,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import logo from "../../assets/images/logo.png";
import logo2 from "../../assets/images/logo2.jpeg";

import { useCollegeValue } from "../../collegeContext";
import { NavButtonOption } from "../../Data/NavButtonOption";
import styles from "../../style/layout.module.css";
// import { alignProperty } from "@mui/material/styles/cssUtils";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { scrollViewToContent, courseActive } = useCollegeValue();
  const open = Boolean(anchorEl);

  const handleMenuToggle = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const stylesApplyOnline = {
  //   border: "none",
  //   color: "white",
  //   textalign: "center",
  //   display: "inlineblock",
  // };

  return (
    <>
      <div className={styles.HeaderTop}>
        <div className={styles.logos}>
            <img src={logo2} alt="logo" />
          {/* <div className="name">
            <h2 className={styles.collegeName}>Modern Group Of Institution</h2>
            <p className={styles.collegeNameSubtext}>
              <p>(Run by National Educational & Social Welfare Trust)</p>
              <p>Approved by: Pharmacy Council of India, New Delhi, PCI-4559

Health Dept, Govt of Bihar, Patna</p>
              <p>
                Affiliated: Aryabhatta Knowledge University & Bihar University
                of Health Sciences, Patna <br /> & Bihar Nurses Registration
                Council, Paramedical Council Patna, Bihar
              </p>
            </p>
          </div> */}
        </div>

        <div
          style={{ display: "flex", padding: "5px", margin: "5px", gap: "5px" }}
        >
          <Link to="/applyonline">
            <button className={styles.stylesApplyOnline}>Apply Online</button>
          </Link>
          <Link to="/login">
            <button className={styles.stylesApplyOnline}>Log In</button>
          </Link>
        </div>
      </div>

      <Box sx={{ display: { sm: "block", md: "block", lg: "none" } }}>
        <AppBar position="static" component="nav" sx={{ bgcolor: "#d2cece" }}>
          <Toolbar>
            <IconButton
              aria-label="openMenu"
              color="black"
              onClick={handleMenuToggle}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>

      <Box
        sx={{
          display: { xs: "none", sm: "none", md: "none", lg: "block" },
          flexGrow: 1,
          bgcolor: "#d2cece",
        }}
      >
        <ul className={styles.navigationOption}>
          {NavButtonOption.map((item, index) => (
            <li key={index}>
              <NavLink
                activeclassname={styles.aactive}
                to={item.link}
                onClick={() => scrollViewToContent(item.title)}
              >
                {item.title}
              </NavLink>{" "}
            </li>
          ))}
        </ul>
      </Box>

      {courseActive && (
        <div className={styles.courseDropDownCont}>
          <MenuItem onClick={() => scrollViewToContent("Nursing")}>
            <Link className={styles.courseLinkStyle} to="/listofcourses">
              Modern Group Of Nursing
            </Link>
          </MenuItem>
          <MenuItem onClick={() => scrollViewToContent("Pharmacy")}>
            <Link className={styles.courseLinkStyle} to="/listofcourses">
              Modern Group Of Pharmacy
            </Link>
          </MenuItem>
          <MenuItem onClick={() => scrollViewToContent("Paramedical")}>
            <Link className={styles.courseLinkStyle} to="/listofcourses">
              Modern Group Of Paramedical Sciences
            </Link>
          </MenuItem>
        </div>
      )}

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ "aria-labelledby": "basic-button" }}
      >
        {NavButtonOption.map((item, index) => (
          <MenuItem key={index} onClick={handleClose}>
            <Link to={item.link} className={styles.menuLink}>
              {item.title}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default Header;

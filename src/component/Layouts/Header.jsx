import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/images/logo.png";
import { useCollegeValue } from "../../collegeContext";
import { NavButtonOption } from "../../Data/NavButtonOption";
import styles from "../../style/layout.module.css";

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

  return (
    <>
      <div className={styles.HeaderTop}>
        <div className={styles.logos}>
          <img src={logo} alt="logo" />
          <h2 className={styles.collegeName}>Modern Group Of Institution</h2>
        </div>
        <Link to="/applyonline">
          <button className={styles.loginButton}>Apply Online</button>
        </Link>
        <Link to="/login">
          <button className={styles.loginButton}>LOG IN</button>
        </Link>
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
          bgcolor: "#d2cece"
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

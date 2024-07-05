import { useState, useEffect } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaCommentAlt,
  FaUserCheck,
  FaFileAlt,
  FaGraduationCap
} from "react-icons/fa";
// import { MdNotificationsActive } from "react-icons/md";
import logoImage from "../../assets/images/logo.png";

import { GrCertificate } from "react-icons/gr";
import "../../style/AdminDashboard/Sidebar.css";
import { NavLink } from "react-router-dom";
import { PiExamFill } from "react-icons/pi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsSmallScreen(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsSmallScreen(e.matches);
      if (e.matches) setIsOpen(false);
    };

    mediaQuery.addListener(handleMediaQueryChange);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const toggle = () => {
    if (isSmallScreen) return;
    setIsOpen(!isOpen);
  };

  const menuItem = [
    { path: "/admin-dashboard", name: "Dashboard", icon: <FaTh /> },
    {
      path: "/admin-registration",
      name: "Registration",
      icon: <FaCommentAlt />
    },
    { path: "/admin-student", name: "Students", icon: <FaUserAlt /> },
    { path: "/admin-teacher", name: "Teachers", icon: <FaUserAlt /> },
    { path: "/admin-admission", name: "Admission", icon: <FaGraduationCap /> },
    { path: "/admin-schedule", name: "Schedule", icon: <FaFileAlt /> },
    { path: "/admin-attendance", name: "Attendance", icon: <FaUserCheck /> },
    { path: "/admin-assignment", name: "Assignment", icon: <FaFileAlt /> },

    // {
    //   path: "/admin-notifications",
    //   name: "Notifications",
    //   icon: <MdNotificationsActive />
    // },

    { path: "/admin-courses", name: "Courses", icon: <GrCertificate /> },
    { path: "/admin-exam", name: "Exam", icon: <PiExamFill /> },
    // { path: "/admin-calendar", name: "Calendar", icon: <RiCalendarFill /> },
    { path: "/admin-fees", name: "Fees", icon: <RiMoneyDollarCircleFill /> }
  ];

  return (
    <div className="adminSidebarContainer">
      <div
        style={{ width: isOpen ? "190px" : "50px" }}
        className="sidebar-section"
      >
        <div className="top_section">
          <img
            src={logoImage}
            alt=""
            style={{ display: isOpen ? "block" : "none" }}
            className="logo"
          />
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <div className="adminMain">{children}</div>
    </div>
  );
};

export default Sidebar;

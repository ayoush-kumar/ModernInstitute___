import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useCollegeValue } from "../../collegeContext";

const Layout = ({ children }) => {
  const { contentElem } = useCollegeValue();

  return (
    <div>
      <Header />
      <div ref={contentElem} style={{ marginBottom: "5%" }}>
        {children}
      </div>

      <Footer />
    </div>
  );
};

export default Layout;

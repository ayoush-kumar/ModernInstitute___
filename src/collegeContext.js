import { createContext, useContext, useRef, useState } from "react";

const collegeContext = createContext();

export const useCollegeValue = () => {
  const value = useContext(collegeContext);
  return value;
};

const CollegeContext = ({ children }) => {
  const contentElem = useRef(null);
  const [courseActive, setCourseActive] = useState(false);

  const scrollViewToContent = (nav) => {
    if (nav === "Courses" || nav === "Nursing" || nav === "Pharmacy" || nav === "Paramedical") {
      setCourseActive(!courseActive);
    }
    if (nav === "Home" ||  nav === "Courses") return;
    contentElem?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <collegeContext.Provider value={{ contentElem, scrollViewToContent,courseActive }}>
      {children}
    </collegeContext.Provider>
  );
};

export default CollegeContext;

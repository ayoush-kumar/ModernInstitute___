import React from "react";
import Layout from "../../component/Layouts/Layout";
import UserCard from "./usercard";

// import OurFaciltyHeading from "../../component/OurFaculty/OurFacultyHeading";
// import OurFacultyMore from "../../component/OurFaculty/OurFacultyMore";


const Faculty = () => {
  return (
    <div>
      <Layout>
        {/* <OurFaciltyHeading />
        <OurFacultyMore /> */}
        <UserCard/>



      </Layout>
    </div>
  );
};

export default Faculty;

import React from "react";
import Layout from "../../component/Layouts/Layout";
import OurFaciltyHeading from "../../component/OurFaculty/OurFacultyHeading";
import OurFacultyMore from "../../component/OurFaculty/OurFacultyMore";

const Faculty = () => {
  return (
    <div>
      <Layout>
        <OurFaciltyHeading />
        <OurFacultyMore />
      </Layout>
    </div>
  );
};

export default Faculty;

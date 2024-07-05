import React from 'react'
import Layout from '../../component/Layouts/Layout'
import FindOut from '../../component/AboutUs/FindOutMore/FindOutMore'
import FindOutHeading from '../../component/AboutUs/FindOutMore/FindOutHeading'
import WelcomeHeading from '../../component/Welcome/WelcomeHeading'
import WelcomeInstitute from '../../component/Welcome/WelcomeInstitute'





// import OurFaciltyHeading from '../../component/OurFaculty/OurFacultyHeading'

// import OurFacultyMore from '../../component/OurFaculty/OurFacultyMore'

const AboutUs = () => {
  
  return (
   <>
      <Layout>
      

       
        <WelcomeHeading/>
        <WelcomeInstitute/>
        <FindOutHeading/>
        <FindOut/>
        
       {/* <SubjectHeading/>
        <SubjectDepartment /> */}
        
        {/* <OurFaciltyHeading />
        <OurFacultyMore/> */}
      
      </Layout>
   
   </>
  )
}

export default AboutUs;

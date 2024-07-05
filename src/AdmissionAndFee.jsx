import React from 'react';
import BasicFee from './BasicFee.jsx'
import ANMFee from './ANMFee.jsx'
import GNMFee from './GNMFee.jsx'
import BSCFee from './BSCFee.jsx'
import BPharm from './BPharm.jsx'
import Dpharm from './Dpharm.jsx'
import CMD from './CMD.jsx'
import Dental from './Dental.jsx'
import OperationTheatre from './OperationTheatre.jsx'
import MedLabTech from './MedLabTech.jsx'
import XrayTech from './XrayTech.jsx'
import PhyTech from './PhyTech.jsx'
import SanitaryInspector from './SanitaryInspector.jsx'
import ECGtech from './ECGtech.jsx'


import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'

const AdmissionAndFee = () => {

  return (

    <>

    <Header/>
    <BasicFee/>
    <ANMFee/>
    <GNMFee/>
    <BSCFee/>
    <BPharm/>
    <Dpharm/>
    <CMD/>
    <Dental/>
    <OperationTheatre/>
    <MedLabTech/>
    <XrayTech/>
    <PhyTech/>
    <SanitaryInspector/>
    <ECGtech/>
    <Footer/>
    
    </>
  );
};



export default AdmissionAndFee;
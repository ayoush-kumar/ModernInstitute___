import React from 'react'

import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'


const GeneralRules = () => {
  return (
    <div>
      <Header/>
       <div>
        <h1 style={{textAlign:'center'}}>General Rules of Students</h1>
        <ol style={{margin:'50px'}}>
          <li>The new session starts in June and ends in May every year.</li>
          <li>Tution fee shall be chargeable from June irrespective of the date of admission.</li>
          <li>Last date of application for admission to any of the courses shall ordinarily be 3 weeks from the date of the publication of the qualifying examination's result.General extension may be done if needed.</li>
          <li>All admission shall be made on the recommendation of the selection committee of the college after approval by the Principal .</li>
          <li>In matters of selection ,admission and allotment of shifts or sections ,decision of the selection committee shall be final and binding.</li>
          <li>Regular class teaching shall start within four weeks after the expiry of the last date of admission.</li>
          <li>Every student shall have to abide by the rules and regulations of the college and of the University which may be amended from time to time by the concerned authorities.</li>
          <li>Students should be particular about their attendance or shortage of attendance as the student will be responsible for the same.</li>
        </ol>
       </div>

       <div>
        <h1 style={{textAlign:'center'}}>General Rules of the Office</h1>
        <ol style={{margin:'50px'}}>
          <li>Separate office Counters are marked for different types of work,students should go to the correct counter and instead of coming in a disorderly manner,students should follow queue.</li>
          <li>Also in the office rooms perfect discipline and silence be maintained.</li>
          <li>Application for specific purpose should be made in the forms prescribed along with fee (if any )payable for it.The requests shall be compiled as per rules and time schedule made of such work.All payments of tution fee ,Registration fee,examination fee etc shall be made through Bank Draft of the exact amount required to be paid.Bank Draft may be had from Allahabad Bank Extn.Counter at college premises.</li>
          <li>No admission be taken without the orders of the authorities,(Adm,Committee, HODs, Principal,& NO ADMISSION BE MADE ON PART PAYMENT BASIS.</li>
          <li>All queries shall be replied to on the enquiry counter as far as possible.</li>
          <li>Payment of scholarship etc.shall be made through cheque by the office.Such payments shall be made after being received from the proper source.Identification of the payee will be essential.</li>
          <li>Calculation shall be made the percentage of the daily attendance by the departmental assistant and countersigned by the H.O.D.s Every student should compulsory attend at least 75% of lectures delivered in the class.</li>
        </ol>
       </div>
       <Footer/>
    </div>
  )
}

export default GeneralRules

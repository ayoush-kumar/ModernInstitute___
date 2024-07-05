import React from 'react'

import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'

const Facilities = () => {
  return (
    <div>

        <Header/>
        <div>
            <h1>Courses Offered</h1>
            <ul style={{margin:'50px'}}>
                <li>ANM</li>
                <li>CDM</li>
                <li>Diploma in ECG Technology</li>
                <li>GNM</li>
                <li>O.TAsst</li>
                <li>BPT</li>
                <li>B.sc Nursing</li>
                <li>DMLT</li>
                <li>BOT</li>
                <li>D.Pharm</li>
                <li>X-ray Technician</li>
                <li>BHM</li>
                <li>B.Pharm</li>
                <li>DPT</li>
                <li>BMLT</li>
                <li>Dresser</li>
                <li>Diploma in SenitaryInspector (DSI)</li>
            </ul>
        </div>
        <Footer/>
      
    </div>
  )
}

export default Facilities

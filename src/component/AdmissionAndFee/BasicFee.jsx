import React from 'react';

const BasicFee = () => {
  const courses = [
    { sn: 1, course: "Auxiliary Nursing & Midwifery(ANM)", duration: "2 Years", eligibility: "10+2 (Arts, Sci, Com)", fees: "Rs. 1,50,000/-" },
    { sn: 2, course: "General Nursing & Midwifery(GNM) (Bihar Student Credit Card Available)", duration: "3 Years", eligibility: "10+2(Arts, Sci, Com) with eng.", fees: "Rs. 5,80,000/-" },
    { sn: 3, course: "Bachelor of Science in Nursing(Bsc Nursing) (Bihar Student Credit Card Available)", duration: "4 Years", eligibility: "10+2 PCB 50% with eng.", fees: "Rs. 6,50,000/-" },
    { sn: 4, course: "Diploma in Pharmacy(D.Pharm)", duration: "2 Years", eligibility: "10+2 PCBM with eng.", fees: "Rs. 2,00,000/-" },
    { sn: 5, course: "Bachelor of Pharmacy(B.Pharm) (Bihar Student Credit Card Available)", duration: "4 Years", eligibility: "10+2 PCBM with eng.", fees: "Rs. 4,00,000/-" },
    { sn: 6, course: "Certificate in Medical Dresse(CMD)", duration: "1 Years", eligibility: "Matriculation", fees: "Rs. 50,000/-" },
    { sn: 7, course: "Certificate in Dental Mechanical(CDM)", duration: "2 Years", eligibility: "10+2 PCB", fees: "Rs. 1,30,000/-" },
    { sn: 8, course: "Diploma in Operation Theatre Assist.(DOTA)", duration: "2 Years", eligibility: "10+2 PCB", fees: "Rs. 1,30,000/-" },
    { sn: 9, course: "Diploma in Medical Laboratory Technician (DMLT)", duration: "2 Years", eligibility: "10+2 PCB", fees: "Rs. 1,30,000/-" },
    { sn: 10, course: "Diploma in Physiotherapy(DPT)", duration: "2 Years", eligibility: "10+2 PCB", fees: "Rs. 1,30,000/-" },
    { sn: 11, course: "Diploma in Sanitary Inspector(DSI)", duration: "2 Years", eligibility: "10+2 PCB", fees: "Rs. 1,30,000/-" },
    { sn: 12, course: "Diploma in ECG(DECG)", duration: "2 Years", eligibility: "10+2 PCB", fees: "Rs. 1,30,000/-" },
    { sn: 13, course: "Bachelor of Physiotherapy(BPT) (Bihar Student Credit Card Available)", duration: "4 Years", eligibility: "10+2 PCB", fees: "Rs. 4,10,000/-" },
    { sn: 14, course: "Bachelor of Occupational Therapy(BOT) (Bihar Student Credit Card Available)", duration: "4 Years", eligibility: "10+2 PCB", fees: "Rs. 4,10,000/-" },
    { sn: 15, course: "Bachelor of Hospital Management(BHM) (Bihar Student Credit Card Available)", duration: "4 Years", eligibility: "10+2 With eng.", fees: "Rs. 4,10,000/-" },
    { sn: 16, course: "Bachelor of Medical Laboratory Technology(BMLT)", duration: "4 Years", eligibility: "10+2 PCB", fees: "Rs. 4,10,000/-" },
  ];

  return (
    <>
    <h2 style={{textAlign:'center'}}>Modern Group of Institutions Fee Structure</h2>
    <table style={{borderCollapse: 'collapse', width: '100%'}}>
      <thead>
        <tr style={{backgroundColor: '#8B0000'}}>
          <th style={tableHeaderStyle}>S. No.</th>
          <th style={tableHeaderStyle}>Course</th>
          <th style={tableHeaderStyle}>Duration</th>
          <th style={tableHeaderStyle}>Eligibility</th>
          <th style={tableHeaderStyle}>Fees</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course) => (
          <tr key={course.sn} >
            <td style={tableCellStyle}>{course.sn}</td>
            <td style={tableCellStyle}>{course.course}</td>
            <td style={tableCellStyle}>{course.duration}</td>
            <td style={tableCellStyle}>{course.eligibility}</td>
            <td style={tableCellStyle}>{course.fees}</td>
          </tr>
        ))}
      </tbody>
    </table>

    
    </>
  );
};

const tableHeaderStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  textAlign: 'left',
};

const tableCellStyle = {
  border: '1px solid #ddd',
  padding: '8px',
};




export default BasicFee;
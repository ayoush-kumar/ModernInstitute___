import React from 'react';

const BPharm = () => {
  const feeData = [
    { id: 1, particulars: "Admission Fee(One Time)", totalFee: "10000/-", firstYear: "10000/-", secondYear: "XX", thirdYear: "XX", fourthYear: "XX", scst: "5000/-", obcgen: "10000/-" },
    { id: 2, particulars: "Tuition Fee", totalFee: "300000/-", firstYear: "75000/-", secondYear: "75000/-", thirdYear: "75000/-", fourthYear: "75000/-", scst: "300000/-", obcgen: "300000/-" },
    { id: 3, particulars: "Library Fee", totalFee: "12000/-", firstYear: "3000/-", secondYear: "3000/-", thirdYear: "3000/-", fourthYear: "3000/-", scst: "12000/-", obcgen: "12000/-" },
    { id: 4, particulars: "Lab & Transportation Fee", totalFee: "40000/-", firstYear: "10000/-", secondYear: "10000/-", thirdYear: "10000/-", fourthYear: "10000/-", scst: "40000/-", obcgen: "40000/-" },
    { id: 5, particulars: "Miscellaneous Fee", totalFee: "4000/-", firstYear: "1000/-", secondYear: "1000/-", thirdYear: "1000/-", fourthYear: "1000/-", scst: "4000/-", obcgen: "4000/-" },
    { id: 6, particulars: "Examination Fee", totalFee: "16000/-", firstYear: "4000/-", secondYear: "4000/-", thirdYear: "4000/-", fourthYear: "4000/-", scst: "16000/-", obcgen: "16000/-" },
    { id: 7, particulars: "Institute Development Fee", totalFee: "28000/-", firstYear: "7000/-", secondYear: "7000/-", thirdYear: "7000/-", fourthYear: "7000/-", scst: "28000/-", obcgen: "28000/-" },
    { id: " ", particulars: "Total", totalFee: "4,10,000/-", firstYear: "1,10,000/-", secondYear: "1,00,000/-", thirdYear: "1,00,000/-", fourthYear: "1,00,000/-", scst: "4,05,000/-", obcgen: "4,10,000/-" },
  ];

  return (
    <div>
      <h2>Fee Structure for Bachelor of Pharmacy(B.Pharm)</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>S. No.</th>
            <th style={tableHeaderStyle}>Particulars</th>
            <th style={tableHeaderStyle}>Total Fee</th>
            <th style={tableHeaderStyle}>First Year</th>
            <th style={tableHeaderStyle}>Second Year</th>
            <th style={tableHeaderStyle}>Third Year</th>
            <th style={tableHeaderStyle}>Fourth Year</th>
            <th style={tableHeaderStyle}>SC/ST</th>
            <th style={tableHeaderStyle}>OBC/GEN</th>
          </tr>
        </thead>
        <tbody>
          {feeData.map((row) => (
            <tr key={row.id}>
              <td style={tableCellStyle}>{row.id}</td>
              <td style={tableCellStyle}>{row.particulars}</td>
              <td style={tableCellStyle}>{row.totalFee}</td>
              <td style={tableCellStyle}>{row.firstYear}</td>
              <td style={tableCellStyle}>{row.secondYear}</td>
              <td style={tableCellStyle}>{row.thirdYear}</td>
              <td style={tableCellStyle}>{row.fourthYear}</td>
              <td style={tableCellStyle}>{row.scst}</td>
              <td style={tableCellStyle}>{row.obcgen}</td>
            
                          
            </tr>
            

            
          ))}
        </tbody>
      </table>
      <p style={{color: 'red', marginTop: '10px'}}>
      Note:- <br/>(i) Hostel Fee (Lodging & Fooding) - 48000/- ( Forty Eight Thousand) per year (Optional) <br/>
        (ii) Cost of Books - 6000/- (Six Thousand rupees only) per year
      </p>
     
    </div>
  );
};

const tableHeaderStyle = {
  backgroundColor: '#f2f2f2',
  border: '1px solid #ddd',
  padding: '8px',
  textAlign: 'left',
};

const tableCellStyle = {
  border: '1px solid #ddd',
  padding: '8px',
};

export default BPharm;
import React from 'react';

const BSCFee = () => {
  

  const bscNursingFeeStructure = [
    { sn: 1, particulars: "Admission Fee(One Time)", totalFee: "25000/-", firstYear: "25000/-", secondYear: "XX", thirdYear: "XX", fourthYear: "XX", scSt: "10000/-", obcGen: "25000/-" },
    { sn: 2, particulars: "Tuition Fee", totalFee: "420000/-", firstYear: "105000/-", secondYear: "105000/-", thirdYear: "105000/-", fourthYear: "105000/-", scSt: "420000/-", obcGen: "420000/-" },
    { sn: 3, particulars: "Library Fee", totalFee: "20000/-", firstYear: "5000/-", secondYear: "5000/-", thirdYear: "5000/-", fourthYear: "5000/-", scSt: "20000/-", obcGen: "20000/-" },
    { sn: 4, particulars: "Lab & Transportation Fee", totalFee: "70000/-", firstYear: "17500/-", secondYear: "17500/-", thirdYear: "17500/-", fourthYear: "17500/-", scSt: "70000/-", obcGen: "70000/-" },
    { sn: 5, particulars: "Clinical Fee", totalFee: "30000/-", firstYear: "7500/-", secondYear: "7500/-", thirdYear: "7500/-", fourthYear: "7500/-", scSt: "30000/-", obcGen: "30000/-" },
    { sn: 6, particulars: "Examination Fee", totalFee: "24000/-", firstYear: "6000/-", secondYear: "6000/-", thirdYear: "6000/-", fourthYear: "6000/-", scSt: "24000/-", obcGen: "24000/-" },
    { sn: 7, particulars: "Institute Development Fee", totalFee: "36000/-", firstYear: "9000/-", secondYear: "9000/-", thirdYear: "9000/-", fourthYear: "9000/-", scSt: "36000/-", obcGen: "36000/-" },
    { sn: 8, particulars: "Miscellaneous Fee(One Time)", totalFee: "25000/-", firstYear: "6250/-", secondYear: "6250/-", thirdYear: "6250/-", fourthYear: "6250/-", scSt: "25000/-", obcGen: "25000/-" },
  ];

  const bscNursingTotalRow = {
    totalFee: "6,50,000/-",
    firstYear: "1,81,250/-",
    secondYear: "1,56,250/-",
    thirdYear: "1,56,250/-",
    fourthYear: "1,56,250/-",
    scSt: "6,40,000/-",
    obcGen: "6,50,000/-"
  };

  return (
    <div>
      

      <h2 style={{textAlign:'center'}} >Fee Structure Bachelor of Science in Nursing(B.Sc Nursing)</h2>
      <table style={{borderCollapse: 'collapse', width: '100%'}}>
        <thead>
          <tr style={{backgroundColor: '#8B0000'}}>
            <th style={tableHeaderStyle}>S.N.</th>
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
          {bscNursingFeeStructure.map((fee) => (
            <tr key={fee.sn} style={{backgroundColor: fee.sn % 2 === 0 ? '#f2f2f2' : 'white'}}>
              <td style={tableCellStyle}>{fee.sn}</td>
              <td style={tableCellStyle}>{fee.particulars}</td>
              <td style={tableCellStyle}>{fee.totalFee}</td>
              <td style={tableCellStyle}>{fee.firstYear}</td>
              <td style={tableCellStyle}>{fee.secondYear}</td>
              <td style={tableCellStyle}>{fee.thirdYear}</td>
              <td style={tableCellStyle}>{fee.fourthYear}</td>
              <td style={tableCellStyle}>{fee.scSt}</td>
              <td style={tableCellStyle}>{fee.obcGen}</td>
            </tr>
          ))}
          <tr style={{backgroundColor: '#f2f2f2', fontWeight: 'bold'}}>
            <td style={tableCellStyle} colSpan="2">Total</td>
            <td style={tableCellStyle}>{bscNursingTotalRow.totalFee}</td>
            <td style={tableCellStyle}>{bscNursingTotalRow.firstYear}</td>
            <td style={tableCellStyle}>{bscNursingTotalRow.secondYear}</td>
            <td style={tableCellStyle}>{bscNursingTotalRow.thirdYear}</td>
            <td style={tableCellStyle}>{bscNursingTotalRow.fourthYear}</td>
            <td style={tableCellStyle}>{bscNursingTotalRow.scSt}</td>
            <td style={tableCellStyle}>{bscNursingTotalRow.obcGen}</td>
          </tr>
        </tbody>
      </table>
      <p style={{color: 'red', marginTop: '10px'}}>
        Note:- (1) Hostel Fee (Lodging & Fooding) - 48000/- ( Forty Eight thousand) per year. (Optional)
        (11) Cost of Books - 5000/- (Six thousand rupees only) per year.
      </p>
    </div>
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

export default BSCFee;
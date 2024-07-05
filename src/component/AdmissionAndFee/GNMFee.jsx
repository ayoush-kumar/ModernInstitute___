import React from 'react';

const CourseTables = () => {
  

  const gnmFeeStructure = [
    { sn: 1, particulars: "Admission Fee(One Time)", totalFee: "10000/-", firstYear: "10000/-", secondYear: "XX", thirdYear: "XX", scSt: "5000/-", obcGen: "10000/-" },
    { sn: 2, particulars: "Tuition Fee", totalFee: "420000/-", firstYear: "140000/-", secondYear: "140000/-", thirdYear: "140000/-", scSt: "420000/-", obcGen: "420000/-" },
    { sn: 3, particulars: "Library Fee", totalFee: "12000/-", firstYear: "4000/-", secondYear: "4000/-", thirdYear: "4000/-", scSt: "12000/-", obcGen: "12000/-" },
    { sn: 4, particulars: "Lab & Transportation Fee", totalFee: "54000/-", firstYear: "18000/-", secondYear: "18000/-", thirdYear: "18000/-", scSt: "54000/-", obcGen: "54000/-" },
    { sn: 5, particulars: "Clinical Fee", totalFee: "30000/-", firstYear: "10000/-", secondYear: "10000/-", thirdYear: "10000/-", scSt: "30000/-", obcGen: "30000/-" },
    { sn: 6, particulars: "Examination Fee", totalFee: "6000/-", firstYear: "2000/-", secondYear: "2000/-", thirdYear: "2000/-", scSt: "6000/-", obcGen: "6000/-" },
    { sn: 7, particulars: "Institute Development Fee", totalFee: "36000/-", firstYear: "12000/-", secondYear: "12000/-", thirdYear: "12000/-", scSt: "36000/-", obcGen: "36000/-" },
    { sn: 8, particulars: "Poor Student Balance Fund(One Time)", totalFee: "6000/-", firstYear: "6000/-", secondYear: "XX", thirdYear: "XX", scSt: "6000/-", obcGen: "6000/-" },
    { sn: 9, particulars: "Miscellaneous Fee(One Time)", totalFee: "6000/-", firstYear: "6000/-", secondYear: "XX", thirdYear: "XX", scSt: "6000/-", obcGen: "6000/-" },
  ];

  const gnmTotalRow = {
    totalFee: "5,80,000/-",
    firstYear: "1,98,000/-",
    secondYear: "1,86,000/-",
    thirdYear: "1,86,000/-",
    scSt: "5,75,000/-",
    obcGen: "5,80,000/-"
  };

  return (
    <div>
      

      <h2 style={{textAlign:'center'}} >Fee Structure General Nursing Midwifery(G.N.M.)</h2>
      <table style={{borderCollapse: 'collapse', width: '100%'}}>
        <thead>
          <tr style={{backgroundColor: '#8B0000'}}>
            <th style={tableHeaderStyle}>S.N.</th>
            <th style={tableHeaderStyle}>Particulars</th>
            <th style={tableHeaderStyle}>Total Fee</th>
            <th style={tableHeaderStyle}>First Year</th>
            <th style={tableHeaderStyle}>Second Year</th>
            <th style={tableHeaderStyle}>Third Year</th>
            <th style={tableHeaderStyle}>SC/ST</th>
            <th style={tableHeaderStyle}>OBC/GEN</th>
          </tr>
        </thead>
        <tbody>
          {gnmFeeStructure.map((fee) => (
            <tr key={fee.sn} style={{backgroundColor: fee.sn % 2 === 0 ? '#f2f2f2' : 'white'}}>
              <td style={tableCellStyle}>{fee.sn}</td>
              <td style={tableCellStyle}>{fee.particulars}</td>
              <td style={tableCellStyle}>{fee.totalFee}</td>
              <td style={tableCellStyle}>{fee.firstYear}</td>
              <td style={tableCellStyle}>{fee.secondYear}</td>
              <td style={tableCellStyle}>{fee.thirdYear}</td>
              <td style={tableCellStyle}>{fee.scSt}</td>
              <td style={tableCellStyle}>{fee.obcGen}</td>
            </tr>
          ))}
          <tr style={{backgroundColor: '#f2f2f2', fontWeight: 'bold'}}>
            <td style={tableCellStyle} colSpan="2">Total</td>
            <td style={tableCellStyle}>{gnmTotalRow.totalFee}</td>
            <td style={tableCellStyle}>{gnmTotalRow.firstYear}</td>
            <td style={tableCellStyle}>{gnmTotalRow.secondYear}</td>
            <td style={tableCellStyle}>{gnmTotalRow.thirdYear}</td>
            <td style={tableCellStyle}>{gnmTotalRow.scSt}</td>
            <td style={tableCellStyle}>{gnmTotalRow.obcGen}</td>
          </tr>
        </tbody>
      </table>
      <p style={{color: 'red', marginTop: '10px'}}>
        Note:- (1) Hostel Fee (Lodging & Fooding) - 48000/- ( Forty Eight thousand) per year. (Optional)
        (11) Cost of Books - 1800/- (Six thousand rupees only) per year.
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

export default CourseTables;
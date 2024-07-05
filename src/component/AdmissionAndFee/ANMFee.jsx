import React from 'react';

const CourseTables = () => {

  const feeStructure = [
    { sn: 1, particulars: "Admission Fee", totalFee: "10000/-", firstYear: "4500/-", secondYear: "XX", scSt: "5000/-", obcGen: "10000/-" },
    { sn: 2, particulars: "Tuition Fee", totalFee: "90000/-", firstYear: "45000/-", secondYear: "45000/-", scSt: "90000/-", obcGen: "90000/-" },
    { sn: 3, particulars: "Lab & Library Fee", totalFee: "4000/-", firstYear: "2000/-", secondYear: "2000/-", scSt: "4000/-", obcGen: "4000/-" },
    { sn: 4, particulars: "Internet Assesment", totalFee: "2000/-", firstYear: "1000/-", secondYear: "1000/-", scSt: "2000/-", obcGen: "2000/-" },
    { sn: 5, particulars: "Development Fund Fee", totalFee: "10000/-", firstYear: "5000/-", secondYear: "5000/-", scSt: "10000/-", obcGen: "10000/-" },
    { sn: 6, particulars: "Transportation Fee", totalFee: "8000/-", firstYear: "4000/-", secondYear: "4000/-", scSt: "8000/-", obcGen: "8000/-" },
    { sn: 7, particulars: "Cultural Development Fee", totalFee: "2000/-", firstYear: "1000/-", secondYear: "1000/-", scSt: "2000/-", obcGen: "2000/-" },
    { sn: 8, particulars: "Caution Deposit", totalFee: "4000/-", firstYear: "2000/-", secondYear: "2000/-", scSt: "4000/-", obcGen: "4000/-" },
    { sn: 9, particulars: "Clinical Experience", totalFee: "10000/-", firstYear: "5000/-", secondYear: "5000/-", scSt: "10000/-", obcGen: "10000/-" },
    { sn: 10, particulars: "Exam, Enrolment smart card & Syllabus book & U.P Reg. Fee", totalFee: "11000/-", firstYear: "5500/-", secondYear: "5500/-", scSt: "11000/-", obcGen: "11000/-" },
  ];

  const totalRow = {
    sn: "", 
    particulars: "", 
    totalFee: "1,50,000/-", 
    firstYear: "75,000/-", 
    secondYear: "70,500/-", 
    scSt: "1,45,000/-", 
    obcGen: "1,50,000/-"
  };

  return (
    <div>
      <table style={{borderCollapse: 'collapse', width: '100%', marginBottom: '20px'}}>
        
      </table>

      <h2 style={{textAlign:'center'}} >Fee Structure for Auxiliary Nursing Midwifery(A.N.M)</h2>
      <table style={{borderCollapse: 'collapse', width: '100%'}}>
        <thead>
          <tr style={{backgroundColor: '#8B0000'}}>
            <th style={tableHeaderStyle}>S.N.</th>
            <th style={tableHeaderStyle}>Particulars</th>
            <th style={tableHeaderStyle}>Total Fee</th>
            <th style={tableHeaderStyle}>First Year</th>
            <th style={tableHeaderStyle}>Second Year</th>
            <th style={tableHeaderStyle}>SC/ST</th>
            <th style={tableHeaderStyle}>OBC/GEN</th>
          </tr>
        </thead>
        <tbody>
          {feeStructure.map((fee) => (
            <tr key={fee.sn} style={{backgroundColor: fee.sn % 2 === 0 ? '#f2f2f2' : 'white'}}>
              <td style={tableCellStyle}>{fee.sn}</td>
              <td style={tableCellStyle}>{fee.particulars}</td>
              <td style={tableCellStyle}>{fee.totalFee}</td>
              <td style={tableCellStyle}>{fee.firstYear}</td>
              <td style={tableCellStyle}>{fee.secondYear}</td>
              <td style={tableCellStyle}>{fee.scSt}</td>
              <td style={tableCellStyle}>{fee.obcGen}</td>
            </tr>
          ))}
          <tr style={{backgroundColor: '#f2f2f2', fontWeight: 'bold'}}>
            <td style={tableCellStyle} colSpan="2">Total</td>
            <td style={tableCellStyle}>{totalRow.totalFee}</td>
            <td style={tableCellStyle}>{totalRow.firstYear}</td>
            <td style={tableCellStyle}>{totalRow.secondYear}</td>
            <td style={tableCellStyle}>{totalRow.scSt}</td>
            <td style={tableCellStyle}>{totalRow.obcGen}</td>
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
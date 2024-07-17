import React from 'react';

const DPharmFeeStructure = () => {
  const feeData = [
    { id: 1, particulars: "Admission Fee(One Time)", totalFee: "10000/-", firstYear: "10000/-", secondYear: "XX", scst: "5000/-", obcgen: "10000/-" },
    { id: 2, particulars: "Tuition Fee", totalFee: "150000/-", firstYear: "75000/-", secondYear: "48000/-", scst: "150000/-", obcgen: "150000/-" },
    { id: 3, particulars: "Library Fee", totalFee: "6000/-", firstYear: "3000/-", secondYear: "3000/-", scst: "6000/-", obcgen: "6000/-" },
    { id: 4, particulars: "Lab & Transportation Fee", totalFee: "20000/-", firstYear: "10000/-", secondYear: "10000/-", scst: "20000/-", obcgen: "20000/-" },
    { id: 5, particulars: "Miscellaneous Fee", totalFee: "2000/-", firstYear: "1000/-", secondYear: "1000/-", scst: "2000/-", obcgen: "2000/-" },
    { id: 6, particulars: "Examination Fee", totalFee: "8000/-", firstYear: "4000/-", secondYear: "4000/-", scst: "8000/-", obcgen: "8000/-" },
    { id: 7, particulars: "Institute Development Fee", totalFee: "14000/-", firstYear: "7000/-", secondYear: "7000/-", scst: "14000/-", obcgen: "14000/-" },
    { id: " ", particulars: "Total", totalFee: "2,10,000/-", firstYear: "1,10,000/-", secondYear: "1,00,000/-", scst: "2,05,000/-", obcgen: "2,10,000/-" },
  ];


  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
    fontFamily: 'Arial, sans-serif',
  };

  const cellStyle = {
  
    padding: '8px',
    textAlign: 'left',
  };

  const headerStyle = {
      padding: '8px',
      textAlign: 'left',
      backgroundColor: '#f2f2f2',
    fontWeight: 'bold',

  };

  const noteStyle = {
    color: 'red',
    marginTop: '10px',
  };

  return (
    <div>
      <h2 >Fee Structure for Diploma in Pharmacy (D.Pharm)</h2>
      <table style={{tableStyle, width: '100%'}}>
        <thead>
          <tr>
            <th style={headerStyle}>S. No.</th>
            <th style={headerStyle}>Particulars</th>
            <th style={headerStyle}>Total Fee</th>
            <th style={headerStyle}>First Year</th>
            <th style={headerStyle}>Second Year</th>
            <th style={headerStyle}>SC/ST</th>
            <th style={headerStyle}>OBC/GEN</th>
          </tr>
        </thead>
        <tbody>
          {feeData.map((row) => (
            <tr key={row.id}>
              <td style={cellStyle}>{row.id}</td>
              <td style={cellStyle}>{row.particulars}</td>
              <td style={cellStyle}>{row.totalFee}</td>
              <td style={cellStyle}>{row.firstYear}</td>
              <td style={cellStyle}>{row.secondYear}</td>
              <td style={cellStyle}>{row.scst}</td>
              <td style={cellStyle}>{row.obcgen}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={noteStyle}>
        <p>Note:-<br/>(i) Hostel Fee (Lodging & Fooding) - 48000/- ( Forty Eight Thousand) per year (Optional)
        <br/>(ii) Cost of Books - 6000/- (Six Thousand rupees only) per year
        </p>
      </div>
    </div>
  );
};

export default DPharmFeeStructure;
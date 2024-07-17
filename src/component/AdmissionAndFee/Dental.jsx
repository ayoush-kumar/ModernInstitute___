import React from 'react';

const DentalMechanicalFeeStructure = () => {
  const feeData = [
    { id: 1, particulars: "Admission Fee (One Time)", totalFee: "10000/-", firstYear: "10000/-", secondYear: "XX" },
    { id: 2, particulars: "Tuition Fee", totalFee: "60000/-", firstYear: "30000/-", secondYear: "30000/-" },
    { id: 3, particulars: "Library Fee", totalFee: "9000/-", firstYear: "4500/-", secondYear: "4500/-" },
    { id: 4, particulars: "Lab & Transportation Fee", totalFee: "30000/-", firstYear: "15000/-", secondYear: "15000/-" },
    { id: 5, particulars: "Miscellaneous Fee", totalFee: "3000/-", firstYear: "1500/-", secondYear: "1500/-" },
    { id: 6, particulars: "Examination Fee", totalFee: "8000/-", firstYear: "4000/-", secondYear: "4000/-" },
    { id: 7, particulars: "Institute Development Fee", totalFee: "10000/-", firstYear: "5000/-", secondYear: "5000/-" },
    {
      id: " ",
      particulars: "Total",
      totalFee: "1,30,000/-",
      firstYear: "70,000/-",
      secondYear: "60,000/-"
    }
  ];


  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
  };

  const cellStyle = {
   
    padding: '8px',
    textAlign: 'center',
  };

  const headerStyle = {
    ...cellStyle,
    backgroundColor: '#f2f2f2',
    fontWeight: 'bold',
    textAlign: 'left',
  };

  const noteStyle = {
    color: 'red',
    marginTop: '10px',
    fontSize: '0.9em',
  };

  return (
    <div >
      <h2 >Fee Structure for Diploma in Dental Mechanical</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerStyle}>S. No.</th>
            <th style={headerStyle}>Particulars</th>
            <th style={headerStyle}>Total Fee</th>
            <th style={headerStyle}>First Year</th>
            <th style={headerStyle}>Second Year</th>
          </tr>
        </thead>
        <tbody>
          {feeData.map((row) => (
            <tr key={row.id}>
              <td style={{...cellStyle, textAlign: 'left'}}>{row.id}</td>
              <td style={{...cellStyle, textAlign: 'left'}}>{row.particulars}</td>
              <td style={{...cellStyle, textAlign: 'left'}}>{row.totalFee}</td>
              <td style={{...cellStyle, textAlign: 'left'}}>{row.firstYear}</td>
              <td style={{...cellStyle, textAlign: 'left'}}>{row.secondYear}</td>
            </tr>
          ))}

        </tbody>
      </table>
      <div style={noteStyle}>
        <p>Note:-<br/>(i) Hostel Fee (Lodging & Fooding) - 48000/- (Forty Eight Thousand) per year (Optional)<br/>
        (ii) Cost of Books - 6000/- (Six Thousand rupees only) per year</p>
      </div>
    </div>
  );
};

export default DentalMechanicalFeeStructure;
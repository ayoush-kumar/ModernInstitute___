import React from 'react';

const CMD = () => {
  const feeData = [
    { id: 1, particulars: "Admission Fee(One Time)", totalFee: "5000/-", scst: "5000/-", obcgen: "5000/-" },
    { id: 2, particulars: "Tuition Fee", totalFee: "40000/-", scst: "35000/-", obcgen: "40000/-" },
    { id: 3, particulars: "Examination Fee", totalFee: "2000/-", scst: "2000/-", obcgen: "2000/-" },
    { id: 4, particulars: "Development Fee", totalFee: "1000/-", scst: "1000/-", obcgen: "1000/-" },
    { id: 5, particulars: "Miscellaneous Fee", totalFee: "2000/-", scst: "2000/-", obcgen: "2000/-" },
    {id: " ",
    particulars: "Total",
    totalFee: "50,000/-",
    scst: "45,000/-",
    obcgen: "50,000/-"}
  ];

  const totalRow = {
    
  };

  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
    fontFamily: 'Arial, sans-serif',
  };

  const cellStyle = {
    border: '1px solid black',
    padding: '8px',
    textAlign: 'center',
    textAlign: 'left',
  };

  const headerStyle = {
    ...cellStyle,
    backgroundColor: '#f2f2f2',
    fontWeight: 'bold',
  };
  
  const noteStyle = {
    color: 'red',
    marginTop: '10px',
  };

  return (
    <div>
      <h2 >Fee Structure for Dresser (CMD)</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerStyle}>S. No.</th>
            <th style={headerStyle}>Particulars</th>
            <th style={headerStyle}>Total Fee</th>
            <th style={headerStyle}>SC/ST</th>
            <th style={headerStyle}>OBC/GEN</th>
          </tr>
        </thead>
        <tbody>
          {feeData.map((row) => (
            <tr key={row.id}>
              <td style={cellStyle}>{row.id}</td>
              <td style={{...cellStyle, textAlign: 'left'}}>{row.particulars}</td>
              <td style={cellStyle}>{row.totalFee}</td>
              <td style={cellStyle}>{row.scst}</td>
              <td style={cellStyle}>{row.obcgen}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={noteStyle}>
        <p>Note:-</p>
        <p>(1) Hostel Fee (Lodging & Fooding) - 48000/- ( Forty Eight thousand) per year (Optional)</p>
        <p>(II) Cost of Books - 2500/- (Two thousand Five Hundred rupees only) per year</p>
      </div>
    </div>
  );
};

export default CMD;
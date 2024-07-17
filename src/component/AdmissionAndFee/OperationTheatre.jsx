import React from 'react';

const OperationTheatreFeeStructure = () => {
  const feeData = [
    { id: 1, particulars: "Admission Fee (One Time)", totalFee: "10000/-", firstYear: "10000/-", secondYear: "XX" },
    { id: 2, particulars: "Tuition Fee", totalFee: "60000/-", firstYear: "30000/-", secondYear: "30000/-" },
    { id: 3, particulars: "Library Fee", totalFee: "9000/-", firstYear: "4500/-", secondYear: "4500/-" },
    { id: 4, particulars: "Lab & Transportation Fee", totalFee: "30000/-", firstYear: "15000/-", secondYear: "15000/-" },
    { id: 5, particulars: "Miscellaneous Fee", totalFee: "3000/-", firstYear: "1500/-", secondYear: "1500/-" },
    { id: 6, particulars: "Examination Fee", totalFee: "8000/-", firstYear: "4000/-", secondYear: "4000/-" },
    { id: 7, particulars: "Institute Development Fee", totalFee: "10000/-", firstYear: "5000/-", secondYear: "5000/-" },
    {
      id: "",
      particulars: "Total",
      totalFee: "1,30,000/-",
      firstYear: "70,000/-",
      secondYear: "60,000/-"
    },
  ];
  const styles = {
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    th: {
      backgroundColor: '#f2f2f2',
      border: '1px solid #ddd',
      padding: '8px',
      textAlign: 'left',
    },
    td: {
      border: '1px solid #ddd',
      padding: '8px',
    },
    note: {
      color: 'red',
      fontSize: '0.9em',
      marginTop: '10px',
    }
  };

  return (
    <div >
      <h2 >Fee Structure for Diploma in Operation Theatre</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>S. No.</th>
            <th style={styles.th}>Particulars</th>
            <th style={styles.th}>Total Fee</th>
            <th style={styles.th}>First Year</th>
            <th style={styles.th}>Second Year</th>
          </tr>
        </thead>
        <tbody>
          {feeData.map((row) => (
            <tr key={row.id}>
              <td style={styles.td}>{row.id}</td>
              <td style={styles.td}>{row.particulars}</td>
              <td style={styles.td}>{row.totalFee}</td>
              <td style={styles.td}>{row.firstYear}</td>
              <td style={styles.td}>{row.secondYear}</td>
            </tr>
          ))}
      
        </tbody>
      </table>
      <div style={styles.note}>
        <p>Note:-<br/>
        (i) Hostel Fee (Lodging & Fooding) - 48000/- (Forty Eight Thousand) per year (Optional)<br/>
        (ii) Cost of Books - 6000/- (Six Thousand rupees only) per year</p>
      </div>
    </div>
  );
};

export default OperationTheatreFeeStructure;
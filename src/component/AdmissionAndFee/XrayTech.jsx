import React from 'react';

const XrayTech = () => {
  const feeData = [
    { sl: 1, particulars: 'Admission Fee (One Time)', totalFee: 10000, firstYear: 10000, secondYear: 'XX' },
    { sl: 2, particulars: 'Tuition Fee', totalFee: 60000, firstYear: 30000, secondYear: 30000 },
    { sl: 3, particulars: 'Library Fee', totalFee: 9000, firstYear: 4500, secondYear: 4500 },
    { sl: 4, particulars: 'Lab & Transportation Fee', totalFee: 30000, firstYear: 15000, secondYear: 15000 },
    { sl: 5, particulars: 'Miscellaneous Fee', totalFee: 3000, firstYear: 1500, secondYear: 1500 },
    { sl: 6, particulars: 'Examination Fee', totalFee: 8000, firstYear: 4000, secondYear: 4000 },
    { sl: 7, particulars: 'Institute Development Fee', totalFee: 10000, firstYear: 5000, secondYear: 5000 },
  ];

  const styles = {
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginBottom: '20px',
    },
    th: {
      border: '1px solid #ddd',
      padding: '8px',
      textAlign: 'left',
      backgroundColor: '#f2f2f2',
      fontWeight: 'bold',
    },
    td: {
      border: '1px solid #ddd',
      padding: '8px',
      textAlign: 'left',
    },
    totalRow: {
      fontWeight: 'bold',
      backgroundColor: '#f0f0f0',
    },
    note: {
        color: 'red',
        fontSize: '0.9em',
        marginTop: '10px',
      }
  };

  return (
    <div>
      <h2>Fee Structure for Diploma in X-Ray Technician</h2>
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
            <tr key={row.sl}>
              <td style={styles.td}>{row.sl}</td>
              <td style={styles.td}>{row.particulars}</td>
              <td style={styles.td}>{row.totalFee}/-</td>
              <td style={styles.td}>{row.firstYear}/-</td>
              <td style={styles.td}>{row.secondYear === 'XX' ? 'XX' : `${row.secondYear}/-`}</td>
            </tr>
          ))}
          <tr style={{...styles.td, ...styles.totalRow}}>
            <td></td>
            <td >Total</td>
            <td>1,30,000/-</td>
            <td>70,000/-</td>
            <td>60,000/-</td>
          </tr>
        </tbody>
      </table>

      <div style={styles.note}>
        <p>Note:-</p>
        <p>(I) Hostel Fee (Lodging &Fooding) - 48000/- (Forty Eight thousand) per year: (Optional)</p>
        <p>(II) Cost of Books - 6000/- (Six thousand rupees only) per year.</p>
      </div>
      
    </div>
  );
};

export default XrayTech;
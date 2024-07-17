import React from 'react'

const SanitaryInspector = () => {

    const tableData = [
        { slNo: 1, particulars: 'Admission Fee (One Time)', totalFee: '10000/-', firstYear: '10000/-', secondYear: 'XX' },
        { slNo: 2, particulars: 'Tuition Fee', totalFee: '60000/-', firstYear: '30000/-', secondYear: '30000/-' },
        { slNo: 3, particulars: 'Library Fee', totalFee: '9000/-', firstYear: '4500/-', secondYear: '4500/-' },
        { slNo: 4, particulars: 'Lab & Transportation Fee', totalFee: '30000/-', firstYear: '15000/-', secondYear: '15000/-' },
        { slNo: 5, particulars: 'Miscellaneous Fee', totalFee: '3000/-', firstYear: '1500/-', secondYear: '1500/-' },
        { slNo: 6, particulars: 'Examination Fee', totalFee: '8000/-', firstYear: '4000/-', secondYear: '4000/-' },
        { slNo: 7, particulars: 'Institute Development Fee', totalFee: '10000/-', firstYear: '5000/-', secondYear: '5000/-' },
      ];
    
      const styles = {
    
        table: {
          width: '100%',
          borderCollapse: 'collapse',
        },
        th: {
          border: '1px solid #ddd',
          padding: '8px',
          textAlign: 'left',
        },
        td: {
          border: '1px solid #ddd',
          padding: '8px',
        },
        note: {
          marginTop: '20px',
          fontSize: '14px',
          color: '#ff0000',
        },
      };
    
      return (
        <div >
          <h2>Fee Structure for Diploma in Sanitary Inspector</h2>
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
              {tableData.map((row) => (
                <tr key={row.slNo}>
                  <td style={styles.td}>{row.slNo}</td>
                  <td style={styles.td}>{row.particulars}</td>
                  <td style={styles.td}>{row.totalFee}</td>
                  <td style={styles.td}>{row.firstYear}</td>
                  <td style={styles.td}>{row.secondYear}</td>
                </tr>
              ))}
              <tr >
                <td style={styles.td} ></td>
                <td style={styles.td} >Total</td>
                <td style={styles.td}>1,30,000/-</td>
                <td style={styles.td}>70,000/-</td>
                <td style={styles.td}>60,000/-</td>
              </tr>
            </tbody>
          </table>
          <div style={styles.note}>
            <p>Note:-<br/>(i) Hostel Fee (Lodging & Fooding) - 48000/- (Forty Eight Thousand) per year: (Optional)<br/>
            (ii) Cost of Books - 6000/- (Six Thousand rupees only) per year:</p>
          </div>
        </div>
  )
}

export default SanitaryInspector

import React from 'react';

const BoT = () => {
  const styles = {
    th: {
      border: '1px solid #ddd',
      padding: '8px',
      textAlign: 'left'
    },
    td: {
      border: '1px solid #ddd',
      padding: '8px',
      textAlign: 'left',
    },
    note: {
        marginTop: '20px',
        fontSize: '14px',
        color: '#ff0000',
      },
  };

  return (
    <div>
      <h2>Fee Structure for Bachelor of Occupational Therapy (BOT) Student Credit Card Available</h2>
      <table style={styles.table}>
        <thead>
          <tr style={styles.headerRow}>
            <th style={styles.th}>S. No.</th>
            <th style={styles.th}>Particulars</th>
            <th style={styles.th}>Total Fee</th>
            <th style={styles.th}>First Year</th>
            <th style={styles.th}>Second Year</th>
            <th style={styles.th}>Third Year</th>
            <th style={styles.th}>Fourth Year</th>
            <th style={styles.th}>ST/SC</th>
            <th style={styles.th}>OBC/GEN</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.td}>1</td>
            <td style={styles.td}>Admission Fee(One Time)</td>
            <td style={styles.td}>10000/-</td>
            <td style={styles.td}>10000/-</td>
            <td style={styles.td}>XX</td>
            <td style={styles.td}>XX</td>
            <td style={styles.td}>XX</td>
            <td style={styles.td}>10000/-</td>
            <td style={styles.td}>10000/-</td>
          </tr>
          <tr>
            <td style={styles.td}>2</td>
            <td style={styles.td}>Tuition Fee</td>
            <td style={styles.td}>300000/-</td>
            <td style={styles.td}>75000/-</td>
            <td style={styles.td}>75000/-</td>
            <td style={styles.td}>75000/-</td>
            <td style={styles.td}>75000/-</td>
            <td style={styles.td}>288000/-</td>
            <td style={styles.td}>300000/-</td>
          </tr>
          <tr>
            <td style={styles.td}>3</td>
            <td style={styles.td}>Examination Fee</td>
            <td style={styles.td}>16000/-</td>
            <td style={styles.td}>4000/-</td>
            <td style={styles.td}>4000/-</td>
            <td style={styles.td}>4000/-</td>
            <td style={styles.td}>4000/-</td>
            <td style={styles.td}>10000/-</td>
            <td style={styles.td}>16000/-</td>
          </tr>
          <tr>
            <td style={styles.td}>4</td>
            <td style={styles.td}>Laboratory & Transportation Fee</td>
            <td style={styles.td}>52000/-</td>
            <td style={styles.td}>13000/-</td>
            <td style={styles.td}>13000/-</td>
            <td style={styles.td}>13000/-</td>
            <td style={styles.td}>13000/-</td>
            <td style={styles.td}>52000/-</td>
            <td style={styles.td}>52000/-</td>
          </tr>
          <tr>
            <td style={styles.td}>5</td>
            <td style={styles.td}>Institute Development Fee</td>
            <td style={styles.td}>28000/-</td>
            <td style={styles.td}>7000/-</td>
            <td style={styles.td}>7000/-</td>
            <td style={styles.td}>7000/-</td>
            <td style={styles.td}>7000/-</td>
            <td style={styles.td}>28000/-</td>
            <td style={styles.td}>28000/-</td>
          </tr>
          <tr>
            <td style={styles.td}>6</td>
            <td style={styles.td}>Miscellaneous Fee</td>
            <td style={styles.td}>4000/-</td>
            <td style={styles.td}>1000/-</td>
            <td style={styles.td}>1000/-</td>
            <td style={styles.td}>1000/-</td>
            <td style={styles.td}>1000/-</td>
            <td style={styles.td}>4000/-</td>
            <td style={styles.td}>4000/-</td>
          </tr>
          <tr>
            <td style={styles.td} ></td>
            <td style={styles.td} >Total</td>
            <td style={styles.td}>4,10,000/-</td>
            <td style={styles.td}>1,10,000/-</td>
            <td style={styles.td}>1,00,000/-</td>
            <td style={styles.td}>1,00,000/-</td>
            <td style={styles.td}>1,00,000/-</td>
            <td style={styles.td}>3,92,000/-</td>
            <td style={styles.td}>4,10,000/-</td>
          </tr>
        </tbody>
      </table>
      <div style={styles.note}>
        <p>Note:- <br/>(I) Hostel Fee (Lodging &Fooding) - 48000/- (Forty Eight thousand) per year (Optional)</p>
        <p>(II) Cost of Books - 6000/- (Six thousand rupees only) per year.</p>
      </div>
    </div>
  );
};

export default BoT;
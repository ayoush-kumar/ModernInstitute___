import React from 'react'
import { Box, Typography } from '@mui/material'
import search from '../../assets/images/search.png';
import styles from '../../style/layout.module.css';

const SubjectHeading = () => {
  return (
    <div>
          <Box
        sx={{

          display: 'flex',
          flexDirection: "column",
          mx: 2.4,
          mt:2,
         
        }}
      >
      
        <Typography variant='h3' component='div'  className={styles.facultyPageIcon}><img src={search} /></Typography>
      <Typography variant='h3' component='div'  className={styles.facultyPageIcon} sx={{fontFamily:"DM Sans"}}>Subjects Modern Group Of Institute</Typography>
      
      </Box>
    </div>
  )
}

export default SubjectHeading
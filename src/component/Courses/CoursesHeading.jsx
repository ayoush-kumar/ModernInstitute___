import React from 'react'
import { Box, Typography } from '@mui/material'
import search from '../../assets/images/search.png'
const CoursesHeading = () => {
  return (
    <>
     <Box sx={{
        m: 1.4, display: "flex",
        flexDirection: "column",
       
      }} >
        <Typography component="div"
          sx={{ display: "flex", justifyContent: "center" }}
        >
        <img src={search} alt='no image' height="75px"/>
        
        </Typography>

        <Box sx={{display:"flex",justifyContent:"center"}}>
           <Typography variant='h3' component="div"
 sx={{fontFamily:"DM Sans"}}
        >
         Search Courses</Typography>
      
        </Box>
     
      
      </Box>
    
    </>
  )
}

export default CoursesHeading

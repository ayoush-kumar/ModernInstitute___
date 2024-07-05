import React from 'react'
import { Box, Typography } from '@mui/material'
import faculty from '../../../assets/images/faculty.png'
const BlogHeading = () => {
  return (
    <div>
        <Box
        sx={{
         
        mx: 2,
          
          mt:2,
        
        }}>
        <Typography variant='h3' sx={{textAlign:"center"}} component='div'   ><img  src={faculty} /></Typography>
      
         <Typography variant='h2' component='div' sx={{fontFamily:"DM Sans",textAlign:"center"}}> 
Blogs</Typography>
      </Box>
    </div>
  )
}

export default BlogHeading

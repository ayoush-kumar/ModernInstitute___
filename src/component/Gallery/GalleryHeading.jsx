import React from 'react'
import { Typography,Box } from '@mui/material';
import styles from '../../style/layout.module.css';

const GalleryHeading = () => {
  return (
    <div>
          <Box sx={{display:"flex",justifyContent:"center", mt:1}}>
           <Typography variant='h2' component="div"
 sx={{fontFamily:"DM Sans",color:"#193a8a"}} className={styles.galleryHeading}
        >
    Our   Gallery</Typography>
      
        </Box>
     
      
      
    </div>
  )
}

export default GalleryHeading

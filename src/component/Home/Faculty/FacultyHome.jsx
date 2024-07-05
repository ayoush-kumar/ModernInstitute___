import React from 'react'
import { Typography, Box, Card, CardContent, Button, CardMedia, CardActions } from '@mui/material'
import { FindOut } from '../../../Data/AboutUs/FindOut'
import styles from '../../../style/layout.module.css';

import search from '../../../assets/images/search.png'
function FacultyHome() {
  return (
    <div>
          <Box
        sx={{
            
          display: 'flex',
          flexDirection: "column",
          mx: 2.4,
          mt:2,
          
        }}

        className ={styles}
      >
      
        <Typography variant='h3' component='div'   ><img  src={search} /></Typography>
      <Typography variant='h3' component='div' sx={{fontFamily:"DM Sans"}}>Find out more about us</Typography>
      
      </Box>
        <Box   sx={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",mb:2}}>
        {FindOut.map((item,index) => (
          
<Card  key={index} sx={{ maxWidth: 400 ,border:"1px solid black ", mt:2}}>
      <CardMedia
        component="img"
        alt="FacultyImg"
        height="150"
        image={item.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="black">
          {item.title}
        </Typography>
        <Typography variant="body2" color="black" >
    {item.des}
        </Typography>
      </CardContent>
       <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

        )
        )}

       
    
      </Box>
    </div>
  )
}

export default FacultyHome;

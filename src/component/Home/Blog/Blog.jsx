import React from 'react'
import { Typography, Card, CardContent, CardActionArea, CardMedia, Box } from '@mui/material';
import {DepartmentSubjInfo} from  '../../../Data/Department/DepartmentSubjInfo';

const Blog = () => {
  return (
    <div>
      
       <Box sx={{
        display: "flex", flexWrap: "wrap", justifyContent: "center", 
       
          marginTop: "1rem",marginBottom:"1rem"
        }}>
      {DepartmentSubjInfo.map((SubjInfo, index) => (
        <Card key={index} sx={{ maxWidth: 345, marginTop:"1rem",   marginRight:"1rem",boxShadow: '0px 3px 6px rgba(0, 0, 1, 1.16)'}}>
        
      
        
          <CardActionArea>
            <CardMedia
              component="img"
             
              image={SubjInfo.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" >
                {SubjInfo.title}
              </Typography>
              <Typography gutterBottom variant="body2" color="text.secondary">
                {SubjInfo.des}
              </Typography>
            
            </CardContent>
          </CardActionArea>

      
    
        </Card>
          
          
      ))}
      </Box>
     
     
    </div>
  )
}

export default Blog

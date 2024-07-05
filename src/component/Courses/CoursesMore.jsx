import React from 'react'
import {Typography,Card,CardContent,CardActionArea,CardMedia ,Box} from '@mui/material'
import { DepartmentSubjInfo } from '../../Data/Department/DepartmentSubjInfo'
const CoursesMore = () => {
  return (
    <div>
      
        <Box sx={{
          display: "flex", flexWrap: "wrap", justifyContent: "center", justifyContent: "space-evenly",
          marginTop: "1rem",marginBottom:"1rem"
      }}>
          {DepartmentSubjInfo.map((SubjInfo, index) => (
      
            <Card sx={{
              maxWidth: 400,boxShadow: '0px 3px 6px rgba(0, 0, 1, 1.16)',mt:1
            }} >
         <CardActionArea>
            <CardMedia
              component="img"
              height="50%"
              image={SubjInfo.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" >
                {SubjInfo.title}
                  </Typography>
                    <Typography gutterBottom variant="body2" component="div" color="text.secondary" >
                new topic or course
              </Typography>
              <Typography gutterBottom variant="body2" color="black">
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

export default CoursesMore

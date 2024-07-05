import React from 'react'
import { Card, CardContent, CardActions, Typography, Button, Box, Divider } from '@mui/material'
import { SubDepartmentDes }  from '../../Data/AboutUs/SubDepartmentDes'
const SubjectDepartment = () => {
  return (
    <div>
      
      <Box
       sx={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}
      
      >
        {SubDepartmentDes.map((department, index) => (
        
          <Card key={index} sx={{maxWidth: 400, mt:2}} >
      <CardContent>
              <Typography
                sx={{fontFamily:"DM Sans"}}
                variant="h4" component="div" gutterBottom>
        {department.title}</Typography>
        
        <Typography sx={{fontFamily:"DM Sans"}} color="black" variant="body2">
      {department.des}
      
         
        </Typography>
            </CardContent>
            <Divider/>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

      ))}
      
     
        

          

     
      </Box>
     
       
    </div>
  )
}

export default SubjectDepartment

import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import faculty from '../../../assets/images/faculty.png'
import Group237648 from '../../../assets/images/Group237648.png'

const EligibiltyHeading = () => {
    const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };
  return (
    <div>
      <Box sx={{

          display: 'flex',
        
          mx: 2.4,
          mt:2,
        
        }}>
        <Box
        sx={{

            display: 'flex',
          
          flexDirection: "column",
          mx: 2.4,
            mt: 2,
          width:"50%"
        
        }}
      >
      
        <Typography variant='h3' component='div' ><img src={faculty}   /></Typography>
        <Box>
            <Typography gutterBottom variant='h3' component='div' sx={{
              fontFamily: "DM Sans"
            }}>Eligibility For Admission</Typography>
            <Typography    variant='body2' component='div' sx={{ fontFamily: "DM Sans",mt:3 }}>A person who has passed S.S.Examination or equivalent thereof is eligible to apply for admission to I.A. /I.Sc. /I.Com. Classes . For Admission to B.A (Hons) / B.Sc.(Hons) / B.com. (Hons) the applicant should have passed I.A./I.Sc./I.Com or an examination equivalent thereof.</Typography>

            <Typography gutterBottom variant='body2' component='div' sx={{ fontFamily: "DM Sans", mt: 3.5 }}>Application for admission is no guarantee for selection. Admission shall be taken in all categories purely on merit basis.</Typography>
            

           < Typography gutterBottom variant='body2' component='div' sx={{ fontFamily: "DM Sans" ,mt:3.5}}>Student selected for admission must get themselves admitted within time given to them ,failing which,the seat offered to them may be given to a candidate next in order of merit.
The number of seats in all the three faculties is fixed and no admission shall ordinarily be made beyond the sanctioned limit.
The application form along with a copy of the prospectus of the college may be had from sales counter for Rs.250/- during the working hours of the office on any working day .
Admission to I.A./I.Sc./I.Com. classes will be made on recommendation of the admission /Selection Committee and approval of the Principal.
Admission in B.A(Hons),B.Sc(Hons) and B.Com(Hons) shall be made on scrutiny of application by the H.O.D.'s concerned and their recommendation after approval of the Principal.
Students Selected for admission will have to submit their Marksheets S.L.C / C.L.C. Migration in original.</Typography>
        </Box>
    
      
        </Box>
        <Typography component="div" sx={{width:"50%",p:2 }}>
          
    
          
          <img src={Group237648} alt="noImage" width="100%" style={imageStyle} />
          </Typography>
         
    
      </Box>
      
      


         
    </div>
  )
}

export default EligibiltyHeading


import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, InputBase,Typography,InputAdornment,TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const CoursesSearchTool = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (e) => {
    setAge(e.atrget.value);
  };
  
  return (
    <>
      
      <Box sx={{
        display: "flex", justifyContent: "space-between",
        justifyContent:"space-around",flexWrap: "wrap",
   }}>
      
      
     
        <Box sx={{mt:2}}>
          
            <TextField sx={{ minWidth:400 ,maxWidth:790}}
        id="input-with-icon-textfield"
        label="FindCourse"
        InputProps={{
        endAdornment: (
            <InputAdornment position="start">
              <SearchIcon/>
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />

      </Box>


        <Box sx={{  display: "flex",m:2}}>
          <Box sx={{ minWidth: 290, maxWidth: 380 }}>
          
         
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Search Course"
          onChange={handleChange}
        >
          <MenuItem value={10}>P</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
            </FormControl>
          </Box> 
          <Box sx={{display:'flex',alignItems:"center",mx:1}}>
                 <Button  variant='contained' size="small">Search</Button>
          </Box>
   
      </Box>

         </Box>
    </>
  )
}

export default CoursesSearchTool

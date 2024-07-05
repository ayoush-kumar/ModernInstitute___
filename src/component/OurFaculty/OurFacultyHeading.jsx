import React from "react";
import { Box, Typography } from "@mui/material";
import faculty from "../../assets/images/faculty.png";
import styles from "../../style/layout.module.css";

const OurFacultyHeading = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mx: 2.4,
          mt: 2,
          whiteSpace: "nowrap"
        }}
      >
        <Typography
          variant="h3"
          component="div"
          className={styles.facultyPageIcon}
        >
          <img src={faculty} alt="" />
        </Typography>
        <Box>
          <Typography
            variant="h3"
            component="div"
            sx={{ fontFamily: "DM Sans" }}
            className={styles.facultyPageIcon}
          >
            Our Faculty
          </Typography>
          {/* <Typography variant='h3' component='div' sx={{ fontFamily: "DM Sans" }}>
            <IconButton>
            <ArrowBackIosNewIcon/>
            </IconButton>
          </Typography>
         */}
        </Box>
      </Box>
    </div>
  );
};

export default OurFacultyHeading;

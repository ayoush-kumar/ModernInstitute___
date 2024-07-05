import { Typography } from "@mui/material";
import React from "react";
import report from "../../assets/images/report.png";

const NaacReportCard = () => {
  return (
    <div>
      <Typography
        component="div"
        sx={{ display: "flex", justifyContent: "center", height: 400 }}
      >
        <img src={report} alt="" />
      </Typography>
    </div>
  );
};

export default NaacReportCard;

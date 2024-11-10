import { Grid } from "@mui/material";
import React from "react";
import ContentUsagePieChart from "./ContentUsagePieChart";
import SyllabusChart from "./SyllabusChart";
import TodayInformation from "./TodayInformation";

const Row3 = () => {
  const contentBoxStyles={
    padding: "16px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    backgroundColor:"white",
    height: "33vh"
  }
  const borderRadiusStyle= {
    borderRadius:"0.3rem"
  }
  return (
    <>
      {/* Row3 Grid items arranged in one row */}
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <div style={{  ...contentBoxStyles , ...borderRadiusStyle}}>
        
          <ContentUsagePieChart />
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <div style={{  ...contentBoxStyles, ...borderRadiusStyle}}>
          <SyllabusChart />
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <div style={{ ...contentBoxStyles , ...borderRadiusStyle}}>
          <TodayInformation />
        </div>
      </Grid>
    </>
  );
};

export default Row3;

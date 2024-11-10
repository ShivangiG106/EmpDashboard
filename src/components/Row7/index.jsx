import { Grid } from "@mui/material";
import React from "react";
import TestDetails from "./TestDetails";
import ClassTaken from "./ClassTaken";
import TimeTable from "./TimeTable";





const Row7 = () => {
  const contentBoxStyles={
    padding: "16px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    backgroundColor:"white",
    
  }
  const borderRadiusStyle= {
    borderRadius:"0.3rem"
  }
  return (
    <>
      {/* Row4 Grid items arranged in one row, same widths as Row3 */}
    
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <div style={{ ...contentBoxStyles, ...borderRadiusStyle , height: "30vh" }}>
          < TestDetails/>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <div style={{ ...contentBoxStyles, ...borderRadiusStyle , height: "30vh"}}>
          <ClassTaken />
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <div style={{  ...contentBoxStyles, ...borderRadiusStyle , height: "85%"}}>
          <TimeTable />
        </div>
      </Grid>
    </>
  );
};

export default Row7;

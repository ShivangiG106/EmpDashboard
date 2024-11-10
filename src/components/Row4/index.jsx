import { Grid } from "@mui/material";
import React from "react";
import FeeDetailsChart from "./FeeDetailsChart";


const Row4 = () => {
  const contentBoxStyles={
    padding: "16px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    backgroundColor:"white"
  }
  const borderRadiusStyle= {
    borderRadius:"0.3rem"
  }
  return (
    <>
      {/* Row4 Grid items arranged in one row, same widths as Row3 */}
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <div style={{  ...contentBoxStyles , height: "30vh", ...borderRadiusStyle}}>
          <FeeDetailsChart />
        </div>
      </Grid>
    
    </>
  );
};

export default Row4;

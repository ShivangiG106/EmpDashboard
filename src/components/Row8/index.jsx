import { Grid } from "@mui/material";
import React from "react";

import StudentPresent from "./StudentPresent";
import EmployeePresent from "./EmployeePresent";





const Row8 = () => {
  const contentBoxStyles={
    padding: "16px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    backgroundColor:"white",
    height: "95%",
   
  }
  const borderRadiusStyle= {
    borderRadius:"0.3rem"
  }
  return (
    <>
      {/* Row4 Grid items arranged in one row, same widths as Row3 */}
    
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <div style={{  ...contentBoxStyles , ...borderRadiusStyle}}>
          < StudentPresent/>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <div style={{  ...contentBoxStyles , ...borderRadiusStyle}}>
          <EmployeePresent />
        </div>
      </Grid>
  
    </>
  );
};

export default Row8;

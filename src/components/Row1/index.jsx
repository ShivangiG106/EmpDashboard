import { Grid } from "@mui/material";
import React from "react";
import DashboardTitle from "./DashboardTitle";
import SchoolSelection from "./SchoolSelection";
import "../../../src/index.css";

const Row1 = () => {
  return (
    <Grid container spacing={2} style={{ marginTop: "4px", alignItems: "stretch" }}>
      {/* Dashboard Title */}
      <Grid item xs={12} sm={12} md={8} lg={8} xl={8}  style={{ display: 'flex' }}>
        <div className="content-box" style={{ flex: 1 }}>
          <DashboardTitle />
        </div>
      </Grid>

      {/* First School Selection Dropdown */}
      <Grid item xs={12} sm={6} md={2} lg={2} xl={2}  style={{ display: 'flex' }}>
        <div className="content-box" style={{ padding: "9px" , flex: 1}}>
          {" "}
          {/* Adjusted padding */}
          <SchoolSelection label="Select School" />
        </div>
      </Grid>

      {/* Second School Selection Dropdown */}
      <Grid item xs={12} sm={6} md={2} lg={2} xl={2} style={{ display: 'flex' }}>
        <div className="content-box" style={{ padding: "9px" , flex: 1 }}>
          {" "}
          {/* Adjusted padding */}
          <SchoolSelection label="Select School" />
        </div>
      </Grid>
    </Grid>
  );
};

export default Row1;

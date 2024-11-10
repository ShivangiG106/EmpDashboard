import { Grid } from "@mui/material";
import React from "react";
import NotificatonSummary from "./NotificatonSummary";
import DateTimeDisplay from "./DateTimeDisplay";
import "../../../src/index.css";

const Row2 = () => {
  return (
    <Grid container spacing={2} style={{ marginTop: "4px", alignItems: "stretch" }}>
      {/* First Grid Item */}
      <Grid item xs={12} sm={12} md={10} lg={10} xl={10} style={{ display: 'flex' }}>
        <div className="content-box" style={{ flex: 1 }}>
          <NotificatonSummary />
        </div>
      </Grid>

      {/* Second Grid Item */}
      <Grid item xs={12} sm={12} md={2} lg={2} xl={2} style={{ display: 'flex' }}>
        <div
          className="content-box"
          style={{
            flex: 1,
            padding: "5px",
          }}
        >
          <DateTimeDisplay />
        </div>
      </Grid>
    </Grid>
  );
};

export default Row2;

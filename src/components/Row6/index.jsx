import { Grid } from "@mui/material";
import React from "react";
import QueryDetails from "./QueryDetails";
import ContentUsage from "./ContentUsage";
import "../../../src/index.css";

const Row6 = () => {
  return (
    <>
      {/* Row4 Grid items arranged in one row, same widths as Row3 */}

      <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
        <div className="content-box" >
          <ContentUsage />
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <div className="content-box" style={{ height: "30vh" }}>
          <QueryDetails />
        </div>
      </Grid>
    </>
  );
};

export default Row6;

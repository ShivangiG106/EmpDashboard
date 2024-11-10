import { Grid } from "@mui/material";
import Row1 from "./components/Row1";
import Row2 from "./components/Row2";
import Row3 from "./components/Row3";
import Row4 from "./components/Row4";
import Sidebar from "./components/Sidebar/Sidebar";
import Row5 from "./components/Row5";
import WeeklyTaskPanel from "./components/WeeklyTask/WeeklyTaskPanel";
import Row6 from "./components/Row6";
import Row7 from "./components/Row7";
import Row8 from "./components/Row8";
import './App.css'
import './index.css'

function App() {
  const contentBoxStyles={
    padding: "16px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    backgroundColor:"white"
  }
  const outerContainerStyle = {
    backgroundColor: "#f0f2f5", // Light gray background color for the outer container
    padding: "20px", // Optional padding to create spacing around the inner content
overflow:"hidden"

  };

  const borderRadiusStyle= {
    borderRadius:"0.3rem"
  }

  return (
    <div style={outerContainerStyle}>
      {/* Full-width Rows at the top - Row1 and Row2 */}
      {/* These rows are not nested within the main content grid, so they span the entire width of the screen */}
      <Row1 />
      <Row2 />

      {/* Main Layout Grid that contains both the main content and the sidebar */}
      <Grid container spacing={2} style={{ marginTop: "4px" }}>
        
        {/* Main Content Area - Adjusts width based on screen size */}
        <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
          <Grid container spacing={2}> {/* Nested container to manage internal layout within the main content */}

            {/* Row3: Full-width row within the main content area */}
            <Row3 />

            {/* Row4 and Row5 Section - Combined to span 8 out of 10 columns on medium screens and above */}
            <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
              <Grid container spacing={2}>
                <Row4 />
                <Row5 />
              </Grid>
            </Grid>

            {/* WeeklyTaskPanel: Positioned beside Row4 and Row5, occupying 4 out of 10 columns on medium screens and above */}
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <div
                style={{
                  ...contentBoxStyles,
            
                  ...borderRadiusStyle
                }}
              >
                <WeeklyTaskPanel />
              </div>
            </Grid>

            {/* Row6: Full-width row within the main content area */}
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Grid container spacing={2}>
                <Row6 />
              </Grid>
            </Grid>

            {/* Row7: Full-width row within the main content area */}
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Grid container spacing={2}>
                <Row7 />
              </Grid>
            </Grid>

            {/* Row8: Full-width row within the main content area */}
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Grid container spacing={2}>
                <Row8 />
              </Grid>
            </Grid>

          </Grid>
        </Grid>

        {/* Sidebar Area - Adjusts width based on screen size, hides on extra-small screens */}
        <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
          <div
            style={{
              ...contentBoxStyles,
              // height: "223.5vh", 
              // Sets a taller height for the sidebar to span more vertical space
              ...borderRadiusStyle
            }}
          >
            <Sidebar />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

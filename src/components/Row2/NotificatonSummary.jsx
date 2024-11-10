import React from "react";
import { Grid } from "@mui/material";
import "./NotificationSummary.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArticleIcon from "@mui/icons-material/Article";
import EventIcon from "@mui/icons-material/Event";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CampaignIcon from "@mui/icons-material/Campaign";

const NotificationSummary = () => {
  const items = [
    { count: 30, label: "Notice", icon: <NotificationsIcon style={{ fontSize: "40px", color: "#8e44ad" }} /> },
    { count: 20, label: "News", icon: <ArticleIcon style={{ fontSize: "40px", color: "#e67e22" }} /> },
    { count: 10, label: "Events", icon: <EventIcon style={{ fontSize: "40px", color: "#3498db" }} /> },
    { count: 9, label: "Holidays", icon: <BeachAccessIcon style={{ fontSize: "40px", color: "#2ecc71" }} /> },
    { count: 12, label: "Open Query", icon: <HelpOutlineIcon style={{ fontSize: "40px", color: "#9b59b6" }} /> },
    { count: 17, label: "Assign Query", icon: <AssignmentIcon style={{ fontSize: "40px", color: "#e74c3c" }} /> },
    { count: 14, label: "Public Notice", icon: <CampaignIcon style={{ fontSize: "40px", color: "#2980b9" }} /> },
  ];

  return (
    <Grid container spacing={2} className="notification-container" style={{marginTop: "0px"}}>
      {items.map((item, index) => (
        <Grid item xs={6} sm={4} md={1.7} lg={1.7} key={index} className="notification-item">
          <div className="icon-container">{item.icon}</div>
          <div className="text-container" >
            <div className="count">{item.count}</div>
            <div className="label" style={{ whiteSpace: "wrap" }}>{item.label}</div>

            {/* <div className="label">{item.label}</div> */}
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default NotificationSummary;

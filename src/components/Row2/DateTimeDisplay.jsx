import React from "react";
import "./DateTimeDisplay.css";
import EventIcon from "@mui/icons-material/Event";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const DateTimeDisplay = () => {
  return (
    <div className="DateTimeDisplay-container">
      {/* Top Section: Icon with Time and Date */}
      <div className="DateTimeDisplay-top-section" style={{display:"flex" , gap:"12px"}}>
        <div>

        <EventIcon className="DateTimeDisplay-event-icon" />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span className="DateTimeDisplay-time">11 : 30 AM</span>
          <span className="DateTimeDisplay-date">15 Oct 2024 / Wednesday</span>
        </div>
      </div>

      {/* Bottom Section: Class and Time Range */}
      <div className="DateTimeDisplay-bottom-section">
        <AccessTimeIcon className="DateTimeDisplay-access-time-icon" />
        <span className="DateTimeDisplay-class-name">Hindi Class</span>
        <span className="DateTimeDisplay-time-range"> / 11:40 AM - 12:25 PM</span>
      </div>
    </div>
  );
};

export default DateTimeDisplay;

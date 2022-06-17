import React from "react";
import "./AllIssues.css";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

function AllIssues({ onAllIssuesChange }) {
  const handleChange = (e) => {
    onAllIssuesChange(e.target.id);
  };
  return (
    <div className="all-issues">
      <div className="closed-issues-icon">
        <CircleOutlinedIcon id="closed-issues-icon" />
      </div>
      <div onClick={handleChange} id="allissues" className='closed-issues-name'>
        All Issues
      </div>
    </div>
  );
}

export default AllIssues;

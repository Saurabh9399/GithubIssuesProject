import React from "react";
import "./AllIssues.css";

function AllIssues({ onAllIssuesChange }) {
  const handleChange = (e) => {
    onAllIssuesChange(e.target.id);
  };
  return (
    <div className="all-issues">
      <div onClick={handleChange} id="allissues">
        All Issues
      </div>
    </div>
  );
}

export default AllIssues;

import React from "react";
import OneIssue from "./OneIssue";
import "./ShowIssues.css";

function ShowIssues(props) {
  console.log("data item", props.AllIssues);
  console.log("data state", props.issueState);

  return (
    <div className="show-issues">
      {props.issueState !== "allissues"
        ? props.currentIssues.map((item) => {
            return <OneIssue key={item.id} data={item} />;
          })
        : props.AllIssues.map((item) => {
            return <OneIssue key={item.id} data={item} />;
          })}
    </div>
  );
}

export default ShowIssues;

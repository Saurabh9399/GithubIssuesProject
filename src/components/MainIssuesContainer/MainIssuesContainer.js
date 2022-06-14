import React, { useEffect, useState } from "react";
import IssuesContainerLeft from "./IssuesContainerLeft/IssuesContainerLeft";
import IssuesContainerRight from "./IssuesContainerRight/IssuesContainerRight";
import "./MainIssuesContainer.css";
import ShowIssues from "./ShowIssues";

function MainIssuesContainer() {
  const [Issues, setIssues] = useState([]);
  const [currentIssues, setCurrentIssues] = useState([]);
  const [issueState, setIssueState] = useState();
  

  const [label, setLabel] = useState();
  const [assignee, setAssignee] = useState();

  useEffect(()=>{
    fetchData()
  })

  useEffect(() => {
    console.log("change Label", label);
    console.log("change Assignee", assignee);
    iterateIssueForLabel(label);
  }, [label]);

  useEffect(() => {
    setCurrentIssues(Issues.filter(issue => issue.state === issueState));
  },[issueState])

  const iterateIssueForLabel=(label)=>{
    setCurrentIssues(Issues.filter((element)=>{
      return filterLabel(element, label)

    }))
  }
  
  const fetchData = async () => {
      await fetch("https://api.github.com/repos/pallets/click/issues?state=all&per_page=100")
        .then((res) => res.json())
        .then((data) => setIssues(data))
        .catch((err) => {
          console.log(err);
        });
  };

  const onChangeLabel = (value) => {
    setLabel(value);

  };

  const onChangeAssignee = (value) => {
    setAssignee(value);
  };

  const onChangeState = (value) => {
    setIssueState(value);
    console.log("IssuesState",value);
  }

  const LabelHelper = (issue, label) => {
    let issue_labels = issue.labels
    let label_present = false
    issue_labels.forEach(element => {
      console.log(element.name)
      if(element.name === label){
        label_present = true
      }
      
    });
    return label_present

  }

  const filterLabel = (issue, label) => {
    if(issue.state === issueState && LabelHelper(issue, label)){
      return true
      
    }
    else{
      return false
    }
    // else{
    //   AssigneeHelper();
    // }
  }


  // console.log("data",openIssues);
  // console.log("closed issues", closedIssues);
  // console.log("openClick", openClick);

  return (
    <div className="main-issues-container">
      <div className="main-issues-nav">
        <IssuesContainerLeft
          onChangeState={onChangeState}
        />
        <IssuesContainerRight
          // openIssues={openIssues}
          onChangeLabel={onChangeLabel}
          onChangeAssignee={onChangeAssignee}
        />
      </div>
      <div className="main-issues-display">
      {<ShowIssues Issues={currentIssues} />}
      </div>
    </div>
  );
}

export default MainIssuesContainer;

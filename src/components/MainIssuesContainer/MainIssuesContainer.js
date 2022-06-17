import React, { useEffect, useState } from "react";
import IssuesContainerLeft from "./IssuesContainerLeft/IssuesContainerLeft";
import IssuesContainerRight from "./IssuesContainerRight/IssuesContainerRight";
import "./MainIssuesContainer.css";
import ShowIssues from "./ShowIssues";

function MainIssuesContainer() {
  const [Issues, setIssues] = useState([]);
  const [AllIssues, setAllIssues] = useState([]);
  // const [AllIssuesState, setAllIssuesState] = useState();
  const [currentIssues, setCurrentIssues] = useState([]);
  // urls array
  let urlArray = [];

  const [issueState, setIssueState] = useState();

  const [label, setLabel] = useState();
  const [assignee, setAssignee] = useState();

  // page number
  const [pageNumber,setPageNumber] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    Fun();
  },[])

  // useEffect(() => {
  //   fetchDataFromUrlArray();
  // },[])

  useEffect(() => {
    console.log("change Label", label);
    console.log("change Assignee", assignee);
    iterateIssueForLabel(label);
    // iterateIssueForAssignee(assignee);
  }, [label]);

  useEffect(() => {
    setCurrentIssues(Issues.filter((issue) => issue.state === issueState));
  }, [issueState]);

  const iterateIssueForLabel = (label) => {
    setCurrentIssues(
      Issues.filter((element) => {
        return filterLabel(element, label);
      })
    );
  };
  // const iterateIssueForAssignee=(assignee)=>{
  //   setCurrentIssues(Issues.filter((element)=>{
  //     return filterLabel(element, assignee)

  //   }))
  // }
  const fetchData = async () => {
    await fetch(
      "https://api.github.com/repos/pallets/click/issues?state=all&page=1"
    )
      .then((res) => {
        // console.log(res.headers , "res123")
        let page_no = 1;

        for (var pair of res.headers.entries()) {
          if (pair[0] === "link") {
            let urlStringArray = pair[1].split(",");
            console.log("urlStringArray", urlStringArray);
            urlStringArray.forEach((element) => {
              let relationString = element.split(";")[1].trim();
              let relation = relationString
                .split("=")[1]
                .replace('"', " ")
                .replace('"', " ")
                .trim();
              if (relation === "last") {
                console.log(relation);
                let url = element
                  .split(";")[0]
                  .replace("<", " ")
                  .replace(">", " ")
                  .trim();
                console.log(url);
                page_no = parseInt(url.split("&")[1].split("=")[1]);
                setPageNumber(page_no);
                console.log(pageNumber);
              }
            });
          }
          console.log(pair[0] + ": " + pair[1], "abc");
        }
        return res.json();
      })
      .then((data) => setIssues(data))
      .catch((err) => {
        console.log(err);
      });

  };

  // pushing all page urls to urlArray
  for (let i = 2; i <= pageNumber; i++) {
    urlArray.push(
      "https://api.github.com/repos/pallets/click/issues?state=all&page="+i
    );
  }

  const Fun = async () => {
    
    for(let i=2;i<urlArray.length;i++){
      console.log("Inside for")
      await fetch(urlArray[i])
      .then((res) => res.json())
      .then((data) => setIssues(...Issues,data))
      
    }
    
  }
  console.log("urlArray", urlArray);

  const onAllIssuesChange = (value) => {
    setAllIssues(Issues);
    setIssueState(value);
    console.log("allissuesclick", value);
  };

  const onChangeLabel = (value) => {
    setLabel(value);
  };

  const onChangeAssignee = (value) => {
    setAssignee(value);
  };

  const onChangeState = (value) => {
    setIssueState(value);
    setAllIssues(Issues.filter((issue) => issue.state === issueState));
    console.log("IssuesState", value);
  };

  const LabelHelper = (issue, label) => {
    let issue_labels = issue.labels;
    let label_present = false;
    issue_labels.forEach((element) => {
      console.log(element.name);
      if (element.name === label) {
        label_present = true;
      }
    });
    return label_present;
  };

  // const AssigneeHelper = (issue, assignee) => {
  //   let issue_assignee =  issue.assignees
  //   let assignee_present = false
  //   issue_assignee.forEach(element => {
  //     console.log(element.login)
  //     if(element.login === assignee){
  //       assignee_present = true
  //     }

  //   });
  //   return assignee_present

  // }

  const filterLabel = (issue, label) => {
    if (issue.state === issueState && LabelHelper(issue, label)) {
      return true;
    }
    return false;
  };

  // const filterAssignee = (issue, assignee) => {
  //   if(issue.state === issueState && AssigneeHelper(issue, assignee)){
  //     return true
  //   }
  //     return false
  // }

  // console.log("data",openIssues);
  // console.log("closed issues", closedIssues);
  // console.log("openClick", openClick);

  // const fetchDataFromUrlArray = async () => {

  //   console.log("urlArray fetching data",Issues);

     
    

  // }

  return (
    <div className="main-issues-container">
      <div className="main-issues-nav">
        <IssuesContainerLeft
          onChangeState={onChangeState}
          onAllIssuesChange={onAllIssuesChange}
        />
        <IssuesContainerRight
          // openIssues={openIssues}
          onChangeLabel={onChangeLabel}
          onChangeAssignee={onChangeAssignee}
        />
      </div>
      <div className="main-issues-display">
        {
          <ShowIssues
            currentIssues={currentIssues}
            AllIssues={AllIssues}
            issueState={issueState}
          />
        }
      </div>
    </div>
  );
}

export default MainIssuesContainer;

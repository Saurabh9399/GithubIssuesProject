import React, { useState } from 'react'
import IssuesContainerLeft from './IssuesContainerLeft/IssuesContainerLeft'
import IssuesContainerRight from './IssuesContainerRight/IssuesContainerRight'
import "./MainIssuesContainer.css"
import ShowIssues from './ShowIssues'

function MainIssuesContainer() {
  const [openIssues,setOpenIssues] = useState([]);
  const [closedIssues,setClosedIssues] = useState([]);

  console.log("data",openIssues);
  
  return (
    <div className='main-issues-container'>
        <div className='main-issues-nav'>
            <IssuesContainerLeft setOpenIssues={setOpenIssues} setClosedIssues={setClosedIssues}/>
            <IssuesContainerRight />
        </div>
        <div className='main-issues-display'>
            <ShowIssues openedIssues={openIssues} closedIssues={closedIssues}/>
        </div>
    </div>
  )
}

export default MainIssuesContainer
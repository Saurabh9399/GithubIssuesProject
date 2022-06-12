import React, { useState } from 'react'
import IssuesContainerLeft from './IssuesContainerLeft/IssuesContainerLeft'
import IssuesContainerRight from './IssuesContainerRight/IssuesContainerRight'
import "./MainIssuesContainer.css"
import ShowIssues from './ShowIssues'

function MainIssuesContainer() {
  const [openIssues,setOpenIssues] = useState([]);

  console.log("data",openIssues);
  
  return (
    <div className='main-issues-container'>
        <div className='main-issues-nav'>
            <IssuesContainerLeft setOpenIssues={setOpenIssues}/>
            <IssuesContainerRight/>
        </div>
        <div className='main-issues-display'>
            <ShowIssues openedIssues={openIssues}/>
        </div>
    </div>
  )
}

export default MainIssuesContainer
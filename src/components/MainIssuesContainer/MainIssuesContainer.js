import React, { useState } from 'react'
import IssuesContainerLeft from './IssuesContainerLeft/IssuesContainerLeft'
import IssuesContainerRight from './IssuesContainerRight/IssuesContainerRight'
import "./MainIssuesContainer.css"
import ShowIssues from './ShowIssues'

function MainIssuesContainer() {
  const [openIssues,setOpenIssues] = useState([]);
  const [closedIssues,setClosedIssues] = useState([]);

  const [openClick,setOpenClick] = useState(false);

  const handleOpenClick = () => {
    setOpenClick(!openClick);
  }

  // console.log("data",openIssues);
  console.log("closed issues",closedIssues);
  console.log("openClick",openClick);
  
  return (
    <div className='main-issues-container'>
        <div className='main-issues-nav'>
            <IssuesContainerLeft  
              setOpenIssues={setOpenIssues}  
              setClosedIssues={setClosedIssues}  
              handleOpenClick={handleOpenClick}  
            /> 
            <IssuesContainerRight /> 
        </div> 
        <div className='main-issues-display'> 
        {(openClick ? (<ShowIssues Issues={openIssues}/>):(<ShowIssues Issues={closedIssues}/>))}
 
        </div> 
    </div>
  )
}

export default MainIssuesContainer
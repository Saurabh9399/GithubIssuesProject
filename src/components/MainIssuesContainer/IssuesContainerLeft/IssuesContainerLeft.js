import React from 'react'
import ClosedIssues from './ClosedIssues'
import './IssuesContainerLeft.css'
import OpenedIssues from './OpenedIssues'

function IssuesContainerLeft({setOpenIssues,setClosedIssues,handleOpenClick}) {
  return (
    <div className='issues-container-left'>
        <OpenedIssues setOpenIssues={setOpenIssues} handleOpenClick={handleOpenClick} />
        <ClosedIssues setClosedIssues={setClosedIssues} handleOpenClick={handleOpenClick}/>
    </div>
  )
}

export default IssuesContainerLeft
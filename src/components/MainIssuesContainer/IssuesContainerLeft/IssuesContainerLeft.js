import React from 'react'
import ClosedIssues from './ClosedIssues'
import './IssuesContainerLeft.css'
import OpenedIssues from './OpenedIssues'

function IssuesContainerLeft({setOpenIssues,setClosedIssues,handleOpenClick}) {
  return (
    <div className='issues-container-left'>
        <OpenedIssues setOpenIssues={setOpenIssues} handleOpenClick={handleOpenClick} />
        <ClosedIssues setClosedIssues={setClosedIssues} handleOpenClick={handleOpenClick}/>
        <div>
        <span>Days</span>
        <input type="number" min="0" name="days"/>
        </div>
    </div>
  )
}

export default IssuesContainerLeft
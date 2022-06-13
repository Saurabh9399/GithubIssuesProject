import React from 'react'
import ClosedIssues from './ClosedIssues'
import './IssuesContainerLeft.css'
import OpenedIssues from './OpenedIssues'

function IssuesContainerLeft({setOpenIssues,setClosedIssues}) {
  return (
    <div className='issues-container-left'>
        <OpenedIssues setOpenIssues={setOpenIssues} />
        <ClosedIssues setClosedIssues={setClosedIssues} />
    </div>
  )
}

export default IssuesContainerLeft
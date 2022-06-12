import React from 'react'
import ClosedIssues from './ClosedIssues'
import './IssuesContainerLeft.css'
import OpenedIssues from './OpenedIssues'

function IssuesContainerLeft({setOpenIssues}) {
  return (
    <div className='issues-container-left'>
        <OpenedIssues setOpenIssues={setOpenIssues}/>
        <ClosedIssues/>
    </div>
  )
}

export default IssuesContainerLeft
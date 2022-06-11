import React from 'react'
import ClosedIssues from './ClosedIssues'
import './IssuesContainerLeft.css'
import OpenedIssues from './OpenedIssues'

function IssuesContainerLeft() {
  return (
    <div className='issues-container-left'>
        <OpenedIssues/>
        <ClosedIssues/>
    </div>
  )
}

export default IssuesContainerLeft
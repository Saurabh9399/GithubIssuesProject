import React from 'react'
import AllIssues from './AllIssues'
import ClosedIssues from './ClosedIssues'
import './IssuesContainerLeft.css'
import OpenedIssues from './OpenedIssues'

function IssuesContainerLeft({onChangeState,onAllIssuesChange}) {
  return (
    <div className='issues-container-left'>
        <AllIssues onAllIssuesChange={onAllIssuesChange} />
        <OpenedIssues onChangeState={onChangeState} />
        <ClosedIssues onChangeState={onChangeState} />
        <div>
        {/* <span>Days</span>
        <input type="number" min="0" name="days"/> */}
        </div>
    </div>
  )
}

export default IssuesContainerLeft
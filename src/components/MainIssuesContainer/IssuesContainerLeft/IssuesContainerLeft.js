import React from 'react'
import ClosedIssues from './ClosedIssues'
import './IssuesContainerLeft.css'
import OpenedIssues from './OpenedIssues'

function IssuesContainerLeft({onChangeState}) {
  return (
    <div className='issues-container-left'>
        <OpenedIssues onChangeState={onChangeState} />
        <ClosedIssues onChangeState={onChangeState} />
        <div>
        <span>Days</span>
        <input type="number" min="0" name="days"/>
        </div>
    </div>
  )
}

export default IssuesContainerLeft
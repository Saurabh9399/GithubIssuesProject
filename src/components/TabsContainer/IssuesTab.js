import React from 'react'
import "./IssuesTab.css"
import BugReportIcon from '@mui/icons-material/BugReport';


function IssuesTab() {
  return (
    <div className='issues-tab'>
        <BugReportIcon id="issues-icon"/>
        <span className='issues-tab-name'>Issues  <span id='issues-no'>234</span></span>
    </div>
  )
}

export default IssuesTab
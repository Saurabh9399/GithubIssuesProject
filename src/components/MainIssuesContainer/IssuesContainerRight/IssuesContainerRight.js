import React from 'react'
import Assignee from './Assignee'
import Author from './Author'
import "./IssuesContainerRight.css"
import Label from './Label'
// import Projects from './Projects'

function IssuesContainerRight({openIssues,onChangeLabel,onChangeAssignee}) {
  return (
    <div className='issues-container-right'>
        <Author/>
        <Label openIssues={openIssues} onChangeLabel={onChangeLabel}/>
        {/* <Projects/> */}
        <Assignee openIssues={openIssues} onChangeAssignee={onChangeAssignee}/>
    </div>
  )
}

export default IssuesContainerRight
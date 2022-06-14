import React from 'react'
import Assignee from './Assignee'
import Author from './Author'
import "./IssuesContainerRight.css"
import Label from './Label'
// import Projects from './Projects'

function IssuesContainerRight({openIssues}) {
  return (
    <div className='issues-container-right'>
        <Author/>
        <Label openIssues={openIssues}/>
        {/* <Projects/> */}
        <Assignee openIssues={openIssues}/>
    </div>
  )
}

export default IssuesContainerRight
import React from 'react'
import Assignee from './Assignee'
import Author from './Author'
import "./IssuesContainerRight.css"
import Label from './Label'
import Projects from './Projects'

function IssuesContainerRight() {
  return (
    <div className='issues-container-right'>
        <Author/>
        <Label/>
        <Projects/>
        <Assignee/>
    </div>
  )
}

export default IssuesContainerRight
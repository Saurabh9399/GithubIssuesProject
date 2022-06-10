import React from 'react'
import CodeTab from './CodeTab'
import Discussions from './Discussions'
import IssuesTab from './IssuesTab'
import PullRequests from './PullRequests'
import "./TabsContainer.css"

function TabsContainer() {
  return (
    <div className='tabs-container'>
        <CodeTab/>
        <IssuesTab/>
        <PullRequests/>
        <Discussions/>
    </div>
  )
}

export default TabsContainer
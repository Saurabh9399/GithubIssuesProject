import React from 'react'
import "./IssuesRepoRight.css"
import IssuesRightTag from './IssuesRightTag'
import {data} from './data'

function IssuesRight() {
  return (
    <div className='issues-right'>
      <IssuesRightTag data={data}/>
    </div>
  )
}

export default IssuesRight
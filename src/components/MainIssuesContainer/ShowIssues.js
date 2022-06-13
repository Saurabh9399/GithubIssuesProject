import React from 'react'
import OneIssue from './OneIssue'
import "./ShowIssues.css"

function ShowIssues(props) {

  console.log("data item",props.openedIssues);

  return (
    <div className='show-issues'>
        {props.Issues.map((item) => { 
            return <OneIssue data={item}/>
        })}
    </div>
  )
}

export default ShowIssues
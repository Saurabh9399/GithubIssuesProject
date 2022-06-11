import React from 'react'
import "./IssuesRightTag.css"

function IssuesRightTag(props) {
  return (
    <div className='issues-right-tag'>
        {props.data.map((item)=> {
            return <div className='issues-right-tag-item'> {item.title}</div>
        })}
    </div>
  )
}

export default IssuesRightTag
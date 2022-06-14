import React from 'react'
import "./OneIssue.css"
import StarBorderIcon from '@mui/icons-material/StarBorder';

function OneIssue(props) {
  // const {data} = props;
  // console.log("item",data.item);
  return (
    <div className='one-issue'>
        <div className='one-issue-title-icon'>
             <div className='one-issue-icon'><StarBorderIcon id="one-issue-icon"/></div>
             <div className='one-issue-title'>{props.data.title}</div>
        </div>
        <div className='one-issue-description'>
            <p><span className='one-issue-id'>{props.data.id}</span> opened on <span className='one-issue-date'>{props.data.created_at}</span> by <span>{props.data.user.login}</span> </p>
        </div>
    </div>
  )
}

export default OneIssue
import React from 'react'
import "./Discussions.css"
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';


function Discussions() {
  return (
    <div className='discussions'>
        <ChatBubbleOutlineIcon id="discussions-icon"/>
        <span>Discussion</span>
    </div>
  )
}

export default Discussions
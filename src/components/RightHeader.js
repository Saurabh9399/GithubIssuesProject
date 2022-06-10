import React from 'react'
import "./RightHeader.css"
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddIcon from '@mui/icons-material/Add';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function RightHeader() {
  return (
    <div className='right-header'>
      <div><NotificationsIcon/></div>
      <div><AddIcon/></div>
      <div><AccountCircleIcon/></div>

    </div>
  )
}

export default RightHeader
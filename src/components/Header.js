import React from 'react'
import "./Header.css"
import LeftHeader from './LeftHeader'
import RightHeader from './RightHeader'

function Header() {
  return (
    <div className='header'> 
        <LeftHeader/>
        <RightHeader/>
    </div>
  )
}

export default Header
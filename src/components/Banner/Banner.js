import React from 'react'
import "./Banner.css"
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

function Banner() {
  return (
    <div className='banner'>
        <div className='banner-title'><SentimentSatisfiedAltIcon id="smile-icon"/><h6>Want to contribute to this repo!!</h6></div>
        <div className='banner-desc'><h6>If you have a bug or an idea, read the contributing guidelines before opening an issue.</h6></div>

    </div>
  )
}

export default Banner
import React from 'react'
import "./Banner.css"
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

function Banner() {
  return (
    <div className='banner'>
        <div className='banner-title'><SentimentSatisfiedAltIcon/><p>Want to contribute to this repo!!</p></div>
        <div className='banner-desc'>If you have a bug or an idea, read the contributing guidelines before opening an issue.</div>

    </div>
  )
}

export default Banner
import React from 'react'
import './feed.css'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FeedIcon from '@mui/icons-material/Feed';
import Post from './Post';

function Feed() {
  return (
    <>
    <div className='feed'>

      <div className="input-container">
        <img className='image-container-nature' src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" alt="" />

        <input className='input-post' type="text" placeholder='Search Here' />
      </div>

      <div className="feed-option">

        <div className="feed-option-container">
          <InsertPhotoIcon style={{ color: '#70b5f9' }} />
          <span>Photo</span>
        </div>
        <div className="feed-option-container">
          <VideoCallIcon style={{ color: '#7fc15e' }} />
          <span>Video</span>
        </div>
        <div className="feed-option-container">
          <CalendarMonthIcon style={{ color: '#e7a33e' }} />
          <span>Event</span>
        </div>
        <div className="feed-option-container">
          <FeedIcon style={{ color: '#fc9295' }} />
          <span>Write Article</span>
        </div>
      </div>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
    
    </>
  )
}

export default Feed
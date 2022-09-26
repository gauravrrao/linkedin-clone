import React from 'react'
import './post.css'
import ListIcon from '@mui/icons-material/List';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

function Post() {
  return (
    <div className='post'>
      <div className="post-header">
        <div className="left-header">
          <img className='post-image' src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" alt="" />
          <h3>Gaurav Rao</h3>
        </div>
        <div className="right-header">
          <ListIcon />
        </div>
      </div>

      <div className="body">
        <span>this is my page</span>
      </div>
      <hr className='post-hr'></hr>
      <div className="post-option">
        <div className="post-optio-title">
          <ThumbUpIcon />
          <span>Like</span>
        </div>
        <div className="post-optio-title">
          <CommentIcon />
          <span>Comment</span>
        </div>
        <div className="post-optio-title">
        <ShareIcon />
          <span>Share</span>
        </div>
        <div className="post-optio-title">
          <SendIcon/>
          <span>Send</span>
        </div>
      </div>
    </div>
  )
}

export default Post
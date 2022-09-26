import React from 'react'
import './sidebar.css'
import BookmarkIcon from '@mui/icons-material/Bookmark';


const Sidebar = () => {
    return (
        <div className='sidebar-container'>
        <div className='upper-container'>

            <div className="side-upper">

                <div className="color-container">
                </div>

                <div className="info">

                    <img className='image-nature' src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" alt="" />

                    <div className="profile-data">
                        <h4 className='gaurav'>Gaurav Rao</h4>
                        <p>Web Developer</p>
                    </div>

                </div>


            </div>

            <hr className='line1'></hr>

            <div className="profile_stats">
                <span>Who's viewed your profile</span> <span className='statsno'>3256</span>
            </div>

            <div className="profile_stats">
                <span>Impression of your posts</span> <span className='statsno2'>3256</span>
            </div>

            <hr className='line2'></hr>

            <span className='access'>Try Premium for free</span>

            <hr className='line2'></hr>

            <div className="item">
            <BookmarkIcon className='bookmark' /><span className='itemname'>My Item</span>
            </div>

        </div>

        <div className="lower-container">
            <p className='capital'>Recent</p>
            <p className='hash'><span>#</span>branding</p>
            <p className='hash'><span>#</span>marketing</p>
            <p className='hash'><span>#</span>reactjs</p>
            <p className='hash'><span>#</span>redux</p>
            <p className='hash'><span>#</span>harry potter</p>
            <p className='hash'><span>#</span>spiderman</p>
            <p className='hash'><span>#</span>lord voldemort</p>
        </div>
        </div>
    )
}

export default Sidebar
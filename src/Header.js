import React from 'react'
import './header.css'
import HomeIcon from '@mui/icons-material/Home';
import Headeroption from './Headeroption';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GridOnIcon from '@mui/icons-material/GridOn';

const Header = () => {
    return (
        <div className='header'>
            <div className='left-container'>
                <img className="image " src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png" alt="" />
                <input className='field' type="text" placeholder='search' />
            </div>
            <div className="right-container">
                <Headeroption Icon={HomeIcon} title="Home" />
                <Headeroption Icon={SupervisorAccountIcon } title="Network"/>
                <Headeroption Icon={BusinessCenterIcon} title="Jobs"/>
                <Headeroption Icon={MessageIcon} title="Message"/>
                <Headeroption Icon={NotificationsIcon} title="Noftification"/>
                <Headeroption Icon={AccountCircleIcon} title="My Account"/>
                <Headeroption Icon={GridOnIcon} title="Work"/>
            </div>
        </div>
    )
}

export default Header
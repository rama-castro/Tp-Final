import React, {useState} from 'react'
import './Sidebar.css'
import ICONS from '../../assets/constants/icons/icons'
import { Link } from 'react-router'
const Sidebar = () => {

    const [icon, setIcon] = useState(ICONS.Icon)
    const handleIconClick = () => {
    setIcon(ICONS.IconFill); 
};
    return (
        <div className='sidebar'>
            <div className='top-sidebar-icons'>
                <Link to="/"> <ICONS.Chat className='sidebar-icon chat-icon' onClick={handleIconClick}/> </Link>
                <Link to="/favorites"> <ICONS.Star className='sidebar-icon star-icon' onClick={handleIconClick}/> </Link>
            </div>
            <div className='bottom-sidebar-icons'>
                <i class="bi bi-chat-left-dots-fill"></i>
                <i class="bi bi-chat-left-dots-fill"></i>
            </div>

        </div>
    )
}

export default Sidebar
import React, {useState} from 'react'
import './Sidebar.css'
import ICONS from '../../assets/constants/icons/icons'
import { Link } from 'react-router'
const Sidebar = () => {

    const [icon, setIcon] = useState(ICONS.Icon)
    ;
    return (
        <div className='sidebar'>
            <div className='top-sidebar-icons'>
                <Link to="/"> <ICONS.Chat className='sidebar-icon chat-icon'/> </Link>
                <Link to="/status"> <ICONS.Star className='sidebar-icon star-icon'/> </Link>
            </div>
            <div className='bottom-sidebar-icons'>
                <i class="bi bi-chat-left-dots-fill"></i>
                <i class="bi bi-chat-left-dots-fill"></i>
            </div>

        </div>
    )
}

export default Sidebar
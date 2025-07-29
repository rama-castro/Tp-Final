import React, { useState } from 'react'
import './Sidebar.css'
import ICONS from '../../assets/constants/icons/icons'
import { Link, NavLink } from 'react-router'
const Sidebar = () => {

    const [icon, setIcon] = useState(ICONS.Icon)
        ;
    return (
        <div className='sidebar'>
            <div className='top-sidebar-icons'>
                <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link-active' : undefined}>

                    {({ isActive }) =>
                        isActive ? (
                            <ICONS.ChatFill className="sidebar-icon chat-icon" />
                        ) : (
                            <ICONS.Chat className="sidebar-icon chat-icon" />
                        )
                    }
                </NavLink>

                <NavLink to="/status" className={({ isActive }) => isActive ? 'nav-link-active' : undefined}>

                    {({ isActive }) =>
                        isActive ? (
                            <ICONS.StatusFill className="sidebar-icon star-icon" />
                        ) : (
                            <ICONS.Status className="sidebar-icon star-icon" />
                        )
                    }
                </NavLink>

                <NavLink to="/channels" className={({ isActive }) => isActive ? 'nav-link-active' : undefined}>

                    {({ isActive }) =>
                        isActive ? (
                            <ICONS.ChannelsFill className="sidebar-icon star-icon" />
                        ) : (
                            <ICONS.Channels className="sidebar-icon star-icon" />
                        )
                    }
                </NavLink>

                <NavLink to="/communities" className={({ isActive }) => isActive ? 'nav-link-active' : undefined}>

                    {({ isActive }) =>
                        isActive ? (
                            <ICONS.CommunitiesFill className="sidebar-icon star-icon" />
                        ) : (
                            <ICONS.Communities className="sidebar-icon star-icon" />
                        )
                    }
                </NavLink>

            </div>
            <div className='bottom-sidebar-icons'>
                <NavLink to="/settings" className={({ isActive }) => isActive ? 'nav-link-active' : undefined}>

                    {({ isActive }) =>
                        isActive ? (
                            <ICONS.SettingsFill className="sidebar-icon star-icon" />
                        ) : (
                            <ICONS.Settings className="sidebar-icon star-icon" />
                        )
                    }
                </NavLink>
                <i class="bi bi-chat-left-dots-fill"></i>
            </div>

        </div>
    )
}

export default Sidebar
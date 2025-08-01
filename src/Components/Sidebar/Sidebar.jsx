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

                <div className="sidebar-item">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link-active' : undefined}>
                        {({ isActive }) =>
                            isActive ? <ICONS.ChatFill className="sidebar-icon icon" /> :
                                <ICONS.Chat className="sidebar-icon icon" />
                        }
                    </NavLink>
                    <button className="tooltip tooltip-chat">Chats</button>
                </div>

                <div className="sidebar-item">
                    <NavLink to="/status" className={({ isActive }) => isActive ? 'nav-link-active' : undefined}>

                        {({ isActive }) =>
                            isActive ? (
                                <ICONS.StatusFill className="sidebar-icon icon" />
                            ) : (
                                <ICONS.Status className="sidebar-icon icon" />
                            )
                        }
                    </NavLink>
                    <button className="tooltip tooltip-status">Estados</button>
                </div>

                <div className="sidebar-item">
                    <NavLink to="/channels" className={({ isActive }) => isActive ? 'nav-link-active' : undefined}>

                        {({ isActive }) =>
                            isActive ? (
                                <ICONS.ChannelsFill className="sidebar-icon icon" />
                            ) : (
                                <ICONS.Channels className="sidebar-icon icon" />
                            )
                        }
                    </NavLink>
                    <button className="tooltip tooltip-channels">Canales</button>
                </div>

                <div className="sidebar-item">
                    <NavLink to="/communities" className={({ isActive }) => isActive ? 'nav-link-active' : undefined}>

                        {({ isActive }) =>
                            isActive ? (
                                <ICONS.CommunitiesFill className="sidebar-icon icon" />
                            ) : (
                                <ICONS.Communities className="sidebar-icon icon" />
                            )
                        }
                    </NavLink>
                    <button className="tooltip tooltip-communities">Comunidades</button>

                </div>

            </div>
            <div className='bottom-sidebar-icons'>

                <div className="sidebar-item">
                    <NavLink to="/settings" className={({ isActive }) => isActive ? 'nav-link-active' : undefined}>

                        {({ isActive }) =>
                            isActive ? (
                                <ICONS.SettingsFill className="sidebar-icon icon" />
                            ) : (
                                <ICONS.Settings className="sidebar-icon icon" />
                            )
                        }
                    </NavLink>
                    <button className="tooltip tooltip-settings">Ajustes</button>

                </div>
                <div className="sidebar-item">
                    <img className='sidebar-avatar' src='https://randomuser.me/api/portraits/men/17.jpg' alt='user.avatar' />
                    <button className="tooltip tooltip-profile">Perfil</button>
                </div>
            </div>

        </div>
    )
}

export default Sidebar
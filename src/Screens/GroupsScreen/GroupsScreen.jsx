import React from 'react'
import './GroupsScreen.css'
import { Link } from 'react-router'

const GroupsScreen = () => {
    return (
        <div className='unread-msgs-screen'>
            <span>No tienes grupos creados .</span>
            <Link to="/"><span to="/" style={{ color: '#1b8755' }}>Ver todos los chats.</span></Link>
        </div>
    )
}

export default GroupsScreen
import React from 'react'
import './UnreadMsgsScreen.css'
import { Link } from 'react-router'


const UnreadMsgsScreen = () => {
    return (
        <div className='unread-msgs-screen'>
            <span  className='span'>No hay chats no leídos.</span>
            <Link to="/"><span  to="/" style={{color:'#1b8755'}}>Ver todos los chats.</span></Link>
        </div>
    )
}

export default UnreadMsgsScreen
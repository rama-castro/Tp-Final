import React from 'react'
import ICONS from '../../assets/constants/icons/icons'
import './ProfileScreen.css'

const ProfileScreen = () => {
    return (
        <div className='chat-background'>
            <div className='status-screen-container'>
                <ICONS.UserCircle style={{ fontSize: '60px', color: '#c6c4c2' }} />
                <h1 className='splash-screen-title'>Perfil</h1>
            </div>
        </div>
    )
}

export default ProfileScreen
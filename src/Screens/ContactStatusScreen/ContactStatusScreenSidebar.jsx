import React from 'react'
import './ContactStatusScreenSidebar.css'
import ICONS from '../../assets/constants/icons/icons'

const ContactStatusScreenSidebar = () => {
    return (
        <div className='status-sidebar-screen-container'>
            <div className='status-header-container'>
                <h1 style={{ fontSize: '20px', fontWeight: '600' }}>Estados</h1>
                <div style={{ display: 'flex', gap: '15px' }}>
                    <ICONS.PlusCircle className='icon icon-dark' />
                    <ICONS.DotsMenu className='icon  icon-dark' />
                </div>
            </div>
            <div className='status-user-container'>
                <div className='avatar-container'>
                    <img className='avatar' src='./images/user-avatar.jpg' alt='user.avatar' />
                </div>
                <div className='contact-name-container'>
                    <h2>Mi estado</h2>
                    <span className='span'> Haz clic para añadir una actualización de estado.</span>
                </div>
            </div>
            <div className='blank-content-container'>
                <ICONS.StatusFill style={{fontSize:'36px', color:'#c6c4c2'}}/>
                <h2 className='h2 blank-content-text'>No hay estados disponibles {`:(`}</h2>
            </div>
        </div>
    )
}

export default ContactStatusScreenSidebar
import React from 'react'
import './SettingsScreenSidebar.css'
import ICONS from '../../assets/constants/icons/icons'
const SettingsScreenSidebar = () => {
    return (
        <div style={{ padding: '10px' }}>
            <div>
                <h1 style={{ fontSize: '20px', fontWeight: '600' }}>Ajustes</h1>
            </div>
            <search className='settings-search-bar'>
                <i class="bi bi-search"></i>
                <input className="search-input" placeholder="Buscar en los ajustes." />
            </search>
            <div className='settings-user-container'>
                <div className='avatar-container'>
                        <img className='avatar' src='https://randomuser.me/api/portraits/men/17.jpg' alt='user.avatar' />
                    </div>
                    <div className='contact-name-container'>
                        <h2>Yo</h2>
                        <span> ¡Hola! Estoy usando WhatsApp.</span>
                    </div>
            </div>
            <div className='settings-item-container'>
                <ICONS.ChannelsFill style={{fontSize:'24px'}}/>
                    <div>
                        <h2 style={{ fontWeight: '400' }}>Cuenta</h2>
                        <span >Notificaciones de seguridad, información de la cuenta.</span>
                    </div>
            </div>
        
        </div>
    )
}

export default SettingsScreenSidebar
import React from 'react'
import './SettingsScreenSidebar.css'
import ICONS from '../../assets/constants/icons/icons'
const SettingsScreenSidebar = () => {
    return (
        <div className='settings-container'>
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
                    <h2>Nombrerto Apellídez</h2>
                    <span className='span'> ¡Hola! Estoy usando WhatsApp.</span>
                </div>
            </div>
            <div className='settings-item-container'>
                <ICONS.Key className='icon' style={{ fontSize: '24px' }} />
                <div>
                    <h2 style={{ fontWeight: '400' }}>Cuenta</h2>
                    <span className='span'>Notificaciones de seguridad, información de la cuenta.</span>
                </div>
            </div>
            <div className='settings-item-container'>
                <ICONS.Lock className='icon' style={{ fontSize: '24px' }} />
                <div>
                    <h2 style={{ fontWeight: '400' }}>Privacidad</h2>
                    <span className='span'>Contactos bloqueados, mensajes temporales.</span>
                </div>
            </div>
            <div className='settings-item-container'>
                <ICONS.Chat className='icon' style={{ fontSize: '24px' }} />
                <div>
                    <h2 style={{ fontWeight: '400' }}>Chats</h2>
                    <span className='span'>Tema, fondo, ajustes de chat.</span>
                </div>
            </div>
            <div className='settings-item-container'>
                <ICONS.Bell className='icon' style={{ fontSize: '24px' }} />
                <div>
                    <h2 style={{ fontWeight: '400' }}>Notificaciones</h2>
                    <span className='span'>Notificaciones de mensajes.</span>
                </div>
            </div>
            <div className='settings-item-container'>
                <ICONS.Keyboard className='icon' style={{ fontSize: '24px' }} />
                <div>
                    <h2 style={{ fontWeight: '400' }}>Atajos del teclado</h2>
                    <span className='span'>Acciones rápidas.</span>
                </div>
            </div>
            <div className='settings-item-container'>
                <ICONS.QuestionCircle className='icon' style={{ fontSize: '24px' }} />
                <div>
                    <h2 style={{ fontWeight: '400' }}>Ayuda</h2>
                    <span className='span'>Centro de ayuda, contáctanos, política de privacidad.</span>
                </div>
            </div>
            <div className='settings-item-container'>
                <ICONS.Logout style={{ fontSize: '24px', color: 'red' }} />
                <div>
                    <h2 style={{ fontWeight: '400', color: 'red'     }}>Cerrar Sesión</h2>
                </div>
            </div>

        </div>
    )
}

export default SettingsScreenSidebar
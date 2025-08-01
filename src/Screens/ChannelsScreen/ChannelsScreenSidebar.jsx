import React from 'react'
import './ChannelsScreenSidebar.css'
import ICONS from '../../assets/constants/icons/icons'

const ChannelsScreenSidebar = () => {
    return (
        <div className='channels-sidebar-screen-container'>
            <div className='channels-header-container'>
                <h1 style={{ fontSize: '20px', fontWeight: '600' }}>Canales</h1>
                <div style={{ display: 'flex', gap: '15px' }}>
                    <ICONS.PlusCircle className='icon icon-dark' />
                </div>
            </div>
            <div className='channels-text-container'>
                <h2>Conoce las novedades de tus temas favoritos.</h2>
                <span className='span'> A continuación, busca canales para seguir.</span>
            </div>
            <div className='blank-content-container'>
                <ICONS.ChannelsFill style={{ fontSize: '36px', color: '#c6c4c2' }} />
                <h2 className='h2 blank-content-text'>No hay canales disponibles {`:(`}</h2>
            </div>
        </div>
    )
}

export default ChannelsScreenSidebar
import React from 'react'
import './ChannelsScreen.css'
import ICONS from '../../assets/constants/icons/icons'

export const ChannelsScreen = () => {
    return (
        <div className='chat-background'>
            <div className='channels-screen-container'>
                <ICONS.ChannelsFill style={{fontSize:'60px', color:'#c6c4c2'}}/>
                <h1 className='splash-screen-title'>Descubre canales.</h1>
                <span className='span' style={{ textAlign: 'center' }}>Entretenimiento, deportes, noticias, estilo de vida, personas y mucho más. Sigue los canales que te interesan.</span>
            </div>
            <div style={{visibility: 'hidden'}} className='channels-screen-footer-container'>
                <ICONS.Lock className='lock-icon' style={{color:'#5e6a70', margin:'5px', fontSize:'18px'}} />
                <span style={{ textAlign: 'center' }}>Tus actualizaciones de estado están cifradas de extremo a extremo.</span>
            </div>
        </div>
    )
}

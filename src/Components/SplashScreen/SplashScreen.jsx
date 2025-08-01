import React from 'react'
import './SplashScreen.css'
import ICONS from '../../assets/constants/icons/icons'
import { showAlert } from '../../assets/constants/functions/alert'



const SplashScreen = () => {
    return (
        <div className='chat-background'>
            <div className='splash-screen-container'>
            <img className='whatsapp-splash-screen' src='/images/whatsapp-splash-screen.png' alt="whatsapp-splash-screen" style={{ width: '50%' }} />
                <h1 className='splash-screen-title'>Descarga WhatsApp para Windows.</h1>
                <span className='span' style={{ textAlign: 'center' }}>Descarga la aplicación para Windows y haz llamadas, comparte pantalla y disfruta de una experiencia más rápida.</span>
                <button className='primary-button-green' onClick={showAlert}>Descargar</button>
            </div>
            <div className='splash-screen-footer-container'>
                <ICONS.Lock className='lock-icon' style={{color:'#5e6a70', margin:'5px', fontSize:'18px'}} />
                <span  className='span' style={{ textAlign: 'center' }}>Tus mensajes personales están cifrados de extremo a extremo.</span>
            </div>
        </div>
    )
}

export default SplashScreen
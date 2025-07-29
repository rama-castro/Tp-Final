import React from 'react'
import './ContactStatusScreen.css'
import ICONS from '../../assets/constants/icons/icons'

const ContactStatusScreen = () => {
    return (
            <div className='chat-background'>
            <div className='status-screen-container'>
                <ICONS.StatusFill style={{fontSize:'60px', color:'#c6c4c2'}}/>
                <h1 className='splash-screen-title'>Comparte actualizaciones de estado.</h1>
                <span style={{ textAlign: 'center' }}>Comparte fotos, videos y texto que desaparecen después de 24 horas.</span>
            </div>
            <div className='status-screen-footer-container'>
                <ICONS.Lock className='lock-icon' style={{color:'#5e6a70', margin:'5px', fontSize:'18px'}} />
                <span style={{ textAlign: 'center' }}>Tus actualizaciones de estado están cifradas de extremo a extremo.</span>
            </div>
        </div>
    )
}

export default ContactStatusScreen
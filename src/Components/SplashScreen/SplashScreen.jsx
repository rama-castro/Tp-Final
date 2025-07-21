import React from 'react'
import './SplashScreen.css'
import WhatsappSplashScreen from '../../assets/whatsapp-splash-screen.png'



const SplashScreen = () => {
    return (
        <div className='chat-background'>
            
            <img className ='whatsapp-splash-screen' src={WhatsappSplashScreen}  alt="whatsapp-splash-screen" />
        </div>
    )
}

export default SplashScreen
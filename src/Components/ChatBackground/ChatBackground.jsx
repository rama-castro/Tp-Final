import React from 'react'
import './ChatBackground.css'
import BackgroundDoodlePattern from '../../assets/whatsapp-doodle-pattern.jpg'
import SplashScreen from '../../assets/whatsapp-splash-screen.png'



const ChatBackground = () => {
    return (
        <div className='chat-background'>
            
            <img className ='whatsapp-doodle-pattern' src={BackgroundDoodlePattern}  alt="whatsapp-doodle-pattern" />
        </div>
    )
}

export default ChatBackground
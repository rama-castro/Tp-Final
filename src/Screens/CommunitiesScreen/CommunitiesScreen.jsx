import React from 'react'
import './CommunitiesScreen.css'
import ICONS from '../../assets/constants/icons/icons'

export const CommunitiesScreen = () => {
    return (
        <div className='chat-background'>
            <div className='channels-screen-container'>
                <ICONS.CommunitiesFill style={{fontSize:'60px', color:'#c6c4c2'}}/>
                <h1 className='splash-screen-title'>Crea comunidades.</h1>
                <span className='span' style={{ textAlign: 'center' }}>Crea grupos para reunir a los miembros en función de temas y envíales fácilmente avisos del administrador.</span>
            </div>
            <div className='channels-screen-footer-container'>
                <ICONS.Lock className='lock-icon' style={{color:'#5e6a70', margin:'5px', fontSize:'18px'}} />
                <span  className='span' style={{ textAlign: 'center' }}>Tus actualizaciones de estado están cifradas de extremo a extremo.</span>
            </div>
        </div>
    )
}

export default CommunitiesScreen

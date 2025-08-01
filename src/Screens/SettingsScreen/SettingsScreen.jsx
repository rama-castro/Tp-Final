import React from 'react'
import ICONS from '../../assets/constants/icons/icons'
const SettingsScreen = () => {
    return (
        <div className='chat-background'>
            <div className='status-screen-container'>
                <ICONS.SettingsFill style={{ fontSize: '60px', color: '#c6c4c2' }} />
                <h1 className='splash-screen-title'>Ajustes</h1>
            </div>
        </div>
    )
}

export default SettingsScreen
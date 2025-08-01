import React from 'react'
import './CommunitiesScreenSidebar.css'
import ICONS from '../../assets/constants/icons/icons'
import { showAlert } from '../../assets/constants/functions/alert'

const CommunitiesScreenSidebar = () => {
    return (
        <div className='communities-sidebar-screen-container'>
            <div className='communities-header-container'>
                <h1 style={{ fontSize: '20px', fontWeight: '600' }}>Comunidades</h1>
                <div style={{ display: 'flex', gap: '15px' }}>
                    <ICONS.PlusCircle className='icon icon-dark' />
                </div>
            </div>
            <div className='communities-text-container'>
                <img className='communities-image' src="/images/communities-screen-image.png" alt="communities-image.png" />
                <h1 style={{ textAlign: 'center' }}>Crea una comunidad para mantenerte en contacto.</h1>
                <span className='span' style={{ textAlign: 'center', color: '#000000ff', width: '80%' }}>Las comunidades reúnen a los miembros en grupos por temas y facilitan la recepción de avisos de los administradores. Cualquier comunidad a la que te añadan aparecerá aquí.</span>
                <div  style={{ display: 'flex', alignItems: 'center' }} onClick={showAlert}>
                    <span className='span-bold' style={{ color: '#1daa61' }}>Ver ejemplos de comunidades.</span>
                    <ICONS.ArrowForward style={{ color: '#1daa61'}} />
                </div>
            </div>
            <div className='blank-content-container'>
                <button className='primary-button-green' onClick={showAlert}>Iniciar tu comunidad.</button>
            </div>
        </div>
    )
}

export default CommunitiesScreenSidebar
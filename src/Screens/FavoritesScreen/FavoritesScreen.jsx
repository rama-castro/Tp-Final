import React from 'react'
import './FavoritesScreen.css'

const FavoritesScreen = () => {

    const showAlert = () => {
        alert('Funcionalidad en desarrollo');
    };


    return (
        <div className='favorites-screen'>
            <img style={{ width: '40%' }} src="/images/favorites-screen-image.png" alt="" />
            <h1 >Añade chats a favoritos.</h1>
            <span style={{ textAlign: 'center' }}>Haz que sea fácil encontrar a las personas y los grupos más importantes en Whatsapp.</span>
            <span style={{ color: '#1b8755' }} onClick={showAlert}>Añadir a favoritos.</span>
        </div>
    )
}

export default FavoritesScreen
import React from 'react'
import './FavoritesScreen.css'
import { showAlert } from '../../assets/constants/functions/alert';
const FavoritesScreen = () => {



    return (
        <div className='favorites-screen'>
            <img style={{ width: '40%' }} src="/images/favorites-screen-image.png" alt="" />
            <h1 >Añade chats a favoritos.</h1>
            <span  className='span' style={{ textAlign: 'center' }}>Haz que sea fácil encontrar a las personas y los grupos más importantes en Whatsapp.</span>
            <span  className='span' style={{ color: '#1b8755' }} onClick={showAlert}>Añadir a favoritos.</span>
        </div>
    )
}

export default FavoritesScreen
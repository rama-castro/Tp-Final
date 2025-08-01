import React, {useState} from 'react'
import './ProfileScreenSidebar.css'
import ICONS from '../../assets/constants/icons/icons'
import { showAlert } from '../../assets/constants/functions/alert'


const ProfileScreenSidebar = () => {
        const [imageHover, setImageHover] = useState(false);

    return (
        <div className='profile-container'>
            <div>
                <h1 style={{ fontSize: '20px', fontWeight: '600' }}>Perfil</h1>
            </div>
            <div className='profile-avatar-container' >

                <img
                onMouseEnter={() => setImageHover(true)
                }
                onMouseLeave={() => setImageHover(false)
                }
                className='profile-avatar' src={imageHover ? './images/user-avatar-hover.jpg' : './images/user-avatar.jpg' } alt='user.avatar'
                onClick={showAlert} />
            </div>

            <div className='profile-info-container'>
                <span className='span'>Tu nombre</span>
                <div className='profile-info-item'>
                    <h2>Johann Sebastian Mastropiero</h2>
                    <ICONS.PencilEdit className='icon-no-hover' />
                </div>
                <span className='span' style={{ margin: '20px 0px 20px' }}>Este no es tu nombre de usuario o PIN. Este nombre será visible para tus contactos de WhatsApp</span>
            </div>

            <div className='profile-info-container'>
                <span className='span'>Info.</span>
                <div className='profile-info-item'>
                    <h2>¡Hola! Estoy usando WhatsApp.</h2>
                    <ICONS.PencilEdit className='icon-no-hover' />
                </div>
            </div>



        </div>
    )
}

export default ProfileScreenSidebar
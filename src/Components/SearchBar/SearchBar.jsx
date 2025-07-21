import React from 'react'
import logo from '../../assets/whatsapp-logotype.svg'
import './SearchBar.css'

const SearchBar = () => 

    {
        const handleClick = () => {
            window.location.href = '/';
        };
        return (
            <div>
                <div className='search-bar_top'>
                    <img className='whatsapp-logotype' src={logo} alt="whatsapp-logotype" onClick={handleClick} />
                    <div className='search-bar_top-icons'>
                        <i class="bi bi-chat-left-dots-fill"></i>
                        <i class="bi bi-three-dots-vertical"></i>
                    </div>

                </div>
                <search className='search-bar_box'>
                    <i class="bi bi-search"></i>
                    <input className="search-input" placeholder="Buscar un chat o iniciar uno nuevo." />
                </search>
                <div className='search-bar_bottom'>
                    <button className='primary-button'>Todos</button>
                    <button className='primary-button'>No Leídos</button>
                    <button className='primary-button'>Favoritos</button>
                    <button className='primary-button'>Grupos</button>
                </div>
            </div>
        )
    }

    export default SearchBar
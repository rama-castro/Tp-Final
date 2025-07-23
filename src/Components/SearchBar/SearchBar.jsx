import React from 'react'
import logo from '/images/whatsapp-logotype.svg'
import './SearchBar.css'
import { Link } from 'react-router'

const SearchBar = () => 

    {
    
        return (
            <div>
                <div className='search-bar_top'>
                    <Link to="/">
                    <img className='whatsapp-logotype' src={logo} alt="whatsapp-logotype" />
                    </Link>
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
import React, { useState } from 'react'
import logo from '/images/whatsapp-logotype.svg'
import './SearchBar.css'
import { Link } from 'react-router'
import ICONS from '../../assets/constants/icons/icons'
const SearchBar = ({ Screens, SetScreens }) => {
    const isActive = (value) => (Screens === value ? 'active' : '')



    return (
        <div>
            <div className='search-bar_top'>
                <Link to="/">
                    <img className='whatsapp-logotype' src={logo} alt="whatsapp-logotype" />
                </Link>
                <div style={{ display: 'flex', gap: '15px' }}>
                    <ICONS.PlusCircle className='icon icon-dark' />
                    <ICONS.DotsMenu className='icon  icon-dark' />
                </div>

            </div>
            <search className='search-bar_box'>
                <i class="bi bi-search"></i>
                <input className="search-input" placeholder="Buscar un chat o iniciar uno nuevo." />
            </search>
            <div className='search-bar_bottom'>
                <button className={`primary-button ${isActive('Todos')}`} onClick={() => SetScreens('Todos')}>Todos</button>
                <button className={`primary-button ${isActive('No Leídos')}`} onClick={() => SetScreens('No Leídos')}>No Leídos</button>
                <button className={`primary-button ${isActive('Favoritos')}`} onClick={() => SetScreens('Favoritos')}>Favoritos</button>
                <button className={`primary-button ${isActive('Grupos')}`} onClick={() => SetScreens('Grupos')}>Grupos</button>
            </div>
        </div>
    )
}

export default SearchBar
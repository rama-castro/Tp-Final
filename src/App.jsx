import React, { useState } from 'react'
import { Routes, Route } from 'react-router'
import ChatScreen from './Screens/ChatScreen/ChatScreen'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import Sidebar from './Components/Sidebar/Sidebar'
import SplashScreen from './Components/SplashScreen/SplashScreen'
import SearchBar from './Components/SearchBar/SearchBar'
import FavoritesScreen from './Screens/FavoritesScreen/FavoritesScreen'
import './App.css'

const App = () => {

  return (
    <div style={{ display: 'flex' }}>
      < Sidebar />
      <div className='contacts-container' style={{ border: '1px solid #ddddddff' }}>
        < SearchBar />
        <div className="contacts-list-scrollable">
          <ContactScreen className="contacts-list-container" to="/contact/:contact_id/messages" />
        </div>      </div>

      <Routes>
        < Route path='/' element={< SplashScreen />} />
        < Route path='/contact/:contact_id/messages' element={< ChatScreen />} />
        < Route path='/favorites' element={< FavoritesScreen />} />
      </Routes>

    </div>
  )
}






export default App
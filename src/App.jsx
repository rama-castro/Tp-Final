import React, { useState } from 'react'
import { Routes, Route } from 'react-router'
import ChatScreen from './Screens/ChatScreen/ChatScreen'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import Sidebar from './Components/Sidebar/Sidebar'
import SplashScreen from './Components/SplashScreen/SplashScreen'
import SearchBar from './Components/SearchBar/SearchBar'
import FavoritesScreen from './Screens/FavoritesScreen/FavoritesScreen'

const App = () => {

  return (
    <div style={{ display: 'flex' }}>
      < Sidebar />
      <div style={{  border: '1px solid #ddddddff' }}>
        < SearchBar />
        < ContactScreen to='/contact/:contact_id/messages' />
      </div>

      <Routes>
        < Route path='/' element= {< SplashScreen />}/>
        < Route path='/contact/:contact_id/messages' element= {< ChatScreen />}/>
        < Route path='/favorites' element= {< FavoritesScreen />}/>
      </Routes>

    </div>
  )
}






export default App
import React, { useState } from 'react'
import { Routes, Route } from 'react-router'
import ChatScreen from './Screens/ChatScreen/ChatScreen'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import Sidebar from './Components/Sidebar/Sidebar'
import ChatBackground from './Components/ChatBackground/ChatBackground'
import SearchBar from './Components/SearchBar/SearchBar'

const App = () => {

  return (
    <div style={{ display: 'flex' }}>
      < Sidebar />
      <div className='hola'>
        < SearchBar />
        < ContactScreen to='/contact/:contact_id/messages' />
      </div>

      <Routes>
        < Route path='/' element= {< ChatBackground />}/>
        < Route path='/contact/:contact_id/messages' element= {< ChatScreen />}/>
      </Routes>

    </div>
  )
}






export default App
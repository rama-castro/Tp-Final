import React, { useState } from 'react'
import { Routes, Route } from 'react-router'
import ChatScreen from './Screens/ChatScreen/ChatScreen'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import Sidebar from './Components/Sidebar/Sidebar'
import SplashScreen from './Components/SplashScreen/SplashScreen'
import SearchBar from './Components/SearchBar/SearchBar'
import './App.css'
import ContactStatusScreen from './Screens/ContactStatusScreen/ContactStatusScreen'

const App = () => {

  const [Screens, SetScreens] = useState('Todos')


  return (
    <div style={{ display: 'flex' }}>
      < Sidebar />
      <div className='contacts-container' style={{ border: '1px solid #ddddddff' }}>
        < SearchBar Screens={Screens} SetScreens={SetScreens} />
        <div className="contacts-list-scrollable">
          <ContactScreen Screens={Screens} className="contacts-list-container" to="/contact/:contact_id/messages" />
        </div>
      </div>

      <Routes>
        < Route path='/' element={< SplashScreen />} />
        < Route path='/contact/:contact_id/messages' element={< ChatScreen />} />
        < Route path='/status' element={< ContactStatusScreen />} />
      </Routes>

    </div>
  )
}






export default App
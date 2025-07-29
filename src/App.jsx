import React, { useState } from 'react'
import { Routes, Route } from 'react-router'
import ChatScreen from './Screens/ChatScreen/ChatScreen'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import Sidebar from './Components/Sidebar/Sidebar'
import SplashScreen from './Components/SplashScreen/SplashScreen'
import SearchBar from './Components/SearchBar/SearchBar'
import './App.css'
import ContactStatusScreen from './Screens/ContactStatusScreen/ContactStatusScreen'
import { ChannelsScreen } from './Screens/ChannelsScreen/ChannelsScreen'
import CommunitiesScreen from './Screens/CommunitiesScreen/CommunitiesScreen'
import SettingsScreen from './Screens/SettingsScreen/SettingsScreen'
import SettingsScreenSidebar from './Screens/SettingsScreen/SettingsScreenSidebar'

const App = () => {
  const [Screens, SetScreens] = useState('Todos')

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div className='contacts-container' style={{ border: '1px solid #ddddddff' }}>
        <Routes>
          <Route
            path="/" element={
              <>
                <SearchBar Screens={Screens} SetScreens={SetScreens} />
                <div className="contacts-list-scrollable">
                  <ContactScreen Screens={Screens} className="contacts-list-container" />
                </div>
              </>
            }
          />
          <Route
            path="/contact/:contact_id/messages" element={
              <>
                <SearchBar Screens={Screens} SetScreens={SetScreens} />
                <div className="contacts-list-scrollable">
                  <ContactScreen Screens={Screens} className="contacts-list-container" />
                </div>
              </>
            }
          />
          <Route path="/settings" element={<SettingsScreenSidebar />} />
          <Route path="/status" element={<ContactStatusScreen />} />
        </Routes>
      </div>

      {/* Sección derecha: chats y pantallas de contenido */}
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/contact/:contact_id/messages" element={<ChatScreen />} />
        <Route path="/status" element={<ContactStatusScreen />} />
        <Route path="/channels" element={<ChannelsScreen />} />
        <Route path="/communities" element={<CommunitiesScreen />} />
        <Route path="/settings/content" element={<SettingsScreen />} />
      </Routes>
    </div>
  )
}

export default App
import React, { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router'
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
import ContactStatusScreenSidebar from './Screens/ContactStatusScreen/ContactStatusScreenSidebar'
import ChannelsScreenSidebar from './Screens/ChannelsScreen/ChannelsScreenSidebar'
import CommunitiesScreenSidebar from './Screens/CommunitiesScreen/CommunitiesScreenSidebar'
import mediaQueriesHook from './assets/constants/mediaQueriesHook/mediaQueriesHook'
import ProfileScreenSidebar from './Screens/ProfileScreen/ProfileScreenSidebar'
import ProfileScreen from './Screens/ProfileScreen/ProfileScreen'
const App = () => {
  const [Screens, SetScreens] = useState('Todos')

  const location = useLocation()
  const { isDesktop, isTablet } = mediaQueriesHook()

  const isChatRoute = location.pathname.startsWith('/contact/')

  const isMobile = !isDesktop && !isTablet

  const showContactsContainer = isDesktop || (!isChatRoute && !isDesktop)
  const showScreenContainer = isDesktop || (isChatRoute && !isDesktop)

  return (
    <div className='app-container'>

      {showContactsContainer && (
        <>
          {(isDesktop || isTablet) && (
            <div className={isDesktop ? 'sidebar-app-container' : 'sidebar-app-container-tablet-ui'}>
              <Sidebar />
            </div>)}
          <div className={isDesktop ? 'contacts-container' : 'contacts-container-mobile-ui'} style={{ border: '1px solid #ddddddff' }}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <SearchBar Screens={Screens} SetScreens={SetScreens} />
                    <div className="contacts-list-scrollable">
                      <ContactScreen Screens={Screens} className="contacts-list-container" />
                    </div>
                  </>
                }
              />
              <Route
                path="/contact/:contact_id/messages"
                element={
                  <>
                    <SearchBar Screens={Screens} SetScreens={SetScreens} />
                    <div className="contacts-list-scrollable">
                      <ContactScreen Screens={Screens} className="contacts-list-container" />
                    </div>
                  </>
                }
              />
              <Route path="/status" element={<ContactStatusScreenSidebar />} />
              <Route path="/channels" element={<ChannelsScreenSidebar />} />
              <Route path="/communities" element={<CommunitiesScreenSidebar />} />
              <Route path="/settings" element={<SettingsScreenSidebar />} />
              <Route path="/profile" element={<ProfileScreenSidebar />} />
            </Routes>
          </div>
          {isMobile && (
            <div className="sidebar-app-container-mobile-ui">
              <Sidebar />
            </div>
          )}

        </>)}

      {showScreenContainer && (

        <div className='screen-container'>
          {isTablet && (
            <div className="sidebar-app-container-tablet-ui">
              <Sidebar />
            </div>
          )}
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/contact/:contact_id/messages" element={<ChatScreen />} />
            <Route path="/status" element={<ContactStatusScreen />} />
            <Route path="/channels" element={<ChannelsScreen />} />
            <Route path="/communities" element={<CommunitiesScreen />} />
            <Route path="/settings" element={<SettingsScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>

        </div>
      )
      }
    </div>

  )
}
export default App
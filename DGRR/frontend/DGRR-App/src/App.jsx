import React from 'react'
import LoginForm from './containers/user/LoginForm'
import RegisterForm from './containers/user/RegisterForm'
import { Routes, Route } from 'react-router-dom'
import Login from './components/user/Login'
import KioskSelect from './components/kiosk/KioskSelect'
import KioskLogin from './components/kiosk/offline/KioskLogin'
import KioskOfflineGame from './components/kiosk/offline/KioskOfflineGame'
import KioskOfflineResult from './components/kiosk/offline/KioskOfflineResult'
import KioskOnlineLogin from './components/kiosk/online/KioskOnlineLogin'
import KioskOnlineProfile from './components/kiosk/online/KioskOnlineProfile'
import KioskOnlineFind from './components/kiosk/online/KioskOnlineFind'
import KioskOnlineMatching from './components/kiosk/online/KioskOnlineMatching'
import KioskOnlineGame from './components/kiosk/online/KioskOnlineGame'
import MainPage from './pages/Mainpage'
import Rankingpage from './pages/Rankingpage'
import OnlineScoreTable from './components/kiosk/online/OnlineScoreTable'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/KioskSelect" element={<KioskSelect />} />
      <Route path="/KioskLogin" element={<KioskLogin />} />
      <Route path="/KioskOfflineGame" element={<KioskOfflineGame />} />
      <Route path="/KioskOfflineResult" element={<KioskOfflineResult />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/main" element={<MainPage />} />
      <Route path=":nickName" element={<MainPage />} />
      <Route path="ranking" element={<Rankingpage />} />
      <Route path="/KioskOnlineLogin" element={<KioskOnlineLogin />} />
      <Route path="/KioskOnlineProfile" element={<KioskOnlineProfile />} />
      <Route path="/KioskOnlineFind" element={<KioskOnlineFind />} />
      <Route path="/KioskOnlineMatching" element={<KioskOnlineMatching />} />
      <Route path="/KioskOnlineGame" element={<KioskOnlineGame />} />
      <Route path="/OnlineScoreTable" element={<OnlineScoreTable />} />
    </Routes>
  )
}

export default App

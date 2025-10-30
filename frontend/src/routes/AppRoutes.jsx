import { react } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import OnboardDetails from '../pages/OnboardDetails'
// import OnboardOtpVerify from '../pages/OnboardOtpVerify'
import HomePage from '../pages/HomePage'
import VideoPage from '../pages/VideoPage'
import LoginPage from '../pages/LoginPage'
import AssignmentPage from '../pages/AssignmentPage'

function AppRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/assignment" element={<AssignmentPage />} />
        <Route path="/dashboard" element={<HomePage />} />
        <Route path="/video" element={<VideoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes

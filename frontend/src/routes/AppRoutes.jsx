import { react } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import OnboardPhone from '../pages/OnboardPhone'
import OnboardDetails from '../pages/OnboardDetails'
import OnboardOtpVerify from '../pages/OnboardOtpVerify'
import HomePage from '../pages/HomePage'
import VideoPage from '../pages/VideoPage'

function AppRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnboardPhone />} />
        <Route path="/onboard-details" element={<OnboardDetails />} />
        <Route path="/onboard-otp-verify" element={<OnboardOtpVerify />} />
        <Route path="/dashboard" element={<HomePage />} />
        <Route path="/video" element={<VideoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes

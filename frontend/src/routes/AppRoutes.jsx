import { react } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import OnboardDetails from '../pages/OnboardDetails'
// import OnboardOtpVerify from '../pages/OnboardOtpVerify'
import HomePage from '../pages/HomePage'
import VideoPage from '../pages/VideoPage'
import LoginPage from '../pages/LoginPage'
import AssignmentPage from '../pages/AssignmentPage'

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import MorePage from '../pages/MorePage'
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage'
import TermsConditionPage from '../pages/TermsConditionPage'

// ... existing code ...

function AppRoutes() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = Cookies.get("jwt_token");
    if (token && location.pathname === "/") {
      navigate("/");
    }
  }, [navigate, location]);

  return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/assignment" element={<AssignmentPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/more" element={<MorePage />} />
        {/* open pages */}
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-and-conditions" element={<TermsConditionPage />} />
      </Routes>
  )
}

function AppRoutesWrapper() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default AppRoutesWrapper;

import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import HomePage from "./pages/HomePage";
import VideoPage from "./pages/VideoPage";
import OnboardPhone from "./pages/OnboardPhone"; // mobile number enter + OTP send
import OnboardDetails from "./pages/OnboardDetails"; // basic details enter
import OnboardOtpVerify from "./pages/OnboardOtpVerify"; // OTP verify firebase

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<OnboardPhone />} />
        <Route path="/onboard-details" element={<OnboardDetails />} />
        <Route path="/onboard-otp-verify" element={<OnboardOtpVerify />} />
        <Route path="/dashboard" element={<HomePage />} />
        <Route path="/video" element={<VideoPage />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App

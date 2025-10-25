import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import HomePage from "./pages/HomePage";
import VideoPage from "./pages/VideoPage";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/video" element={<VideoPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App

import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import { Toaster } from "react-hot-toast";
import AppRoutes from './routes/AppRoutes';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppRoutes />
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </>
  );
}

export default App

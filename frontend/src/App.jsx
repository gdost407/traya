import { useState } from 'react'

import './App.css'
import { Toaster } from "react-hot-toast";
import AppRoutesWrapper from './routes/AppRoutes';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppRoutesWrapper />
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </>
  );
}

export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import JO from './pages/JO.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/home' element={<Home />} />
        <Route path='/jo' element={<JO />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

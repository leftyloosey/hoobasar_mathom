import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import './index.css'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import Resources from './pages/Resources.jsx'
import Project from './pages/Project.jsx'

import Stories from './pages/Stories.jsx'
import JO from './pages/folder_stories/JO.jsx'
import M from './pages/folder_stories/M.jsx'
import JH from './pages/folder_stories/JH.jsx'
import B from './pages/folder_stories/B.jsx'
import PS from './pages/folder_stories/PS.jsx'
import LSE from './pages/folder_stories/LSE.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='/jo' element={<JO />} />
          <Route path='/m' element={<M />} />
          <Route path='/jh' element={<JH />} />
          <Route path='/b' element={<B />} />
          <Route path='/ps' element={<PS />} />
          <Route path='/lse' element={<LSE />} />
          <Route path='/stories' element={<Stories />} />
          <Route path='/resources' element={<Resources />} />
          <Route path='/project' element={<Project />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

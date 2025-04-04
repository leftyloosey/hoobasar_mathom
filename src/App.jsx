import { useState } from 'react'
import { Link } from 'react-router'
import { Outlet } from 'react-router'

import Header from './components/Header'
import Sidebar from './components/Sidebar'

import './App.css'

function App() {
  const [toggleNav, setToggleNav] = useState(false)
  const toggler = () => {
    setToggleNav(!toggleNav)
    console.log(toggleNav)
  }
  return (
    <div>
      <header>
        <Header />

        <div
          className={`pl-2 pr-2 absolute right-2 top-2 font-bold text-2xl text-white bg-black duration-500 ${
            toggleNav ? 'rotate-90' : ''
          }`}
          onClick={() => toggler()}
        >
          x
        </div>
        <div
          className={`absolute right-0 duration-300 ${
            // toggleNav ? '' : ''
            toggleNav ? '-translate-x-16' : 'translate-x-32'
          }`}
        >
          <Sidebar toggleNav={toggleNav} />
        </div>
        <p>{/* <Link to='/jo'>jo</Link> */}</p>
      </header>
      <Outlet />
    </div>
  )
}

export default App

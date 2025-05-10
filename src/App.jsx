import { useState } from 'react'
import { Outlet } from 'react-router'

import Header from './components/Header'
import Sidebar from './components/Sidebar'

import './App.css'

function App() {
  const [toggleNav, setToggleNav] = useState(false)
  const [hideExcess, setHideExcess] = useState(false)
  // const [storyLoad, setStoryLoad] = useState(false)
  const toggler = (toggleNav, setToggleNav, hideExcess, setHideExcess) => {
    setToggleNav(!toggleNav)

    setTimeout(() => {
      setHideExcess(!hideExcess)
    }, 50)
  }

  return (
    <div className=''>
      <header>
        <Header />
        <div
          className={`pl-2 pr-2 absolute right-2 top-1 rounded-full font-bold text-2xl text-white bg-black duration-500  ${
            toggleNav ? 'rotate-90' : ''
          }`}
          onClick={() =>
            toggler(toggleNav, setToggleNav, hideExcess, setHideExcess)
          }
        >
          <button>[]</button>
        </div>

        <div className=''>
          <div
            className={`absolute right-0 duration-300
            ${hideExcess ? '-translate-x-16' : 'invisible'}
            
            `}
          >
            <Sidebar
              // storyLoad={storyLoad}
              // setStoryLoad={setStoryLoad}
              toggleNav={toggleNav}
              setToggleNav={setToggleNav}
              hideExcess={hideExcess}
              setHideExcess={setHideExcess}
              // toggler={toggler}
            />
          </div>
        </div>
      </header>
      <div className='bg-white pt-6'>
        <Outlet />
        {/* <Outlet context={[storyLoad, setStoryLoad]} /> */}
      </div>
    </div>
    // </div>
  )
}

export default App

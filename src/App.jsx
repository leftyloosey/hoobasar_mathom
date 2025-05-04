import { useState } from 'react'
import { Outlet } from 'react-router'

import Header from './components/Header'
import Sidebar from './components/Sidebar'

import './App.css'

function App() {
  const [toggleNav, setToggleNav] = useState(false)
  const [hideExcess, setHideExcess] = useState(false)
  const [storyLoad, setStoryLoad] = useState(false)
  const toggler = () => {
    setToggleNav(!toggleNav)
    console.log(toggleNav)
    setTimeout(() => {
      setHideExcess(!hideExcess)
    }, 50)
  }

  return (
    <div className='bg-black'>
      <header>
        <Header />
        <div
          className={`pl-2 pr-2 absolute right-2 top-1 rounded-full font-bold text-2xl text-white bg-black duration-500  ${
            toggleNav ? 'rotate-90' : ''
          }`}
          onClick={() => toggler()}
        >
          <button>[]</button>
        </div>
        <div className=''>
          <div
            className={`absolute right-0 duration-300
            ${hideExcess ? '-translate-x-16' : 'invisible'}
            ${toggleNav ? '' : ''}
            `}
          >
            <Sidebar
              storyLoad={storyLoad}
              setStoryLoad={setStoryLoad}
              toggleNav={toggleNav}
            />
          </div>
        </div>
      </header>
      <div className='h-[50vh] md:h-[80vh]'>
        <Outlet context={[storyLoad, setStoryLoad]} />
      </div>
    </div>
    // </div>
  )
}

export default App

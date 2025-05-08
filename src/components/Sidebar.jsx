import { Link } from 'react-router'

const Sidebar = ({
  toggleNav,
  setToggleNav,
  toggler,
  storyLoad,
  hideExcess,
  setHideExcess,
}) => {
  return (
    <div
      className={`flex flex-row pt-1 duration-300 z50 ${
        toggleNav ? 'gap-x-16 pr-1.5' : 'text-white -translate-x-16 gap-x-96'
      }
       ${storyLoad ? 'md:-translate-x-72 md:mr-3' : ''}  
       ${storyLoad && !toggleNav ? 'gap-x-96 opacity-0' : ''}  `}
    >
      <div
        onClick={() =>
          toggler(toggleNav, setToggleNav, hideExcess, setHideExcess)
        }
      >
        <Link className='hover:bg-black hover:text-white' to='/stories'>
          Stories
        </Link>
      </div>

      <div
        onClick={() =>
          toggler(toggleNav, setToggleNav, hideExcess, setHideExcess)
        }
      >
        <Link className='hover:bg-black hover:text-white' to='/project'>
          Project
        </Link>
      </div>

      <div
        onClick={() =>
          toggler(toggleNav, setToggleNav, hideExcess, setHideExcess)
        }
      >
        <Link className='hover:bg-black hover:text-white' to='/resources'>
          Resources
        </Link>
      </div>
    </div>
  )
}

export default Sidebar

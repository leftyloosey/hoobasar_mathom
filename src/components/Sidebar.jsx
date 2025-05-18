import { Link } from 'react-router'

const Sidebar = ({
  toggleNav,
  setToggleNav,
  toggler,
  hideExcess,
  setHideExcess,
}) => {
  return (
    <div
      onClick={() =>
        toggler(toggleNav, setToggleNav, hideExcess, setHideExcess)
      }
      className={`flex flex-row pt-1 duration-300 z50 ${
        toggleNav ? 'gap-x-16' : 'text-white -translate-x-16 gap-x-96'
      }
        `}
    >
      <div>
        <Link className='hover:bg-black hover:text-white' to='/stories'>
          Stories
        </Link>
      </div>

      <div>
        <Link className='hover:bg-black hover:text-white' to='/project'>
          Project
        </Link>
      </div>

      <div>
        <Link className='hover:bg-black hover:text-white' to='/resources'>
          Resources
        </Link>
      </div>
    </div>
  )
}

export default Sidebar

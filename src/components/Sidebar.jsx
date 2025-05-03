import { Link } from 'react-router'

const Sidebar = ({ toggleNav, storyLoad }) => {
  console.log('sidebar storyload', storyLoad)
  return (
    <div
      className={`flex flex-row duration-500 z-50 ${
        toggleNav ? 'gap-x-16' : 'text-white -translate-x-16 gap-x-96'
      }
      //  ${storyLoad ? 'md:-translate-x-72' : ''}  
      //  ${storyLoad ? ' ' : ''}  
       ${storyLoad && !toggleNav ? 'gap-x-96 opacity-0' : ''}  `}
    >
      <div>
        <Link className='hover:bg-black hover:text-white' to='/stories'>
          Stories
        </Link>
      </div>

      <div>
        <Link className='hover:bg-black hover:text-white' to='/stories'>
          Option
        </Link>
      </div>

      <div>
        <Link className='hover:bg-black hover:text-white' to='/stories'>
          Option
        </Link>
      </div>
    </div>
  )
}

export default Sidebar

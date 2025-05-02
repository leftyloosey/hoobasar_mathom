import { Link } from 'react-router'

const Sidebar = ({ toggleNav, storyLoad }) => {
  console.log('sidebar storyload', storyLoad)
  return (
    <div
      className={`flex flex-row duration-100 ${
        toggleNav ? 'gap-x-16' : 'text-white -translate-x-16 gap-x-96'
      }
       ${storyLoad ? 'text-white ' : ''}  
       ${storyLoad && !toggleNav ? 'gap-x-96 opacity-0 ' : ''}  `}
    >
      <div className='hover:bg-black hover:text-white'>
        <Link className='hover:bg-black hover:text-white' to='/stories'>
          {/* <Link className='hover:bg-black hover:text-white' to='/stories'> */}
          Stories
        </Link>
        .
      </div>

      <div className='hover:bg-black hover:text-white'>
        <Link className='hover:bg-black hover:text-white' to='/stories'>
          {/* <Link className='hover:bg-black hover:text-white' to='/stories'> */}
          Option
        </Link>
        .
      </div>

      <div className='hover:bg-black hover:text-white'>
        <Link className='hover:bg-black hover:text-white' to='/stories'>
          {/* <Link className='hover:bg-black hover:text-white' to='/stories'> */}
          Option
        </Link>
        .
      </div>
    </div>
  )
}

export default Sidebar

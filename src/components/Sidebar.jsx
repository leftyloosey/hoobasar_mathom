import { Link } from 'react-router'

const Sidebar = ({ toggleNav }) => {
  return (
    <div
      className={`flex flex-row duration-700 ${toggleNav ? 'gap-x-16' : ''}`}
    >
      {/* <span className='bg-black text-white'>&lt;</span> */}
      {/* <span className='hover:bg-black hover:text-white'> */}
      <Link className='hover:bg-black hover:text-white' to='/stories'>
        Stories
      </Link>
      {/* </span> */}
      <span className='hover:bg-black hover:text-white'>Word</span>
      <span className='hover:bg-black hover:text-white'>Word</span>
    </div>
  )
}

export default Sidebar

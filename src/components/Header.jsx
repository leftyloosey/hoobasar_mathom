import { Link } from 'react-router'

const Header = () => {
  return (
    <div className=''>
      <div className='text-white font-bold text-2xl md:text-3xl text-nowrap mb-2'>
        <div className='bg-black w-full pl-2 pt-2'>
          <Link to='/'>Utah Housing Insecurity Project</Link>
        </div>
      </div>
    </div>
  )
}

export default Header

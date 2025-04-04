import { Link } from 'react-router'

const Header = () => {
  return (
    <div className='text-white font-bold text-2xl text-nowrap w-screen mb-4'>
      <div className='bg-black w-96 pl-2 pt-2'>
        <Link to='/'>Utah Housing Insecurity Project</Link>
      </div>
    </div>
  )
}

export default Header

import { Link } from 'react-router'

const Header = () => {
  // let location = useLocation()
  // let subtitle
  // if (location.pathname == '/resources') {
  //   subtitle = 'Resources'
  // } else if (location.pathname == '/stories') {
  //   subtitle = 'Stories'
  // } else {
  //   subtitle = ''
  // }
  return (
    <div className=''>
      <div className='text-white font-bold pl-2 text-2xl md:text-3xl text-nowrap translate-y-1 mb-1'>
        <div className='bg-black w-full pl-2  '>
          <Link to='/'>Utah Housing Insecurity Project</Link>
          {/* <span>{' ' + ' - ' + subtitle}</span> */}
        </div>
      </div>
    </div>
  )
}

export default Header

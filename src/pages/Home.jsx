import { Link } from 'react-router'
import backgroundVideo from '../assets/drone_short.mp4'

import Header from '../components/Header'

const Home = () => {
  return (
    <div className='bg-white pt-46 md:pt-2 md:border-l-16 md:border-r-16'>
      <div className='h-8'></div>

      <video autoPlay playsInline muted loop id='video'>
        <source src={backgroundVideo} type='video/mp4'></source>
      </video>
    </div>
  )
}

export default Home

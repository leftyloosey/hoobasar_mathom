import { Link } from 'react-router'
import backgroundVideo from '../assets/drone_short.mp4'

import Header from '../components/Header'

const Home = () => {
  return (
    <div className='pt-46 mt-6 md:pt-2'>
      <video autoPlay playsInline muted loop id='video'>
        <source src={backgroundVideo} type='video/mp4'></source>
      </video>
    </div>
  )
}

export default Home

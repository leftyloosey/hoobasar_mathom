import { Link } from 'react-router'
import DetectScreen from '../components/DetectScreen'
import droneLarge from '../assets/drone_footage/drone_loop_how_long.mp4'
// import droneLarge from '../assets/drone_footage/drone_short.mp4'
// import droneMobileAspect from '../assets/drone_footage/drone_mobile_aspect.mp4'

const Home = () => {
  let height
  if (DetectScreen().width < 640) {
    height = 71 + 'vh'
  } else {
    height = 100 + 'vh'
  }

  return (
    <div className='transition-opacity ease-in-out duration-500'>
      <div className='bg-white h-8'></div>

      <video
        style={{
          // position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: height,
          objectFit: 'cover',
          zIndex: -1000,
        }}
        autoPlay
        playsInline
        muted
        loop
        // id='video'
      >
        <source src={droneLarge} type='video/mp4'></source>
      </video>
    </div>
  )
}

export default Home

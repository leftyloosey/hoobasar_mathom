import { useInView } from 'react-intersection-observer'
import ReactAudioPlayer from 'react-audio-player'
import SideMenu from './SideMenu.jsx'
import { useEffect, useState } from 'react'

const StoryPage = ({ abstract, audio, photoRay }) => {
  const InView = () => {
    // eslint-disable-next-line
    const { ref, inView, entry, rootMargin } = useInView({
      threshold: 0,
      initialInView: false,
      rootMargin: '100% 0% -10% 0%',
      // rootMargin: '50px 0px 10px 0px', // good
    })
    const [bringUp, setBringUp] = useState(false)

    useEffect(() => {
      setBringUp(true)
    }, [])

    return (
      <div
        className={`bg-white flex flex-col duration-700 ${bringUp ? '' : ''}`}
      >
        <div className=''>
          <div className={` ${inView ? '' : ''}`}>{abstract}</div>
        </div>
        <div
          className={`bg-white transition-opacity ease-in-out duration-500 lg:mt-20 ${
            inView ? ' ' : 'opacity-0'
          }`}
        >
          <div className=''>
            <SideMenu photoRay={photoRay} />
          </div>

          <div ref={ref} className=''>
            <h2>{`inside viewport ${inView}.`}</h2>
          </div>
          <div className=''>
            <div className=''>
              <ReactAudioPlayer src={audio} controls />
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <>
      <InView />
    </>
  )
}

export default StoryPage

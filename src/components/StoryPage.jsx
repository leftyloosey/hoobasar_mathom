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
      rootMargin: '100% 0% 0% 0%',
      // rootMargin: '50px 0px 10px 0px',
    })
    const [bringUp, setBringUp] = useState(false)

    useEffect(() => {
      setBringUp(true)
    }, [])

    return (
      <div className='bg-white'>
        <div
          className={`flex flex-col duration-500  ${
            // bringUp ? 'h-[50vh]' : 'h-[71vh]'
            bringUp ? 'h-[40vh]' : 'h-[0vh]'
          }`}
        >
          <div className='bg-white flex justify-center'>
            <div
              className={`mt-8 w-3/4 text-xl shadow-md duration-500 ${
                inView ? 'translate-y-24' : ''
              }`}
            >
              {abstract}
            </div>
          </div>
          <div className='bg-white pb-48 h-8 duration700'></div>
          <div
            className={`bg-white transition-opacity ease-in-out duration-500 ${
              inView ? '' : 'opacity-0'
            }`}
          >
            <div className='bg-white duration-500'>
              <SideMenu photoRay={photoRay} />
            </div>
            <div ref={ref} className='invisible  w-0'>
              <h2>{`inside viewport ${inView}.`}</h2>
            </div>
            <div className='flex justify-center mt-24 mb-8'>
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

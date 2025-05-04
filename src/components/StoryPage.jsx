import { useInView } from 'react-intersection-observer'
import ReactAudioPlayer from 'react-audio-player'
import SideMenu from './SideMenu.jsx'

const StoryPage = ({ abstract, audio, photoRay }) => {
  const InView = () => {
    // eslint-disable-next-line
    const { ref, inView, entry, rootMargin } = useInView({
      threshold: 0,
      initialInView: false,
      rootMargin: '100% 0% -10% 0%',
      // rootMargin: '50px 0px 10px 0px', // good
    })

    return (
      <div className=' bg-white flex flex-col h-[60vh] border-r-32 border-l-32 border-black border-solid duration-700'>
        <div className='flex justify-center '>
          <div
            className={`pl-2 pr-1 border-0 abstract-fade mb-32 flex w-3/4 text-xl duration-500 ${
              inView
                ? 'translate-y-32 md:translate-y-30 lg:translate-y-32'
                : 'translate-y-16 shadow-md'
            }`}
          >
            {abstract}
          </div>
        </div>
        <div
          className={`bg-white transition-opacity ease-in-out duration-500 lg:mt-20 ${
            inView ? ' ' : 'opacity-0'
          }`}
        >
          <div className='flex justify-center'>
            <SideMenu photoRay={photoRay} />
          </div>

          <div ref={ref} className='invisible w-0'>
            <h2>{`inside viewport ${inView}.`}</h2>
          </div>
          <div className='flex flex-col justify-center'>
            <div className='flex justify-center mt-4 pt-16 -translate-y-16'>
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

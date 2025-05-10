// import { useInView } from 'react-intersection-observer'
import DetectScreen from './DetectScreen.jsx'
import ReactAudioPlayer from 'react-audio-player'
import SideMenu from './SideMenu.jsx'
// import { useState } from 'react'

const StoryPage = ({ abstract, audio, photoRay }) => {
  //   const [storyGalleryWide, setstoryGalleryWide] = useState(false)
  //   if (DetectScreen().width > 640) setstoryGalleryWide(true)

  const InView = () => {
    // const { ref, inView } = useInView({
    //   threshold: 0.1,
    //   initialInView: false,
    //   rootMargin: '100% 0% 0% 0%',
    //   // rootMargin: '50px 0px 10px 0px',
    // })
    // const [bringUp, setBringUp] = useState(false)

    // useEffect(() => {
    //   setBringUp(true)
    // }, [])

    return (
      <div className='bg-white'>
        <div
          className='flex flex-col duration-100'
          //   className={`flex flex-col duration-100  ${
          //     bringUp ? 'h-[50vh]' : 'h-[71vh]'
          //   }`}
        >
          <div
            className='flex justify-center duration-500'
            // className={`bg-white flex justify-center duration-500 h-[50vh] z-50 ${
            //   inView ? 'translate-y-64' : ''
            // }`}
          >
            <div className={`mt-8 w-5/6 text-xl p-4 mb-16 duration-500`}>
              {abstract}
            </div>
          </div>

          <div
          // className={`transition-opacity ease-in-out duration-500 ${
          //   inView ? 'bg-white opacity-100 ' : 'bg-black opacity-0'
          // }`}
          >
            <div
              className=''
              //   className={`transition-opacity ease-in-out duration-500 mt-64 ${
              //     inView
              //       ? 'bg-white opacity-100 -translate-y16'
              //       : 'bg-black opacity-0'
              //   }`}
            >
              {/* <div className='bg-white h-30 mt-16 duration00'></div> */}
              <div className='bg-white duration-500'>
                <SideMenu photoRay={photoRay} />
              </div>
              {/* <div ref={ref} className='invisible w-0'>
                <h2>{`inside viewport ${inView}.`}</h2>
              </div> */}
              <div className='flex justify-center mt4 mb-8'>
                <ReactAudioPlayer src={audio} controls />
              </div>
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

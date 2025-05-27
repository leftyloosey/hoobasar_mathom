import ReactAudioPlayer from 'react-audio-player'
import SideMenu from './SideMenu.jsx'
import ModalImage from 'react-modal-image'

import { useEffect, useState } from 'react'

const StoryPage = ({ abstract, audio, photoRay, livingRoomPlan }) => {
  const [width, setWidth] = useState(window.innerWidth)
  const [hoverer, setHoverer] = useState(photoRay[0])

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className='bg-white pb-8 md:h-[170vh] lg:h-[90vh] short-abstract-fade'>
      <div className='flex flex-col pl-1 pr-1'>
        <div className='flex justify-center'>
          <div className={`mt-8 w-5/6 text-xl p-4 mb-1`}>{abstract}</div>
        </div>

        <div className=''>
          {width > 1081 ? (
            // {width > 640 ? (
            <div className='flex flex-row justify-center md:gap-x-4 lg:gap-x-20'>
              <div className='flex flex-col'>
                <div className='flex mb-8 justify-center mt-4'>
                  <ReactAudioPlayer className='w-[30vw]' src={audio} controls />
                </div>
                {livingRoomPlan ? (
                  <div className='flex flex-row'>
                    <img
                      className='h-32 w-auto -mt-2.5'
                      src={livingRoomPlan}
                      onLoad={() => setHoverer(livingRoomPlan)}
                      onMouseEnter={() => setHoverer(livingRoomPlan)}
                      onMouseLeave={() => setHoverer(livingRoomPlan)}
                      alt=''
                    />
                    <div className='flex flex-row gap-x-2 h-48 w-96'>
                      {photoRay.map((photo, index) => (
                        <div key={index}>
                          <img
                            className='shadow-md'
                            src={photo}
                            onMouseEnter={() => setHoverer(photo)}
                            onMouseLeave={() => setHoverer(photo)}
                            index={index}
                          ></img>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className='flex justify-center'>
                    <div className='flex flex-row gap-x-2 h-48 w-96'>
                      {photoRay.map((photo, index) => (
                        <div key={index}>
                          <img
                            className='shadow-md'
                            src={photo}
                            onMouseEnter={() => setHoverer(photo)}
                            onMouseLeave={() => setHoverer(photo)}
                            index={index}
                          ></img>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className='w-[40vw] h-auto'>
                <ModalImage
                  className='shadow-md m-4 h-96'
                  small={hoverer}
                  large={hoverer}
                />
              </div>
            </div>
          ) : (
            <div className=''>
              <div className='flex mb-8 justify-center'>
                <ReactAudioPlayer className='' src={audio} controls />
              </div>
              <div className='flex flex-row'>
                {livingRoomPlan ? (
                  <SideMenu plan={livingRoomPlan} photoRay={photoRay} />
                ) : (
                  <SideMenu photoRay={photoRay} />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default StoryPage

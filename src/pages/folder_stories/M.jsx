// import { useState } from 'react'
// import { useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import ReactAudioPlayer from 'react-audio-player'
import ModalImage from 'react-modal-image'

import M_talking from '../../assets/JO/JO_talking.wav'
import { M_abstract } from '../../assets/M/M_constants.js'

// import front_door from '../../assets/M/front_door.JPG'
// import u_courtyard from '../../assets/M/u_courtyard.JPG'
// import building_side from '../../assets/M/building_side.JPG'
// import vent from '../../assets/M/vent.JPG'
// import stove from '../../assets/M/stove.JPG'

import SideMenu from '../../components/SideMenu.jsx'

// import front_door_thumb from '../../assets/JO/front_door_thumb.png'
// import suburb_thumb from '../../assets/JO/suburb_thumb.jpg'
// import house_front_thumb from '../../assets/JO/house_front_thumb.jpg'
// import kitchen_table_thumb from '../../assets/JO/kitchen_table_thumb.jpg'

// import living_room_plan from '../../assets/JO/living_room_plan.jpg'

import Header from '../../components/Header.jsx'
import Navigate from '../../components/Navigate.jsx'

const M = () => {
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
            {M_abstract}
          </div>
        </div>
        <div
          className={`bg-white transition-opacity ease-in-out duration-500 lg:mt-20 ${
            inView ? ' ' : 'opacity-0'
          }`}
        >
          <div className='flex justify-center'>
            <SideMenu />
          </div>

          {/* <div className='bg-white mt-1 flex flex-row scrollmenu h-32 gap-x-9 ml-2 mr-2 md:gap-x-16 lg:flex-wrap lg:pt-4 lg:justify-center'>
            <ModalImage
              className='shadow-md pt-2 h-32 w-32'
              small={vent}
              large={vent}
            />

            <ModalImage
              className='shadow-md pt-8 h-32 w-32'
              small={building_side}
              large={building_side}
            />
            <ModalImage
              className='shadow-md h-32 w-32'
              small={front_door}
              large={front_door}
            />

            <ModalImage
              className='shadow-md h-32 w-32'
              small={u_courtyard}
              large={u_courtyard}
            />
            <ModalImage
              className='shadow-md h-32 w-32'
              small={stove}
              large={stove}
            />
          </div> */}
          <div ref={ref} className='invisible w-0'>
            <h2>{`inside viewport ${inView}.`}</h2>
          </div>
          <div className='flex flex-col justify-center'>
            <div className='flex justify-center mt-4 pt-16 -translate-y-16'>
              <ReactAudioPlayer src={M_talking} controls />
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

export default M

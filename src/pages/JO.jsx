// import { useState } from 'react'
// import { useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import ReactAudioPlayer from 'react-audio-player'
import ModalImage from 'react-modal-image'

import JO_talking from '../assets/JO/JO_talking.wav'

import JO_abstract from '../assets/JO/JO_abstract.js'

import front_door from '../assets/JO/front_door.jpg'
import suburb from '../assets/JO/suburb1.jpg'
import house_front from '../assets/JO/house_front.jpg'
import kitchen_table from '../assets/JO/kitchen_table.jpg'

import front_door_thumb from '../assets/JO/front_door_thumb.png'
import suburb_thumb from '../assets/JO/suburb_thumb.jpg'
import house_front_thumb from '../assets/JO/house_front_thumb.jpg'
import kitchen_table_thumb from '../assets/JO/kitchen_table_thumb.jpg'

import living_room_plan from '../assets/JO/living_room_plan.jpg'

import Header from '../components/Header'
import Navigate from '../components/Navigate.jsx'

const JO = () => {
  // const [toggleNav, setToggleNav] = useState(false)

  const InView = () => {
    const { ref, inView, entry, rootMargin } = useInView({
      threshold: 0.5,
      initialInView: false,
      //   rootMargin: '100% 0% -50% 0%',
      rootMargin: '-50px 0px 10px 0px',
    })
    console.log(entry)
    console.log(rootMargin)
    console.log(inView)
    return (
      <div>
        {/* <Header /> */}
        <div
          className={`pl-2 pr-1 shadow-md border-0 abstract-fade mb-32 duration-500 ${
            inView
              ? 'translate-y-28 md:translate-y-30 lg:translate-y-32'
              : 'translate-y-16 '
          }`}
        >
          {JO_abstract}
        </div>

        <div
          className={`transition-opacity ease-in-out duration-700  ${
            inView ? '' : 'opacity-0'
          }`}
        >
          <div className='flex flex-row ml-2 mr-2 gap-2 md:gap-x-16 lg:flex-wrap lg:pt-4 lg:justify-center'>
            <ModalImage
              className='shadow-2xl pt-2'
              small={kitchen_table_thumb}
              large={kitchen_table}
            />

            <ModalImage
              className='shadow-2x pt-9'
              small={suburb_thumb}
              large={suburb}
            />
            <ModalImage
              className='shadow-2xl'
              small={front_door_thumb}
              large={front_door}
            />

            <ModalImage
              className='shadow-2xl'
              small={house_front_thumb}
              large={house_front}
            />
          </div>

          <img src={living_room_plan} alt='living room plan' />
          <div ref={ref} className='text-white'>
            <h2>{`inside viewport ${inView}.`}</h2>
          </div>
          <div className='flex justify-center mt-4 pt-16 -translate-y-16'>
            <ReactAudioPlayer src={JO_talking} controls />
          </div>
        </div>

        {/* <div
          className={`mb-32 md:mb-16  ${inView ? 'h-16 lg:h-24' : 'h-44'}`}
        ></div> */}
        {/* <div className='h-44 mb-32'></div> */}
        {/* <div ref={ref} className='text-white'>
          <h2>{`inside viewport ${inView}.`}</h2>
        </div> */}
      </div>
    )
  }
  return (
    <>
      <InView />
    </>
  )
}

export default JO

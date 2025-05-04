// import { useState } from 'react'
// import { useRef } from 'react'
// import { useInView } from 'react-intersection-observer'
import ReactAudioPlayer from 'react-audio-player'
import ModalImage from 'react-modal-image'
// import bob from '../../'
import JO_talking from '../../assets/JO/JO_talking.wav'
import StoryPage from '../../components/StoryPage.jsx'

import { M_abstract } from '../../assets/M/M_constants.js'

import front_door from '../../assets/JO/front_door.JPG'
import suburb from '../../assets/JO/suburb1.JPG'
import house_front from '../../assets/JO/house_front.JPG'
import kitchen_table from '../../assets/JO/kitchen_table.JPG'

// import front_door_thumb from '../../assets/JO/front_door_thumb.png'
// import suburb_thumb from '../../assets/JO/suburb_thumb.jpg'
// import house_front_thumb from '../../assets/JO/house_front_thumb.jpg'
// import kitchen_table_thumb from '../../assets/JO/kitchen_table_thumb.jpg'

// import living_room_plan from '../../assets/JO/living_room_plan.jpg'
const photoRay = [front_door, suburb, house_front, kitchen_table]
const M = () => {
  // const InView = () => {
  //   const { ref, inView, entry, rootMargin } = useInView({
  //     threshold: 0,
  //     initialInView: false,
  //     rootMargin: '100% 0% -35% 0%',
  //     // rootMargin: '-50px 0px 10px 0px', // good
  //   })
  //   console.log(entry)
  //   console.log(rootMargin)
  //   console.log(inView)
  //   return (
  //     <div className='flex flex-col overflow-hidden border-r-32 border-l-32 border-black border-solid duration-700'>
  //       {/* <Header /> */}
  //       <div className='flex justify-center bg-white'>
  //         <div
  //           className={`pl-2 pr-1 border-0 abstract-fade mb-32 flex w-3/4 text-xl duration-500 ${
  //             inView
  //               ? 'translate-y-32 md:translate-y-30 lg:translate-y-32'
  //               : 'translate-y-16 shadow-md'
  //           }`}
  //         >
  //           {JO_abstract}
  //         </div>
  //       </div>

  //       <div
  //         className={`bg-white transition-opacity ease-in-out duration-700 lg:mt-20  ${
  //           inView ? 'h-fit ' : 'opacity-0'
  //         }`}
  //       >

  //         <div ref={ref} className='invisible w-0'>
  //           <h2>{`inside viewport ${inView}.`}</h2>
  //         </div>
  //         <div className='flex flex-col justify-center'>
  //           <div className='flex justify-center mt-4 pt-16 -translate-y-16'>
  //             <ReactAudioPlayer src={JO_talking} controls />
  //           </div>
  //         </div>
  //         <div className='flex justify-center'>
  //           <img className='' src={living_room_plan} alt='living room plan' />
  //         </div>

  //       </div>
  //     </div>
  //   )
  // }
  return (
    <>
      <StoryPage abstract={M_abstract} audio={JO_talking} photoRay={photoRay} />
      {/* <InView /> */}
    </>
  )
}

export default M

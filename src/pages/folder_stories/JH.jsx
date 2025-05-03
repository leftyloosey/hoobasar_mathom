import { useInView } from 'react-intersection-observer'
import ReactAudioPlayer from 'react-audio-player'
// import ModalImage from 'react-modal-image'
import SideMenu from '../../components/SideMenu.jsx'
import JH_talking from '../../assets/JO/JO_talking.wav'
import { JH_abstract } from '../../assets/JH/JH_constants.js'
// import inside_door from '../../assets/JH/inside_door.JPG'
// import living_room from '../../assets/JH/living_room.JPG'
// import coffee from '../../assets/JH/coffee.JPG'
// import mitts from '../../assets/JH/mitts.JPG'

// import front_door_thumb from '../../assets/JO/front_door_thumb.png'
// import suburb_thumb from '../../assets/JO/suburb_thumb.jpg'
// import house_front_thumb from '../../assets/JO/house_front_thumb.jpg'
// import kitchen_table_thumb from '../../assets/JO/kitchen_table_thumb.jpg'

// import living_room_plan from '../../assets/JO/living_room_plan.jpg'

const JH = () => {
  const InView = () => {
    // eslint-disable-next-line
    const { ref, inView, entry, rootMargin } = useInView({
      threshold: 0,
      initialInView: false,
      rootMargin: '100% 0% -20% 0%',
      // rootMargin: '-50px 0px 10px 0px', // good
    })

    return (
      <div className='bg-white flex flex-col h-[60vh] border-r-32 border-l-32 border-black border-solid duration-700'>
        <div className='flex justify-center'>
          <div
            className={`pl-2 pr-1 border-0 abstract-fade mb-32 flex w-3/4 text-xl duration-500 ${
              inView
                ? 'translate-y-32 md:translate-y-30 lg:translate-y-32'
                : 'translate-y-16 shadow-md'
            }`}
          >
            {JH_abstract}
          </div>
        </div>

        <div
          className={`bg-white transition-opacity ease-in-out duration-700 lg:mt-20  ${
            inView ? '' : 'opacity-0'
          }`}
        >
          <div className='flex justify-center'>
            <SideMenu />
          </div>

          {/* <div className='bg-white flex flex-row ml-2 mr-2 gap-2 md:gap-x-16 lg:flex-wrap lg:pt-4 lg:justify-center'>
            <ModalImage
              className='shadow-md pt-2 h-32 w-32'
              small={mitts}
              large={mitts}
            />

            <ModalImage
              className='shadow-md h-32 w-32'
              small={inside_door}
              large={inside_door}
            />
            <ModalImage
              className='shadow-md h-32 w-32'
              small={living_room}
              large={living_room}
            />

            <ModalImage
              className='shadow-md h-32 w-32'
              small={coffee}
              large={coffee}
            />
          </div> */}

          <div className='flex flex-col justify-center'>
            <div ref={ref} className='invisible w-0'>
              <h2>{`inside viewport ${inView}.`}</h2>
            </div>
            <div className='flex justify-center mt-4 pt-16 -translate-y-16'>
              <ReactAudioPlayer src={JH_talking} controls />
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

export default JH

import { useRef, useState, useEffect } from 'react'
import { useOutletContext } from 'react-router'

import StoryFrame from '../components/StoryFrame.jsx'

import { jo, JO_abstract, JO_cover_style } from '../assets/JO/JO_constants.js'
import house_front from '../assets/JO/house_front.JPG'

import { m, M_abstract, M_cover_style } from '../assets/M/M_constants.js'
import building_side from '../assets/M/building_side.JPG'

import { jh, JH_abstract, JH_cover_style } from '../assets/JH/JH_constants.js'
import living_room from '../assets/JH/living_room.JPG'

const Stories = () => {
  const [fadeOffElements, setFadeOffElements] = useState(false)
  const [storyLoad, setStoryLoad] = useOutletContext()
  // const [borderWidthLoad, setBorderWidthLoad] = useState(false)
  console.log(storyLoad)
  const el = useRef(null)
  // const el2 = useRef(null)
  useEffect(() => {
    setStoryLoad(true)
    // setTimeout(() => {
    //   setBorderWidthLoad(true), '650'
    // })
    return () => {
      setStoryLoad(false)
    }
  }, [setStoryLoad])

  return (
    <div className='flex justify-center w-full'>
      <div
        className={`justify-center bg-white md:w-[60vw] overflow-y-auto h-[60vh] duration-700 
        ${
          fadeOffElements
            ? 'w-[120vh] md:w-[190vh] border-r-32 border-l-32 border-black'
            : ''
        }`}
      >
        <div className='flex flex-col h-full gap-y-72 md:gap-y-48 overflow-y-auto no-scrollbar'>
          <StoryFrame
            storyID={jh}
            coverStyle={JH_cover_style}
            coverPhoto={living_room}
            abstract={JH_abstract}
            el={el}
            fadeOffElements={fadeOffElements}
            setFadeOffElements={setFadeOffElements}
          />

          <StoryFrame
            storyID={jo}
            coverStyle={JO_cover_style}
            coverPhoto={house_front}
            abstract={JO_abstract}
            el={el}
            fadeOffElements={fadeOffElements}
            setFadeOffElements={setFadeOffElements}
          />

          <StoryFrame
            storyID={m}
            coverStyle={M_cover_style}
            coverPhoto={building_side}
            abstract={M_abstract}
            el={el}
            fadeOffElements={fadeOffElements}
            setFadeOffElements={setFadeOffElements}
          />
        </div>
      </div>
      {/* </div> */}
    </div>
  )
}

export default Stories

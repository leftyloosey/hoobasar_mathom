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
    // <div>
    <div className='abstract-fade'>
      <div
        className={`bg-white flex flex-col gap-y-24 overflow-y-auto h-[71vh] p-16 duration-300 
        ${fadeOffElements ? 'opacity-0' : 'opacity-100'}`}
      >
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
    // </div>
  )
}

export default Stories

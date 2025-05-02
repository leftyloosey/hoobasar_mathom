import { useRef, useState, useEffect } from 'react'
import { useOutletContext } from 'react-router'

import StoryFrame from '../components/StoryFrame.jsx'

import JO_abstract from '../assets/JO/JO_abstract.js'
import house_front from '../assets/JO/house_front.JPG'
import M_abstract from '../assets/M/M_abstract.js'
import building_side from '../assets/M/building_side.JPG'

const Stories = () => {
  const JO_cover_style = {
    height: '64px',
    width: '32px',
  }
  const M_cover_style = {
    height: '64px',
    width: '64px',
  }

  const [fadeOffElements, setFadeOffElements] = useState(false)
  const [storyLoad, setStoryLoad] = useOutletContext()
  console.log(storyLoad)
  const el = useRef(null)
  // const el2 = useRef(null)
  useEffect(() => {
    setStoryLoad(true)

    return () => {
      setStoryLoad(false)
    }
  }, [setStoryLoad])

  return (
    <div>
      <StoryFrame
        coverStyle={JO_cover_style}
        abstract={JO_abstract}
        coverPhoto={house_front}
        el={el}
        fadeOffElements={fadeOffElements}
        setFadeOffElements={setFadeOffElements}
      />
      <StoryFrame
        coverStyle={M_cover_style}
        abstract={M_abstract}
        coverPhoto={building_side}
        el={el}
        fadeOffElements={fadeOffElements}
        setFadeOffElements={setFadeOffElements}
      />
    </div>
  )
}

export default Stories

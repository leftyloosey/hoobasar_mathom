// import { useState } from 'react'

import StoryFrame from '../components/StoryFrame.jsx'

import { jo, JO_abstract, JO_cover_style } from '../assets/JO/JO_constants.js'
import house_front from '../assets/JO/house_front.JPG'

import { m, M_abstract } from '../assets/M/M_constants.js'
import building_side from '../assets/M/building_side.JPG'

import { jh, JH_abstract, JH_cover_style } from '../assets/JH/JH_constants.js'
import coffee from '../assets/JH/coffee.JPG'

const Stories = () => {
  // const [fadeOffElements, setFadeOffElements] = useState(false)

  return (
    <div>
      <div
        className={`bg-white flex flex-col gap-y-64 overflow-y-auto h-[71vh] p-16 duration-700 `}
      >
        <StoryFrame
          storyID={m}
          // coverStyle={M_cover_style}
          coverPhoto={building_side}
          abstract={M_abstract}
          // fadeOffElements={fadeOffElements}
          // setFadeOffElements={setFadeOffElements}
        />

        <StoryFrame
          storyID={jh}
          coverStyle={JH_cover_style}
          coverPhoto={coffee}
          abstract={JH_abstract}
          // fadeOffElements={fadeOffElements}
          // setFadeOffElements={setFadeOffElements}
        />

        <StoryFrame
          storyID={jo}
          coverStyle={JO_cover_style}
          coverPhoto={house_front}
          abstract={JO_abstract}
          // fadeOffElements={fadeOffElements}
          // setFadeOffElements={setFadeOffElements}
        />
      </div>
    </div>
  )
}

export default Stories

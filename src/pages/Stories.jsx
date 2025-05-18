// import { useState } from 'react'

import StoryFrame from '../components/StoryFrame.jsx'

import { jo, JO_abstract, JO_cover_style } from '../assets/JO/JO_constants.js'
import house_front from '../assets/JO/house_front.JPG'

import { m, M_abstract } from '../assets/M/M_constants.js'
import building_side from '../assets/M/building_side.JPG'

import { jh, JH_abstract, JH_cover_style } from '../assets/JH/JH_constants.js'
import coffee from '../assets/JH/coffee.JPG'

import { b, B_abstract, B_cover_style } from '../assets/B/B_constants.js'
import christmas_tree from '../assets/B/christmas_tree.JPG'

import { ps, PS_abstract, PS_cover_style } from '../assets/PS/PS_constants.js'
import shower from '../assets/PS/shower.JPG'

import {
  lse,
  LSE_abstract,
  LSE_cover_style,
} from '../assets/LSE/LSE_constants.js'
import house2 from '../../dist/house2.svg'

const Stories = () => {
  // const [fadeOffElements, setFadeOffElements] = useState(false)

  return (
    <div>
      <div
        className={`bg-white flex flex-col gap-y-64 overflow-y-auto h-[77vh] md:h-[75vh] p-10 duration-700 pb-64`}
      >
        <StoryFrame
          storyID={jh}
          coverStyle={JH_cover_style}
          coverPhoto={coffee}
          abstract={JH_abstract}
        />

        <StoryFrame
          storyID={m}
          // coverStyle={M_cover_style}
          coverPhoto={building_side}
          abstract={M_abstract}
        />

        <StoryFrame
          storyID={jo}
          coverStyle={JO_cover_style}
          coverPhoto={house_front}
          abstract={JO_abstract}
        />
        <StoryFrame
          storyID={b}
          coverStyle={B_cover_style}
          coverPhoto={christmas_tree}
          abstract={B_abstract}
        />
        <StoryFrame
          storyID={ps}
          coverStyle={PS_cover_style}
          coverPhoto={shower}
          abstract={PS_abstract}
        />
        <StoryFrame
          storyID={lse}
          coverStyle={LSE_cover_style}
          coverPhoto={house2}
          abstract={LSE_abstract}
        />
      </div>
    </div>
  )
}

export default Stories

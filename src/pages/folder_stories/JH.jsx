import StoryPage from '../../components/StoryPage.jsx'

import JH_talking from '../../assets/JH/JH_talking.mp3'
import { JH_abstract } from '../../assets/JH/JH_constants.js'

import inside_door from '../../assets/JH/inside_door.JPG'
import living_room from '../../assets/JH/living_room.JPG'
import coffee from '../../assets/JH/coffee.JPG'
import mitts from '../../assets/JH/mitts.JPG'

const photoRay = [living_room, coffee, mitts, inside_door]

const JH = () => {
  return (
    <>
      <StoryPage
        abstract={JH_abstract}
        audio={JH_talking}
        photoRay={photoRay}
      />
    </>
  )
}

export default JH
